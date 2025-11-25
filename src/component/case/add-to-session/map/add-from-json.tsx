import { Button, DisabledInput, NoFindData } from '@/component/ui'
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
    const map = data?.isMap ? data : { path: '', name: '', id: 0, size: { x: 0, y: 0 } }

    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1">
                {data?.isObject
                    &&
                    <>
                        <div className="p-5 h-[220px] w-full mt-8">
                            <div className="h-full rounded-lg cursor-pointer bg-img bg-color-dark"
                                style={{ backgroundImage: `url(${map.path})` }}></div>
                        </div>

                        <div className="px-5">
                            <DisabledInput value={map.name} />
                            <p className='py-2 pl-0.5 pb-4'>Размеры карты</p>
                            <div className="flex items-center pb-5">
                                <DisabledInput value={map.size?.x} className='mr-4' />
                                x
                                <DisabledInput value={map.size?.y} className='ml-4' />
                            </div>
                        </div>
                    </>
                }
                <NoFindData title='карта не выбрана' className='h-full' view={!data?.isObject} />
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2" data={JSON.stringify({ ...data })}>
                    {children}
                    <Button fn={addSomethingFromJSON} variant='acceess'>
                        <p className='pointer-events-none'>Добавить</p></Button>
                </div>
                <Button variant='acceess' fn={part.off} className='mt-3 w-11/12'><p>Добавить свою карту</p></Button>
            </div>
        </div>
    )
}
