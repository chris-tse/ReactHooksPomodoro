import styled from 'styled-components'

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

export default PlayIcon
