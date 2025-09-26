import { Button } from "../component/ui"

export const TestPage = () => {
    return (
        <main className="p-5">
            {/* <Select options={[
                <><img src="icon/character.svg" /> <p>zxczxc</p></>,
                <><img src="icon/character.svg" /> <p>123</p></>,
            ]} /> */}

            {/* <Checkbox fn={swap} title="соглашение" value={boolean} /> */}
            <Button title="zxc" icon={<img src="icon/character.svg" />} />
        </main>
    )
}