// Clock component that shows the time backwards
'use client'

import { useState, useEffect } from "react";

type ClockTime = {
    hour: string,
    minute: string,
    second: string,
}

const displayTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`
}

const getCurrentClockTime = (): ClockTime => {
    const now = new Date();
    return {
      hour: displayTime(now.getHours()),
      minute: displayTime(now.getMinutes()),
      second: displayTime(now.getSeconds()),
    };
  };

export default function Clock() {
    const now = new Date()
    const [currentTime, setCurrentTime] = useState<ClockTime>(getCurrentClockTime())

    // Refresh every 10th of a second so it is smoother
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(getCurrentClockTime())
        }, 100)

        return () => clearInterval(timer)
    }, [])
    return (
        <div>{currentTime.second}:{currentTime.minute}:{currentTime.hour}</div>
    )
}
