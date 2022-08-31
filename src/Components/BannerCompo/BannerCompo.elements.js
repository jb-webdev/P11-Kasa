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

         @media screen and (max-width: 500px) {
          background-position: 90% 45%;
          background-size: 100%;
        }
       `;
     default:
       return css`
         background-image: url(${imgOne}); 
         background-position: center 45%;

         @media screen and (max-width: 500px) {
            background-position: 90% 45%;
            background-size: 180%;
          }
       `;
   }
 }}
   background-size: cover;
   height: 223px;
   border-radius: 25px;
   display: flex;
   justify-content: center;
   align-items: center;
 
   
 `
 export const BannerTitle = styled.h1`
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 2em;
    @media screen and (max-width: 826px) {
      font-size: 1.5em;
    }
    @media screen and (max-width: 680px) {
      font-size: 1.4em;
    }
   @media screen and (max-width: 500px) {
     font-size: 1.1em;
     margin-left: 16px
    }
    @media screen and (max-width: 375px) {
      font-size: 24px;
      
     }
 `

