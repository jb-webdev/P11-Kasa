/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */

import styled, {css} from "styled-components";

export const ContainerSlider = styled.div`
    height: 415px;
    
        @media screen and (max-width: 826px) {};
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {
            with: 355px;
            height: 260px;
            overflow: hidden;
        };
`
export const ImageContainer = styled.img`
    max-height: 100%;
    min-width: 100%;
    display: block;
    border-radius: 25px;
    object-fit : cover;
    position: relative;
    top: -415px;
    z-index: -1;

        @media screen and (max-width: 826px) {};
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {
            height: 90%;
            width: 250px;
            top: -250px;
        };
    
`
export const ContainerButton = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color :  transparent;
    z-index: 1;
        @media screen and (max-width: 826px) {};
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {};

`
export const SliderButton = styled.div`
    width: 100%;
    margin-top: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
        @media screen and (max-width: 826px) {};
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {};

`
export const NavButton = styled.button`
    
    outline: none;
    background:none;
    cursor: pointer;
    padding: 0;
    border: none;
    padding:0;
    margin: 24px;
    font-size: 100px;
    color: #ffffff;
    ${(props) => props.right === true ? css `right : 2% `: css`left: 2% `}

    @media screen and (max-width: 826px) {};
    @media screen and (max-width: 680px) {};
    @media screen and (max-width: 500px) {};
    @media screen and (max-width: 375px) {
        font-size: 30px
    };


`
export const CountImage = styled.p `
    font-size: 18px;
    color: white;
    whith: 100%;
    margin-bottom: 25px;
        @media screen and (max-width: 826px) {};
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {
            display: none
        };
    
`