import React from 'react'
import { useBoolean, useDebounceFunction } from '../../lib/castom-hook'

interface Props {
}

const clickHandler = () => {
    window.scrollTo(0, 0)
}

export const ScrollTop: React.FC<Props> = ({ }: Props) => {
    const { boolean, on, off } = useBoolean()
    const fn = useDebounceFunction(() => {
        if (window.scrollY > 1200) {
            on()
        } else {
            off()
        }
    }, 200)

    React.useEffect(() => {
        window.addEventListener('scroll', fn)
        return () => {
            window.removeEventListener('scroll', fn)
        }
    }, [])

    return (
        <>
            {boolean &&
                <div
                    className='bg-color-darkness mount-opacity rounded-sm p-5 fixed top-4 right-4 transition-03 hover:-translate-y-2 cursor-pointer z-50'
                    onClick={clickHandler}>
                    <img src="/icon/double-arrow.svg" alt="" className='icon-sm rotate-90' />
                </div>
            }
        </>
    )
}
