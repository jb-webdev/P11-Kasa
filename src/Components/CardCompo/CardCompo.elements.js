/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import styled from "styled-components";

export const Card = styled.div`
    height: 340px;
    width: 340px;
    border-radius: 10px;

    background: linear-gradient(180deg, rgb(255, 96, 96) 70%, rgba(0, 0, 0, 0.5) 100%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
        @media screen and (max-width: 1045px) {
            width: 100%;
        }
        @media screen and (max-width: 680px) {}
        @media screen and (max-width: 500px) {}
        @media screen and (max-width: 375px) {
            height: 255px;
            width: 355px;
        }
`
export const CardTitle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;

    /* or 26px */
    display: flex;
    align-items: flex-end;
    color: #ffffff;

    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 20px;

        @media screen and (max-width: 826px) {}
        @media screen and (max-width: 680px) {}
        @media screen and (max-width: 500px) {}
        @media screen and (max-width: 375px) {}

`