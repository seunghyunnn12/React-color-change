import React, { useState, useRef } from 'react'
import './ColorChange.scss'

const ColorChange = () => {


    const getRandomColor = () => {
        const randomColor = '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0')

        return randomColor
    }
    const [bgColor, setBgColor] = useState(getRandomColor())
    const [isPlaying, setIsPlaying] = useState(false)
    const intervalRef = useRef(null)

    const startBgchange = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setBgColor(getRandomColor())
            }, 2000)
            setIsPlaying(true)
        }
    }
    const stopBgChange = () => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current=null
            setIsPlaying(false)
        }
    }

    return (
        <div>
            <div className='bg-container' style={{ backgroundColor: bgColor }}>
                <h1 className='color-code'>{bgColor.toUpperCase()}</h1>
                <div className="button-group">
                    <button
                    onClick={startBgchange} 
                    className="control-button"
                    disabled={isPlaying}
                    >
                        play
                    </button>
                    <button 
                    onClick={stopBgChange}
                    className="control-button"
                    disabled={!isPlaying}>stop</button>
                </div>
            </div>
        </div>
    )
}

export default ColorChange