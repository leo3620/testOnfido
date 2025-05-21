import { DocumentModuleOutput } from 'onfido-sdk-ui/types/contract/module/DocumentModule'

export type LivenessState = {
    face: DocumentModuleOutput
    consent: 'granted' | 'denied'
}

export enum DocumentSideOnfido {
    FRONT = 'document_front',
    BACK = 'document_back'
}

export type DocumentState = {
    [DocumentSideOnfido.FRONT]?: DocumentModuleOutput
    [DocumentSideOnfido.BACK]?: DocumentModuleOutput
}
