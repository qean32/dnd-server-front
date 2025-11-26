export const addSomethingFromJSON = (e: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    JSON.parse(e.target.parentElement.parentElement.getAttribute('data'))
}