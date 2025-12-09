import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { useAppSelector } from '@/lib/castom-hook/redux'
import { Initiative, NoFindData, TextArea, TextInput } from '@/component/ui'
import { FormProvider } from 'react-hook-form'
import { useMyForm } from '@/lib/castom-hook'
import { pushEntityToSessionFormDto, pushEntityToSessionSchema } from '@/model/schema'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const EntityMore: React.FC<Props> = ({ view, swap }: Props) => {
    const { bestiary } = useAppSelector(state => state.session)
    const entity = bestiary.find(item => item.idInBestiary == Number(view))
    const { form, submitHandler } = useMyForm<pushEntityToSessionFormDto>(pushEntityToSessionSchema,
        () => { },
        () => { },
    )


    return (
        <Modal
            swap={swap}
            view={view}
            className='justify-end h-full'
            animation={{
                open: 'right-modal-open',
                close: 'right-modal-close'
            }}
        >
            {entity ?
                <>
                    {true ?
                        <FormProvider {...form}>

                            <form
                                className='bg-color h-full w-[340px] flex items-center justify-start pt-3 flex-col'
                                onClick={stopPropagation}
                                onSubmit={submitHandler}
                            >
                                <div className="w-11/12 bg-color-dark aspect-square rounded-sm bg-img" style={{ backgroundImage: `url(${entity ? entity.path : ''})` }} ></div>
                                <div className="w-11/12 rounded-sm pt-4 flex flex-col gap-2">
                                    <TextInput name='name' placeHolder='Наименование' defaultValue={entity.name} />
                                    <TextArea name='description' title='' className='p-4 px-5 h-[300px] overflow-scroll' >
                                        {entity.description}
                                    </TextArea>
                                    <Initiative title={entity ? entity.initiative : 0} />
                                </div>
                            </form>
                        </FormProvider>
                        :
                        <div onClick={stopPropagation} className='bg-color h-full w-[340px] flex items-center justify-start pt-3 flex-col'>
                            <div className="w-11/12 bg-color-dark aspect-square rounded-sm bg-img" style={{ backgroundImage: `url(${entity ? entity.path : ''})` }} ></div>
                            <div className="w-11/12 rounded-sm pt-4">
                                <p className='text-2xl'>{entity ? entity.name : ''}</p>
                                <div className="h-[300px] overflow-scroll rounded-sm bg-color-dark p-4 py-2 my-2 mb-4">
                                    {entity?.description}
                                </div>
                                <Initiative title={entity ? entity.initiative : 0} />
                            </div>
                        </div>
                    }
                </>
                :
                <div onClick={stopPropagation} className='bg-color h-full w-[340px] flex'><NoFindData title='Сущность не найдена' view /></div>
            }
        </Modal>
    )
}
