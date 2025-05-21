import styled from 'styled-components'


export const ButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
`

export const Container = styled.header`
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    position: relative;
    text-align: center;

    @media (min-width: 840px) {
        box-shadow: 0 3px 4px -1px rgb(55 63 81 / 15%);
        flex: 0 0 5rem;
        height: 5rem;
        margin-top: 0;
    }
`

export const Logo = styled.img`
    display: block;
    height: 100%;
    left: 50%;
    padding: 1rem;
    position: absolute;
    top: 0;
    transform: translate(-50%, 0);
    width: auto;
`
