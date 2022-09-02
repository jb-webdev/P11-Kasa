/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import styled from "styled-components";

const GallerySection = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-column-gap: 60px;
        -moz-column-gap: 60px;
            column-gap: 60px;
    row-gap: 50px;
    padding-top: 56px;
    padding-bottom: 56px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 25px;
    border-top: 43px;
    margin: 0;
    margin-top: 43px;
    margin-bottom: 43px;
    background-color: #F6F6F6;

        @media screen and (max-width: 1045px) {
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
        }
        
        @media screen and (max-width: 500px) {
            padding-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            background-color: #ffffff;
        }
`
export default GallerySection