import React, {useEffect, useState} from 'react';
import TimeList from '../TimeList/TimeList';
import Button from '../UI/Button/Button';
import TimeContainer from '../../containers/TimeContainer/TimeContainer';
import useLocalStorage from '../Storage/useLocalStorage';
import './Timer.css'


const Timer = () => {
    const [time, setTime] = useState(new Date())
    const [timeFormat, setTimeFormat] = useState('00:00:00:00')
    const [timersList, setTimersList] =  useLocalStorage('timesList', [])
    const [offset, setOffset] = useState(0)
    const [started, setStarted] = useState(false)
    const [stopped, setStopped] = useState(false)

    const startTimerAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/01/07/audio_ea449d6cea.mp3?filename=start-13691.mp3");
    const stopTimerAudio = new Audio("https://cdn.pixabay.com/download/audio/2021/12/03/audio_19b9dafe07.mp3?filename=switch-click-and-beep-001a-11602.mp3");

    // useEffect(() => {
    //     if (localStorage.getItem("times")) {
    //         setTimersList(JSON.parse(localStorage.getItem("times")));
    //         console.log(localStorage)
    //         console.log(timersList)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('times', JSON.stringify(timersList));
    //     console.log(localStorage)
    //     console.log(timersList)
    // }, [timersList])

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (started) {
                let ms = offset + (new Date()).getTime() - time.getTime()
                formatTime(ms)
            }
        })

        return () => clearInterval(intervalId)
    }, [started])


    const addZero = (num, size) => num.toString().padStart(size, '0')

    const formatTime = (ms) => {
        const secs = Math.floor((ms / 1000) % 60)
        const mins = Math.floor((ms / 1000 / 60) % 60)
        const hrs = Math.floor((ms / 1000 / 3600) % 24)
        ms = Math.floor(ms % 100)
        setTimeFormat(`${addZero(hrs, 2)}:${addZero(mins, 2)}:${addZero(secs, 2)}:${addZero(ms, 2)}`)
    }
 
    const handleStartTimer = () => {
        startTimerAudio.play();
        setStarted(true)
        setTime(new Date())
    }

    const handleStopTimer = () => {
        stopTimerAudio.play();
        setStarted(false)
        setStopped(true)
        setOffset(prev => prev += (new Date()).getTime() - time.getTime())
        setTimersList(prev => [{time: timeFormat}, ...prev])
    }

    const handleResetTimer = () => {
        setTimersList(prev => [{time: timeFormat}, ...prev])
        setTimeFormat('00:00:00:00')
        setStarted(false)
        setStopped(false)
        setTime(new Date())
        setOffset(0)
    }
    const handleClearHistory = () => {
        setTimersList([]);
    }

    return (
        <div className="timer">
            <h1>{timeFormat}</h1>

            <Button 
            className={`${stopped ? "continueBtn" : "startBtn"} `} 
            onClick={handleStartTimer}>
                {stopped ? 'Continue' : 'Start'}
            </Button>
            <Button className="stopBtn" onClick={handleStopTimer} disabled={!started}>Stop</Button>
            <Button className="resetBtn" onClick={handleResetTimer}>Reset</Button>
            <TimeContainer>
                <TimeList timersList= {timersList} />
            </TimeContainer>
            <Button className="clearBtn" onClick={handleClearHistory}>Clear timer's history</Button>
        </div>
    );
};

export default Timer;