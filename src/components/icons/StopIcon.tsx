import styled from 'styled-components'

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

export default StopIcon
