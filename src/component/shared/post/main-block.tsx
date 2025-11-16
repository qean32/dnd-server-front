import React from 'react'
import { CountBlock } from './'

interface Props {
}


export const MainBlock: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="rounded-sm py-2">
            <div className="flex flex-col pb-3">
                <p className="text-xl pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat, ducimus perspiciatis numquam architecto reprehenderit in hic aliquam. Ullam, natus!</p>
                <div>статья</div>
            </div>
            <CountBlock />
        </div>
    )
}
