import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { UploadImgArea, Button, ModalCross } from '@component/ui'
import { useMyForm } from '@/lib/castom-hook'
import z from 'zod'
import { FormProvider } from 'react-hook-form'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const PushImg: React.FC<Props> = ({ view, swap }: Props) => {
    const { form, submitHandler } = useMyForm<{ path: any }>(
        z.object({
            path: z.any()
        }),
        () => { },
        () => { }
    )


    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <FormProvider {...form}>

                <form
                    className="bg-color w-5/12 h-8/12 rounded-md flex flex-col overflow-hidden relative"
                    onClick={stopPropagation}
                    onSubmit={submitHandler}
                >
                    <ModalCross fn={swap} />
                    <div className="m-7 h-10/12">
                        <UploadImgArea
                            className='h-full w-full'
                            name='path'
                        />
                    </div>
                    <div className="flex gap-5 justify-end p-5 flex-1 items-end">
                        <Button
                            variant='ghost'
                            fn={swap}
                        ><p>Отмена</p></Button>
                        <Button
                            variant='acceess'
                            type='submit'
                        ><p>Добавить</p></Button>
                    </div>
                </form>
            </FormProvider>
        </Modal>
    )
}
