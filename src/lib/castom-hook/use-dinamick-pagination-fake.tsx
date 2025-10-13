import React from "react"
import { useBoolean, useHandlerScroll } from "."

export const useDinamickPaginationFake = <T,>(skip_: number = 0, search: string, array: T[]) => {
    const { refHandler, boolean } = useHandlerScroll(10)

    const [skip, setSkip] = React.useState<number | string>(skip_)
    const [finaldata, setFinalData] = React.useState<any[]>(array)
    const { boolean: loading, on, off } = useBoolean(true)
    // const RQData = useQuery([...RQkey, skip, search], () => fetch_(skip), { keepPreviousData: false, refetchOnWindowFocus: false })

    React.useEffect(() => {
        // search ? setSkip(0) : setFinalData([])
    }, [search])

    React.useEffect(() => {
        if (
            true
        ) {
            off();
            (search ?
                setFinalData((prev: T[]) => [...prev, ...prev])
                :
                setFinalData((prev: T[]) => [...prev, ...prev])
            )
        }
    }, [skip])

    React.useEffect(() => {
        if (boolean) {
            on()
            setTimeout(() =>
                setSkip((prev) => Number(prev) + 4)
                , 600)
        }
    }, [boolean])

    return { skip, finaldata, refHandler, setFinalData, loading }
}