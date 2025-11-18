export const addSomethingFromJSON = (e: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    console.log(JSON.parse(e.target.parentElement.parentElement.getAttribute('data')))
}