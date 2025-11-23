import { Button, DisabledInput, TextArea } from '@/component/ui'
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
    const entity = object?.isEntity ? object : { path: '', name: '', id: 0, discription: '', initiative: 0 }

    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1 pt-15">
                <div className="h-[180px] flex justify-center items-start">
                    <div className="w-1/2 aspect-square bg-img rounded-full outline-bg-light" style={{ backgroundImage: `url(${entity.path})` }}></div>
                </div>
                <div className='px-5'>
                    <DisabledInput value={entity.name} className='my-5' />
                    <div className="flex justify-between text-sm">
                        <p>Инициатива</p>
                        <DisabledInput value={entity.initiative} className='w-[60px]' />
                    </div>
                    <TextArea title='Описание' className='h-[160px] overflow-scroll bg-color-dark p-4 py-2 my-2 mb-4'>
                        {entity?.discription}
                    </TextArea>
                </div>
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2 pb-1" data={JSON.stringify({ ...object })}>
                    {children}
                    <Button fn={addSomethingFromJSON} variant='acceess'>
                        <p className='pointer-events-none'>Добавить</p></Button>
                </div>
                <Button variant='acceess' fn={part.off} className='mt-2 w-11/12'><p>Добавить свой токен</p></Button>
            </div>
        </div>
    )
}
