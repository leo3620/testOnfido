import { LegacyStepDefinition } from 'onfido-sdk-ui/types/shared/Types'

export const getSteps = (): Array<LegacyStepDefinition> => {
    return [
        {
            type: 'document',
            options: {
                documentTypes: {
                    driving_licence: false,
                    national_identity_card: true,
                    residence_permit: true,
                    passport: true
                }
            }
        }
    ]
}