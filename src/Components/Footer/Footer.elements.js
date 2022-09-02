/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    text-align: center;
    -ms-flex-item-align: end;
        align-self: flex-end;
    width: 100%;
    height: 209;
    margin-bottom: 0;
    padding-bottom: 29px;
    bottom:0;
    background-color: #000000;
    overflow: hidden;
`
export const WrapperLogo = styled.div`
    text-align: center;
    margin-top: 66px;
`
export const Logo = styled.img`
    margin: 0;
    height: 39.44px;
`
export const Copyright = styled.p`
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin-top: 28.56px;
    text-align: center;
        @media screen and (max-width: 375px){
            font-size: 12px;
        }
`