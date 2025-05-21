import { createGlobalStyle } from 'styled-components'
import '@csstools/normalize.css'

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        margin: 0;
    }

    html {
        @media (min-width: 840px) {
            font-size: 16px;
        }
    }

    body {
        width: 100%;
    }

    #root {
        display: flex;
        flex-flow: column nowrap;
    }
`
export default {
    Global
}
