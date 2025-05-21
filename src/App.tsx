import React, { Suspense } from 'react'

import { BrowserRouter } from 'react-router'

import Layout from './layout'

declare global {
    interface Window {
        PUBLIC_URL: string
        REACT_APP_PLATFORM: string
    }
}

function App() {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </Suspense>
    )
}

export default App
