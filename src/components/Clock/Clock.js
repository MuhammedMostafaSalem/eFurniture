import React, { useEffect, useRef, useState } from 'react'

const Clock = () => {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval = useRef()

    const countDown = () => {
        const destination = new Date('December 1, 2024').getTime()

        interval = setInterval(()=> {
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(different % (1000 * 60) / 1000)


            if(destination < 0) {
                clearInterval(interval.current)
            }else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
    }


    useEffect(()=> {
        countDown()
    })


    return (
        <div className='clock_wrapper'>
            <div className='clock_data'>
                <div>
                    <h1>{days}</h1>
                    <h5>days</h5>
                </div>
                <span>:</span>
                <div>
                    <h1>{hours}</h1>
                    <h5>hours</h5>
                </div>
                <span>:</span>
                <div>
                    <h1>{minutes}</h1>
                    <h5>minutes</h5>
                </div>
                <span>:</span>
                <div>
                    <h1>{seconds}</h1>
                    <h5>seconds</h5>
                </div>
            </div>
        </div>
    )
}

export default Clock