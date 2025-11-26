import React from "react";

export const useHandlerClearQuery = (key: string, callBack: Function) => {
    React.useEffect(() => {
        if (!window.location.search.slice(1).split('&').find(item => item.split('=')[0] == key)) {
            callBack('')
        }
    }, [window.location.search])
}
