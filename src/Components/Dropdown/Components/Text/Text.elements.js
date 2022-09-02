/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import styled, {css} from 'styled-components'

export const CompoText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1,243vw;
    line-height: 142.6%;
    margin-left: 18px;
    margin-right: 18px;
    margin-bottom: 18px;
    padding-top: 20px;
    color: #FF6060;
        ${(props) => {
            switch (props.model) {
            case "medium":
                return css`
                    font-size: 18px;
                        @media screen and (max-width: 1045px) {};
                        @media screen and (max-width: 680px) {};
                        @media screen and (max-width: 500px) {};
                        @media screen and (max-width: 375px) {};
                
                `;
            default:
                return css`
                    @media screen and (max-width: 850px) {
                        font-size: 1em;
                    }
                    @media screen and (max-width: 680px) {
                        width: 100%;
                        font-size: 0.9em;
                        margin:0;
                    }
                    @media screen and (max-width: 500px) {}
                    @media screen and (max-width: 375px) {
                        font-size: 12px;
                    }
                        
                `;
            }
        }}
    
    
`