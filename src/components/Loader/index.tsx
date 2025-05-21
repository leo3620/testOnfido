import React from 'react'

import { Container, Title } from './styles'

function Loader({ message }: { readonly message?: string }) {

    return (
        <Container>

            <Title>{message}</Title>
        </Container>
    )
}

export default Loader
