import React from 'react'
import { Button } from '@component/ui'
import { ViewAuthor } from '@component/master/h-order-component'
import { Modal } from '@component/case/modal'
import { MainBlock, CommentBlock, PostInfo } from '.'

interface Props {
    className?: string
}


export const PostContent: React.FC<Props> = ({ }: Props) => {
    return (
        <>
            <p className="text-4xl mb-1.5">НАЗВАНИЕ</p>
            <ViewAuthor>
                {/* @ts-ignore */}
                <Modal.Root modal={Modal.AccessAction} fn={() => console.log('zxc')} warning={"Вы собираетесь удалить проект?"} warningButtonText={'Удалить пост'}>
                    <Button variant="reject" className="my-2">Удалить пост</Button></Modal.Root></ViewAuthor>
            <PostInfo />
            <MainBlock />
            <CommentBlock />
        </>
    )
}
