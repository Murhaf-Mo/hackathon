import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default () => {
    const { width, height } = useWindowSize()
    return (
        <Confetti
            tweenDuration = {5}
            width={width}
            height={height}
        />
    )
}