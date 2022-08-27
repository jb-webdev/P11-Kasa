/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import {createGlobalStyle} from 'styled-components'

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

`

export default GlobalStyle
