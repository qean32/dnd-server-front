import { useAppDispatch } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm, SubmitErrorHandler } from "react-hook-form";
import { toast } from "../function";
import z from "zod";

export const useMyForm = <T extends FieldValues,>(
    schema: z.ZodObject<T> | any,
    submitCallBack: Function,
    submitErrorCallBack: Function,
) => {
    const dispatch = useAppDispatch()
    const form = useForm<T>({
        mode: 'onChange',
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<T> = (data) => {
        submitCallBack()
        console.log(data);
        toast(dispatch, 'message', { text: '' })
    }
    const onError: SubmitErrorHandler<T> = (data) => {
        submitErrorCallBack()
        console.log(data);
        toast(dispatch, 'message', { text: '' })
    }
    const submitHandler = form.handleSubmit(onSubmit, onError)


    return { submitHandler, form, }
}