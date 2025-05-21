import React, { useMemo } from 'react'


import {  Container, Logo } from './styles'


function Header() {

    const logoToDisplay = useMemo(
        () =>
          <Logo alt={'LOGO'} src="/logo_nickel.png" />,
        []
    )

    return (
        <Container>
            {logoToDisplay}
        </Container>
    )
}

export default Header
