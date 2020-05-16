import React from 'react'
import CenterFlex from './layout/CenterFlex'
import styled from 'styled-components'

const buttonColor = '#777777'
const disabledButtonColor = '#dddddd'
const Button = styled.button`
    color: ${props => (props.disabled ? disabledButtonColor : buttonColor)};
    background-color: transparent;
    border: 1px solid ${props => (props.disabled ? disabledButtonColor : buttonColor)};
    border-radius: 50%;
    line-height: 1.4;
    font-family: monospace;
    padding: 5px 10px;
    cursor: pointer;
`

const TimeSetterContainer = styled.div`
    padding: 10px;

    input {
        text-align: center;
        border: 0;
        font-size: 30px;
        max-width: 100px;
        color: #333;
    }

    h2 {
        font-size: 20px;
        font-weight: normal;
        color: #333;
        text-align: center;
        margin: 0;
        margin-bottom: 20px;
    }
`

interface TimeSetterProps {
    disabled: boolean
    name: string
    length: number
    increment: (event: React.MouseEvent<HTMLButtonElement>) => void
    decrement: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function TimeSetter({ disabled, name, length, increment, decrement }: TimeSetterProps) {
    return (
        <TimeSetterContainer>
            <h2>{name}</h2>
            <CenterFlex>
                <Button disabled={disabled} onClick={decrement}>
                    -
                </Button>
                <input type="text" value={length} readOnly />
                <Button disabled={disabled} onClick={increment}>
                    +
                </Button>
            </CenterFlex>
        </TimeSetterContainer>
    )
}

export default TimeSetter
