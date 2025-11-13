import React from 'react'
import { PostInfo, IconAndCount, IconAndNumber } from '../ui'

interface Props {
    className?: string
}


export const PostBody: React.FC<Props> = ({ }: Props) => {
    return (
        <>
            <p className="text-4xl mb-1.5">НАЗВАНИЕ</p>
            <PostInfo />
            <div className="rounded-sm">
                <div className="flex flex-col min-h-[200px]">
                    <p className="text-xl pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat, ducimus perspiciatis numquam architecto reprehenderit in hic aliquam. Ullam, natus!</p>
                    <div>статья</div>
                    <div className="flex gap-2 -translate-x-1">
                        <IconAndCount count={99} icon="/icon/like-no-fill.svg" iconAction="/icon/like-fill.svg" action={false} />
                        <IconAndNumber count={29} icon="/icon/view.svg" />
                    </div>
                </div>
            </div>
        </>
    )
}
