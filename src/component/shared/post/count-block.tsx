import React from 'react'
import { IconAndCount, IconAndNumber } from '@/component/ui'
import { useBoolean } from '@/lib/castom-hook'

interface Props {
}

const actionsName = {
    like: "like",
    unlike: 'unlike'
}

export const CountBlock: React.FC<Props> = ({ }: Props) => {
    const [actions, setActions] = React.useState<string[]>([])
    const [count, setCount] = React.useState<number>(0)
    const { boolean: action, on, off } = useBoolean()

    function clickHandler() {
        if (count % 2 == 0) {
            setActions(prev => [...prev, (actionsName.like)])
            setCount(prev => ++prev)
        } else {
            setActions(prev => prev.filter(item => item != (actionsName.like)))
            setCount(prev => ++prev)
        }
    }

    React.useEffect(() => {
        console.log(actions);

    }, [actions])

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (actions[0] == actionsName.like) {
                console.log(actions);
                console.log("like");
                setActions([])
            }
            else if (actions[0] == actionsName.unlike) {
                console.log('dis');
                setActions([])
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="flex gap-2 -translate-x-1">
            <div onClick={clickHandler}>
                <IconAndCount count={98} icon="/icon/like-no-fill.svg" iconAction="/icon/like-fill.svg" action={action} />
            </div>
            <IconAndNumber count={29} icon="/icon/view.svg" />
        </div>
    )
}
