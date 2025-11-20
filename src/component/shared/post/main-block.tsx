import React from 'react'
import { CountBlock } from './'
import { convertToHTML } from '@/lib/function'

interface Props {
    text?: string
}


export const MainBlock: React.FC<Props> = ({ text = 'статья' }: Props) => {
    return (
        <div className="rounded-sm py-2">
            <div className="flex flex-col pb-3">
                <p className="text-xl pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat, ducimus perspiciatis numquam architecto reprehenderit in hic aliquam. Ullam, natus!</p>
                <div dangerouslySetInnerHTML={{ __html: convertToHTML(text.replace('script', '')) }}>
                </div>
            </div>
            <CountBlock />
        </div >
    )
}
