/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerError = styled.main`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin: 0;
    padding: 0;
`
export const TextError = styled.p`
    color: #FF6060;
    font-style: normal;
    font-weight: 700;
    font-size: 288px;
    margin: 0;
    margin-bottom: 66px;

    @media screen and (max-width: 375px) {
        font-size: 28.235vw;
        margin-bottom: 11px;
        margin-top: 100px;
    }
`
export const TitleError = styled.h1`
    color: #FF6060;
    font-style: normal;
    font-weight: 500;
    font-size: 31,236;

    @media screen and (max-width: 375px) {
        text-align: center;
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 133px;
        width: 260px;
        height: 52px;
    }
`
export const LinkError = styled(Link)`
    color: #FF6060;
    -webkit-text-decoration-line: underline;
            text-decoration-line: underline;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-top: 182px;
    margin-bottom: 159px;

    @media screen and (max-width: 375px) {
        font-size: 14px;
        margin-top: 0px;
        margin-bottom: 235px;
    }
`