import { Onfido, SdkParameters } from 'onfido-sdk-ui'

import { DocumentSideOnfido, DocumentState, LivenessState } from './types'

import { getSteps } from 'src/components/OnfidoSdk/domain'

export const initOnfido = ({
    containerId = 'onfido-mount',
    onComplete,
    token
}: {
    containerId?: string
    onComplete: (arg: {
        face?: LivenessState['face']
        [DocumentSideOnfido.FRONT]?: DocumentState[DocumentSideOnfido.FRONT]
        [DocumentSideOnfido.BACK]?: DocumentState[DocumentSideOnfido.BACK]
    }) => void
    token?: string
}) => {

    const onfidoInstance = Onfido.init({
        token: token!,
        containerId,
        steps: getSteps(),
        onComplete,
    } as SdkParameters)

    return {
        onfidoInstance
    }
}
