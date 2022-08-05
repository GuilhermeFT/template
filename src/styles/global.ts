import { createGlobalStyle, css } from 'styled-components'

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
`

export default createGlobalStyle`${globalStyle}`
