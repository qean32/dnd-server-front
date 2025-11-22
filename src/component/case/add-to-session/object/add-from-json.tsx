import { Button, DisabledInput } from '@/component/ui'
import { TypeUseBoolen } from '@/lib/castom-hook'
import { useAppSelector } from '@/lib/castom-hook/redux'
import { addSomethingFromJSON } from '@/lib/function'
import React from 'react'

interface Props {
    part: TypeUseBoolen
    children: React.ReactNode
}


export const AddFromJSON: React.FC<Props> = ({ part, children }: Props) => {
    const { object: data } = useAppSelector(state => state.addedObject)
    React.useEffect(() => {
        if (data) {
            part.on()
        }
    }, [data])
    // @ts-ignore
    const object = data?.isObject ? data : { path: '', name: '', id: 0, size: { x: 0, y: 0 } }

    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1 px-5">
                <div className="h-1/2 flex justify-center items-center pt-15">
                    <img src={object.path} alt="" className='max-h-full' />
                </div>
                <div className='pt-5'>
                    <DisabledInput value={object.name} />
                </div>
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <Button variant='acceess' fn={part.off} className='my-2'><p>Добавить свой обьект</p></Button>
                <div className="flex gap-2" data={JSON.stringify({ ...data })}>
                    {children}
                    <Button fn={addSomethingFromJSON} variant='acceess'>
                        <p className='pointer-events-none'>Добавить</p></Button>
                </div>
            </div>
        </div>
    )
}
