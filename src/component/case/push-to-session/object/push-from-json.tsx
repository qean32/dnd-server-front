import { Button, DisabledInput, NoFindData } from '@/component/ui'
import { TypeUseBoolen } from '@/lib/castom-hook'
import { useAppSelector } from '@/lib/castom-hook/redux'
import React from 'react'

interface Props {
    part: TypeUseBoolen
    children: React.ReactNode
}


export const PushFromJSON: React.FC<Props> = ({ part, children }: Props) => {
    const { object: data } = useAppSelector(state => state.pushedObject)
    React.useEffect(() => {
        if (data) {
            part.on()
        }
    }, [data])
    // @ts-ignore
    const object = data?.isObject ? data : { path: '', name: '', id: 0, size: { x: 0, y: 0 } }

    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1 px-6">
                {data?.isObject
                    &&
                    <>
                        <div className="h-[300px] flex justify-center items-center pt-15">
                            <div className="w-[99%] aspect-square bg-img bg-color-dark rounded-sm" style={{ backgroundImage: `url(${object.path})` }}></div>
                        </div>
                        <div className='pt-10'>
                            <DisabledInput value={object.name} />
                        </div>
                    </>
                }
                <NoFindData title='токен не выбран' className='h-full' view={!data?.isObject} />
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2" data={JSON.stringify({ ...data })}>
                    {children}
                    <Button
                        type='submit'
                        variant='acceess'
                    >
                        <p className='pointer-events-none'>Добавить</p></Button>
                </div>
                <Button variant='acceess' fn={part.off} className='mt-3 w-11/12'><p>Добавить свою обьект</p></Button>
            </div>
        </div>
    )
}
