/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
 import styled from 'styled-components'
 /**
    background-image: url(../../img-banner-one.png); 
    background-position: center 45%;
    background-size: cover;  
  */
 export const Banner = styled.div`
    background-color: #313131;
    height: 223px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
 
   @media screen and (max-width: 375px) {
     
    }
 `
 export const BannerTitle = styled.h1`
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
 
   @media screen and (max-width: 375px) {
     
    }
 `

