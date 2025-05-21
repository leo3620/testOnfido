import styled from 'styled-components'

export const Main = styled.main<{ $pathsWithStepper?: boolean }>`
    align-items: center;
    display: flex;
    flex: 1 0;
    flex-direction: ${(props) => (props.$pathsWithStepper ? 'row' : 'column')};
`

export const MainContainer = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    height: 100%;
    justify-content: space-between;
    padding-top: 2rem;
    text-align: center;
    width: 100%;

    @media (min-width: 840px) {
        justify-content: normal;
    }
`
