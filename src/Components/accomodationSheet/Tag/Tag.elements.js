/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
 import styled from 'styled-components'

 export const TagElement = styled.div`
   display: flex;
   align-items: center;
   justify-content:center;
   width: 115px;
   height: 25px;
   background-color: #FF6060;
   border-radius: 10px;
   margin-right: 10px;
   
      @media screen and (max-width: 826px) {}
      @media screen and (max-width: 680px) {}
      @media screen and (max-width: 500px) {}
      @media screen and (max-width: 375px) {}
 `
 export const TagElementText = styled.p`
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    font-size: 14px;

      @media screen and (max-width: 826px) {}
      @media screen and (max-width: 680px) {}
      @media screen and (max-width: 500px) {}
      @media screen and (max-width: 375px) {}

    
 `