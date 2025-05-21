import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    text-align: center;
    width: 100%;

    @media (min-width: 840px) {
        justify-content: normal;
    }
`
