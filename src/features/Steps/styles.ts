import styled from 'styled-components'


export const Wrapper = styled.div`
    border: 1px solid #F5F7FA;
    display: none;
    height: 100%;
    width: 29%;

    @media (min-width: 840px) {
        display: flex;
    }
`

export const Container = styled.div`
    align-self: flex-start;
    display: flex;
    height: 100%;
    margin: 2rem;
    max-height: 50%;
    width: 100%;
`
