import styled from 'styled-components'


export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    max-width: 1240px;
    text-align: center;
    width: 100%;
`

export const ContentWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 5rem - 2rem);
    width: 100%;

    #onfido-document {
        height: calc(100vh - 5rem - 2rem);
        position: relative;
        width: 100%;

        @media (min-width: 840px) {
            position: static;
            width: 100%;
        }
    }
`

