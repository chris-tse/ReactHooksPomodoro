import React, { useState } from 'react'
import TimeSetter from './components/TimeSetter'
import AppContainer from './components/AppContainer'
import useInterval from './hooks/useInterval'
import { DateTime } from 'luxon'
import styled from 'styled-components'

function App() {
    const [workLength, setWorkLength] = useState(25)
    const [breakLength, setBreakLength] = useState(10)
    const [timeLeft, setTimeLeft] = useState(() => workLength * 60000)
    const [active, setActive] = useState(false)
    const [goToBreak, setGoToBreak] = useState(true)

    useInterval(tick, active ? 1000 : null)

    function startTimer() {
        setActive(true)
    }

    function stopTimer() {
        if (!active) {
            return
        }

        setActive(false)
        setTimeLeft(workLength * 60000)
        setGoToBreak(true)
    }

    function tick() {
        if (timeLeft === 0) {
            if (goToBreak) {
                setTimeLeft(breakLength * 60000)
                setGoToBreak(false)
            } else {
                setTimeLeft(workLength * 60000)
                setGoToBreak(true)
            }
        } else {
            setTimeLeft(timeLeft - 1000)
        }
    }

    function incrementWorkLength() {
        const newWorkLength = workLength + 1
        setWorkLength(newWorkLength)
        setTimeLeft(newWorkLength * 60000)
    }

    function decrementWorkLength() {
        if (workLength === 0) {
            return
        }
        const newWorkLength = workLength - 1
        setWorkLength(newWorkLength)
        setTimeLeft(newWorkLength * 60000)
    }

    function incrementBreakLength() {
        setBreakLength(breakLength + 1)
    }

    function decrementBreakLength() {
        if (breakLength === 0) {
            return
        }
        setBreakLength(breakLength - 1)
    }

    return (
        <AppContainer className="App">
            <ScreenHidden>
                <h1>Pomodoro</h1>
            </ScreenHidden>
            <InnerContainer>
                <Timer>
                    <Time>{DateTime.fromMillis(timeLeft).toFormat('mm:ss')}</Time>
                    <ControlButtonContainer>
                        <ControlButton disabled={active} onClick={startTimer}>
                            <PlayIcon />
                        </ControlButton>
                        <div style={{ margin: 5 }} />
                        <ControlButton onClick={stopTimer}>
                            <StopIcon />
                        </ControlButton>
                    </ControlButtonContainer>
                </Timer>
                <TimeSetter
                    disabled={active}
                    name={'Work Time'}
                    increment={incrementWorkLength}
                    decrement={decrementWorkLength}
                    length={workLength}
                />
                <hr style={{ borderColor: '#dddddd' }} />
                <TimeSetter
                    disabled={active}
                    name={'Break Time'}
                    increment={incrementBreakLength}
                    decrement={decrementBreakLength}
                    length={breakLength}
                />
            </InnerContainer>
        </AppContainer>
    )
}

export default App

const InnerContainer = styled.div`
    @media (min-width: 500px) {
        border: 1px #dddddd solid;
        border-radius: 10px;
        overflow: hidden;
    }
`

const Timer = styled.div`
    display: grid;
    place-items: center;
    gap: 20px;
    padding: 30px;
    color: white;
    background-color: #206eef;
`

const Time = styled.div`
    font-size: 50px;
`

const ScreenHidden = styled.div`
    position: absolute;
    transform: translateX(-10000);
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
`

const PlayIcon = styled.i`
    & {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs, 2));
        width: 22px;
        height: 22px;
    }
    &::before {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 0;
        height: 10px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 6px solid;
        top: 6px;
        left: 9px;
    }
`

const StopIcon = styled.i`
    & {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs, 2));
        width: 10px;
        height: 10px;
        background: currentColor;
    }
`

const ControlButtonContainer = styled.div`
    display: flex;
`

const ControlButton = styled.button`
    background: transparent;
    border: 0;
    color: white;
    font-size: 20px;
`
