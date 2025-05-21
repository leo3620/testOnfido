import React from 'react'

import { Container } from './styles'

import IdentityDocumentOnfido from 'src/features/IdentityDocument/Onfido'

function IdentityDocument() {
    return (
        <Container data-testid="identityDocumentScreen">
            <IdentityDocumentOnfido />
        </Container>
    )
}

export default IdentityDocument
