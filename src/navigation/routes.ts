import React from 'react'

import { PATHS } from 'src/config/constants'
import IdentityDocument from 'src/screens/IdentityDocument'

interface RoutesProps {
    name: string
    path: string
    component: React.FC
    hasStepper: boolean
    previousStep?: string
}

const routes: RoutesProps[] = [
    {
        name: 'identity-document',
        path: PATHS.CHOOSE_LANGUAGE,
        component: IdentityDocument,
        hasStepper: true
    }
]

export default routes
