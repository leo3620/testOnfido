import styled from 'styled-components'


import { BreakpointInnerDesktop } from 'src/config/constants'

export const HeadingTitle = styled("span")`
    margin-bottom: 1rem !important;

    @media (min-width: 840px) {
        margin-bottom: 3rem !important;
    }
`

export const ContentWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    max-width: ${BreakpointInnerDesktop};
    padding: 0 1.5rem;

    form {
        width: 100%;
    }
`

export const FieldWrapper = styled.div`
    margin-bottom: 2rem;
    max-width: 28rem;
    text-align: left;
    width: 100%;

    input {
        text-align: left !important;
    }
`
