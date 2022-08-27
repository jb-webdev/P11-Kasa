/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
}
body {
    background: #ffffff;  
}
main {
    display: block;
}
h1 {
    font-size: 2em;
    margin: 0.67em 0;
}
img {
    border-style: none;
}
button,
input,
optgroup,
select,
textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}
button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
}
button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}
button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}
`

export default GlobalStyle
