import React from "react";
import { coordinateDto } from "../../model";
import { fakeNodes } from "../../fake-data";

interface node extends coordinateDto {
    path: string
    sizeX: number
    sizeY: number
    id: number
}

interface extendsNode extends node {
    offsetY: number
    offsetX: number
}

export const useGame = () => {
    const ref = React.useRef<HTMLCanvasElement | null>()
    const [selectedElement, setSelectedElement] = React.useState<extendsNode | null>();
    const [elements, setElements] = React.useState<node[]>(fakeNodes)
    const { getElementAtPosition, getMouseCoordinates } = useGamePack()

    React.useLayoutEffect(() => {
        if (!ref.current) {
            return
        }
        const context = ref.current.getContext('2d');

        if (!context) {
            return
        }

        elements.forEach(({ path, sizeX, sizeY, x, y }) => {
            const image = new Image();
            image.src = path;
            image.onload = () => {
                context.drawImage(image, x, y, sizeX, sizeY);
            }
        })
        context.clearRect(0, 0, ref.current.width, ref.current.height);
    }, [elements])

    const mouseUpHandler = () => {
        setSelectedElement(null)
        document.body.style.cursor = 'auto'
    }

    const mouseDownHandler = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const coord = getMouseCoordinates(e);
        const element = getElementAtPosition(coord, elements);

        // @ts-ignore
        setSelectedElement(element)
        document.body.style.cursor = 'grab'
    }

    const updateElement = (node: node, newCoordinate: coordinateDto) => {
        setElements(prev => [...prev.filter(item => item.id != node.id), { ...node, ...newCoordinate }]);
    };

    const mouseMoveHandler = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const { x, y } = getMouseCoordinates(e);

        if (selectedElement) {
            updateElement(selectedElement, { x: x - selectedElement.offsetX, y: y - selectedElement.offsetY })
        }
    }

    return { mouseDownHandler, mouseMoveHandler, mouseUpHandler, ref }
}

const useGamePack = () => {
    const getElementAtPosition = (coordinate: coordinateDto, elements: node[]) => {
        return {
            ...elements
                .find(item => {
                    if (
                        item.y < coordinate.y &&
                        item.y + item.sizeY > coordinate.y &&
                        item.x < coordinate.x &&
                        item.x + item.sizeX > coordinate.x
                    ) {
                        return true
                    }
                }),
            offsetX: 60,
            offsetY: 60,
        }
    };

    const getMouseCoordinates = (e: any) => {
        return { x: e.pageX, y: e.pageY };
    };

    return { getElementAtPosition, getMouseCoordinates }
}