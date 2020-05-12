import styled from 'styled-components'

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: auto;
    @media (min-width: 500px) {
        justify-content: center;
        max-width: 500px;
    }
`

export default AppContainer
