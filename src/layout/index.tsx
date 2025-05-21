import React from 'react'

import Header from './header'
import { Main, MainContainer } from './styles'

import MainRouter from 'src/navigation/Router'
import Steps from "../features/Steps";

function Layout() {

    return (
        <>
            <Header />
            <Main $pathsWithStepper>
                <Steps/>
                <MainContainer>
                    <MainRouter />
                </MainContainer>
            </Main>
        </>
    )
}

export default Layout
