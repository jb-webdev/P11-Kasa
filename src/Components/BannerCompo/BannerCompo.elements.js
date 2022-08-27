/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import styled,{css} from 'styled-components'
import imgOne from '../../img/img-banner-one.png'
import imgTwo from '../../img/img-banner-two.png'

 export const Banner = styled.div` 
 ${(props) => {
   switch (props.$page) {
     case "about":
       return css`
         background-image: url(${imgTwo});
         background-position: center 40%;
       `;
     default:
       return css`
         background-image: url(${imgOne}); 
         background-position: center 45%;
       `;
   }
 }}
   background-size: cover;
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

