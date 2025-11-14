export const getHTMLData = (e: any, name: string = 'data', json: boolean = false) => {
    const data = e.target.getAttribute(name)

    if (json) {
        return JSON.parse(data)
    }
    return data
}