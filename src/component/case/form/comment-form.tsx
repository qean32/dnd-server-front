import React from 'react'
import { CommentInput } from '@component/ui'
import { toast } from '@/lib/function'
import { authFormDto, authSchema } from '@/model/schema'
import { useAppDispatch } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Props {
}


export const CommentForm: React.FC<Props> = ({ }: Props) => {
    const form = useForm<authFormDto>({
        mode: 'onChange',
        resolver: zodResolver(authSchema)
    })
    const [error] = React.useState<string>()

    const onSubmit: SubmitHandler<authFormDto> = (data) => {
        console.log(data);
        toast(dispatch, 'message', { text: error })
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
