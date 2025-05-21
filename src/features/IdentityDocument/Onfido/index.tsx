import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useNavigate } from 'react-router'

import Loader from 'src/components/Loader'
import { initOnfido } from 'src/components/OnfidoSdk'
import { ContentWrapper } from 'src/components/OnfidoSdk/styles'
import { DocumentState } from 'src/components/OnfidoSdk/types'

function IdentityDocumentOnfido() {
    const navigate = useNavigate()

    const [isOcrLoading, setIsOcrLoading] = useState<boolean>(false)
    const [isRestartOnfido, setIsRestartOnfido] = useState<boolean>(false)
    const onFidoToken =
        'eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE5MTkzMjUwMzMsInBheWxvYWQiOnsiYXBwIjoiZWEyMTk3MzctMmNkOC00ZTc3LTlhYjgtYzlmNGY3OGMxYTFkIiwiY2xpZW50X3V1aWQiOiJiYjlhMTZiMi0zZTc3LTQ3YTAtOWI0NS00YTQxOGEyNDAwZTMiLCJpc19zYW5kYm94IjpmYWxzZSwiaXNfc2VsZl9zZXJ2aWNlX3RyaWFsIjpmYWxzZSwiaXNfdHJpYWwiOmZhbHNlLCJyZWYiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvIiwic2FyZGluZV9zZXNzaW9uIjoiYjk1Y2U5MGYtYmUwMS00NWJlLWEyMzEtMzFjYTFhZDY3NTVmIn0sInV1aWQiOiJwbGF0Zm9ybV9zdGF0aWNfYXBpX3Rva2VuX3V1aWQiLCJ1cmxzIjp7ImRldGVjdF9kb2N1bWVudF91cmwiOiJodHRwczovL3Nkay5vbmZpZG8uY29tIiwic3luY191cmwiOiJodHRwczovL3N5bmMub25maWRvLmNvbSIsImhvc3RlZF9zZGtfdXJsIjoiaHR0cHM6Ly9pZC5vbmZpZG8uY29tIiwiYXV0aF91cmwiOiJodHRwczovL2FwaS5vbmZpZG8uY29tIiwib25maWRvX2FwaV91cmwiOiJodHRwczovL2FwaS5vbmZpZG8uY29tIiwidGVsZXBob255X3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20ifX0.'

    const isOnFidoUp = useMemo(() => !!onFidoToken, [onFidoToken])

    const onfidoRef = useRef<HTMLDivElement>(null)
    const manageError = useCallback(() => {
        setIsRestartOnfido(true)
        setIsOcrLoading(false)
    }, [])

    const _onComplete = useCallback(
        (data: DocumentState) => {
            setIsOcrLoading(true)
            if (data && data.document_front) {
                console.log('send doc', data)
            } else {
                manageError()
            }
        },
        [navigate, manageError]
    )

    useEffect(() => {
        if (isOnFidoUp || isRestartOnfido) {
            const { onfidoInstance } = initOnfido({
                containerId: 'onfido-document',
                onComplete: _onComplete,
                token: onFidoToken
            })
            setIsRestartOnfido(false)

            return () => {
                onfidoInstance.tearDown()
            }
        }
    }, [isOnFidoUp, onFidoToken, _onComplete, isRestartOnfido])

    return (
        <ContentWrapper>
            {isOnFidoUp && <div ref={onfidoRef} id="onfido-document" />}
            {isOcrLoading && <Loader message={isOcrLoading ? 'loading' : undefined} />}
        </ContentWrapper>
    )
}

export default IdentityDocumentOnfido
