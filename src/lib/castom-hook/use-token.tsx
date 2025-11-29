import React from "react";
import useImage from "use-image";
import { useBoolean } from "./use-boolean";
import { changeSomethingEntity } from "@/store/session-store";
import { useAppDispatch } from "./redux";

export const useToken = (dispath: ReturnType<typeof useAppDispatch>, path: string) => {
    const [image] = useImage(path);
    const rectRef = React.useRef<null | HTMLCanvasElement | any>();
    const trRef = React.useRef<null | HTMLCanvasElement | any>();
    const transform = useBoolean()

    const mouseOverHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'move';
    };

    const mouseOutHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'default';
    };

    const clickHandler = () => {
        transform.swap()
    };

    const dragStartHandler = () => {
    };

    const dragEndHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        dispath(changeSomethingEntity({
            type: 'entities', payload: {
                id: e.currentTarget.attrs.id,
                position: {
                    y: e.target.attrs.y,
                    x: e.target.attrs.x,
                }
            }
        }))
        rectRef.current.to({
            y: e.target.attrs.y,
            x: e.target.attrs.x,
            duration: 0.7,
        })
    };

    const dragMoveHandler = () => {
    };

    React.useEffect(() => {
        trRef.current.nodes([rectRef.current]);
    }, []);

    return { mouseOutHandler, mouseOverHandler, dragMoveHandler, clickHandler, dragEndHandler, dragStartHandler, image, rectRef, trRef, viewTransform: transform.boolean }
}