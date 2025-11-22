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
    const { object } = useAppSelector(state => state.addedObject)
    React.useEffect(() => {
        if (object) {
            part.on()
        }
    }, [object])
    // @ts-ignore
    const entity = object?.isEntity ? object : { path: '', name: '', id: 0, discription: '', initiative: 0 }

    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1">
                <div className="h-6/12 flex justify-center items-center pt-5">
                    <div className="w-1/2 aspect-square bg-img rounded-full outline-bg-light" style={{ backgroundImage: `url(${entity.path})` }}></div>
                </div>
                <div className='px-5'>
                    <DisabledInput value={entity.name} className='mb-5' />
                    <div className="flex justify-between text-sm">
                        <p>Инициатива</p>
                        {/* @ts-ignore */}
                        <DisabledInput value={entity.initiative} className='w-[60px]' />
                    </div>
                    {/* @ts-ignore */}
                    <p className='pt-4 text-sm text-justify'>{entity?.discription}</p>
                </div>
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <Button variant='acceess' fn={part.off} className='my-2'><p>Добавить свою карту</p></Button>
                <div className="flex gap-2" data={JSON.stringify({ ...object })}>
                    {children}
                    <Button fn={addSomethingFromJSON} variant='acceess'>
                        <p className='pointer-events-none'>Добавить</p></Button>
                </div>
            </div>
        </div>
    )
}
