import React from 'react'

import { createRoot } from 'react-dom/client'

import App from './App'

function initPartnerTraining() {
    createRoot(document.getElementById('root')!).render(
            <App />
    )
}

initPartnerTraining()
