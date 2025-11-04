import React from "react";
import useImage from "use-image";
import { useBoolean } from "./use-boolean";
import { useAppDispatch } from "./redux";
import { changeSomethingEntity } from "../../store/game-store";

export const useToken = (path: string) => {
    const [image] = useImage(path);
    const dispath = useAppDispatch()
    const rectRef = React.useRef<null | HTMLCanvasElement | any>();
    const trRef = React.useRef<null | HTMLCanvasElement | any>();
    const transform = useBoolean()

    const mouseOverHandler = (e: React.MouseEvent<HTMLCanvasElement> | any) => {
        // @ts-ignore
        e.target.getStage().container().style.cursor = 'pointer';
    };

    const mouseOutHandler = (e: React.MouseEvent<HTMLCanvasElement> | any) => {
        // @ts-ignore
        e.target.getStage().container().style.cursor = 'default';
    };

    const clickHandler = () => {
        transform.swap()
    };

    const dragStartHandler = () => {
    };

    const dragEndHandler = (e: any) => {
        dispath(changeSomethingEntity({ type: 'entities', payload: { id: e.currentTarget.attrs.id, position: { ...e.currentTarget._lastPos } } }))
    };

    const dragMoveHandler = () => {
    };

    React.useEffect(() => {
        trRef.current.nodes([rectRef.current]);
    }, []);

    return { mouseOutHandler, mouseOverHandler, dragMoveHandler, clickHandler, dragEndHandler, dragStartHandler, image, rectRef, trRef, viewTransform: transform.boolean }
}