import React from 'react'

interface Props {
    children: React.ReactNode
}


export const GameArea: React.FC<Props> = ({ }: Props) => {
    const ref = React.useRef<HTMLCanvasElement | null>(null)
    const [selectedElement, setSelectedElement] = React.useState<any>();
    const [elements, setElements] = React.useState([])
    const [action, setAction] = React.useState("none");
    const [panOffset, setPanOffset] = React.useState({ x: 0, y: 0 });

    const createElement = (id: number, x1: number, y1: number, x2: number, y2: number, type: any) => {
        return { id, x1, y1, x2, y2, type };
    };

    const nearPoint = (x: number, y: number, x1: number, y1: number, name: string) => {
        return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5 ? name : null;
    };

    const positionWithinElement = (x: number, y: number, element: any) => {
        const { type, x1, x2, y1, y2 } = element;
        switch (type) {
            case "rectangle":
                const topLeft = nearPoint(x, y, x1, y1, "tl");
                const topRight = nearPoint(x, y, x2, y1, "tr");
                const bottomLeft = nearPoint(x, y, x1, y2, "bl");
                const bottomRight = nearPoint(x, y, x2, y2, "br");
                const inside = x >= x1 && x <= x2 && y >= y1 && y <= y2 ? "inside" : null;
                return topLeft || topRight || bottomLeft || bottomRight || inside;
        }
    };

    const getElementAtPosition = (x: number, y: number, elements: any[]) => {
        return elements
            .map(element => ({ ...element, position: positionWithinElement(x, y, element) }))
            .find(element => element.position !== null);
    };

    const getMouseCoordinates = (event: any) => {
        const clientX = event.clientX - panOffset.x;
        const clientY = event.clientY - panOffset.y;
        return { clientX, clientY };
    };

    React.useLayoutEffect(() => {
        if (!ref.current) {
            return
        }
        const context = ref.current.getContext('2d');

        if (!context) {
            return
        }

        if (ref.current) {
            ref.current.width = window.innerWidth;
            ref.current.height = window.innerHeight;
        }

        const image = new Image();
        image.src = "/icon/dragon.svg";
        image.onload = () => {
            context.drawImage(image, 500, 50, 100, 100);
        }
        image.onmouseenter = (e) => {
            console.log(e)
        }
    }, [])

    const mouseUpHandler = (event: any) => {
        console.log('up')
    }

    const mouseDownHandler = () => {
        const { clientX, clientY } = getMouseCoordinates(event);
        console.log('down')
        const element = getElementAtPosition(clientX, clientY, elements);
        if (element) {
            if (element.type === "pencil") {
                const xOffsets = element.points.map((point: any) => clientX - point.x);
                const yOffsets = element.points.map((point: any) => clientY - point.y);
                setSelectedElement({ ...element, xOffsets, yOffsets });
            } else {
                const offsetX = clientX - element.x1;
                const offsetY = clientY - element.y1;
                setSelectedElement({ ...element, offsetX, offsetY });
            }
            setElements(prevState => prevState);

            if (element.position === "inside") {
                setAction("moving");
            } else {
                setAction("resizing");
            }
        }
    }

    const updateElement = (id: any, x1: number, y1: number, x2: number, y2: number, type: any, options: any) => {
        const elementsCopy = [...elements];
        elementsCopy[id] = createElement(id, x1, y1, x2, y2, type);

        setElements(elementsCopy);
    };

    const mouseMoveHandler = (event: any) => {
        console.log('move')
        if (selectedElement) {

            const { clientX, clientY } = getMouseCoordinates(event);

            const { id, x1, x2, y1, y2, type, offsetX, offsetY } = selectedElement;
            const width = x2 - x1;
            const height = y2 - y1;
            const newX1 = clientX - offsetX;
            const newY1 = clientY - offsetY;
            const options = type === "text" ? { text: selectedElement.text } : {};
            updateElement(id, newX1, newY1, newX1 + width, newY1 + height, type, options);
        }
    }

    return (
        <canvas
            // style={{ backgroundImage: 'url(/img/bg-f.jpg)' }}
            ref={ref}
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={mouseDownHandler}
            onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}
            className='bz-0 transition03 rounded-lg fixed overflow-hidden'
        >
        </canvas>
    )
}
