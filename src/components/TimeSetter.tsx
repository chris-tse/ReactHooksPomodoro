import React from 'react'
import styled from 'styled-components'

export const CenterFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const TimeSetterHeading = styled.h2`
    font-size: 20px;
    font-weight: normal;
    color: #333;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
`

const TimeSetterInput = styled.input`
    text-align: center;
    border: 0;
    font-size: 30px;
    max-width: 100px;
    color: #333;
`
const buttonColor = '#777777'
const disabledButtonColor = '#dddddd'
const StyledButton = styled.button`
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
            <TimeSetterHeading>{name}</TimeSetterHeading>
            <CenterFlex>
                <StyledButton disabled={disabled} onClick={decrement}>
                    -
                </StyledButton>
                <TimeSetterInput type="text" value={length} readOnly />
                <StyledButton disabled={disabled} onClick={increment}>
                    +
                </StyledButton>
            </CenterFlex>
        </TimeSetterContainer>
    )
}

export default TimeSetter
