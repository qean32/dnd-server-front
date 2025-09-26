import React from "react"
import { refreshToken } from "../../lib/function"

export const RefreshToken: React.FC<{}> = () => {
    React.useEffect(() => {
        refreshToken()
    }, [])

    return <></>
}