export const getHTMLData = (e: any, json: boolean = false, name: 'data' | 'value' = 'data') => {
    const data = e.target.getAttribute(name)

    if (json) {
        return JSON.parse(data)
    }
    return data
}