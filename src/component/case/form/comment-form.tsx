import React from 'react'
import { CommentInput } from '@component/ui'
import { toast } from '@/lib/function'
import { commentFormDto, commentSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
}


export const CommentForm: React.FC<Props> = ({ }: Props) => {
    const form = useForm<commentFormDto>({
        mode: 'onChange',
        resolver: zodResolver(commentSchema)
    })

    const onSubmit: SubmitHandler<commentFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: '' })
    }
    const dispatch = useAppDispatch()

    return (
        <FormProvider {...form}>

            <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                <CommentInput />
            </form>
        </FormProvider>
    )
}
