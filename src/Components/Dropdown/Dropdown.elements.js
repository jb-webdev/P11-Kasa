/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 * 
*/
import styled, {css} from 'styled-components'


export const DropdownWrapper = styled.div`
    display: flex;
    align-items: center;
    
    margin-bottom: 33px;
    overflow: hidden;
    
    ${(props) => {
        switch (props.model) {
          case "medium":
            return css`
            margin-top: 0;
            flex-direction: column;
                @media screen and (max-width: 1045px) {};
                @media screen and (max-width: 680px) {};
                @media screen and (max-width: 500px) {};
                @media screen and (max-width: 375px) {};
              
            `;
          default:
            return css`
                justify-content: center;
                flex-direction: column;
                padding-left: 10%;
                padding-right: 10%;
                margin-top: 38px;

                    @media screen and (max-width: 1045px) {};
                    @media screen and (max-width: 680px) {};
                    @media screen and (max-width: 500px) {};
                    @media screen and (max-width: 375px) {
                        padding-left: 0%;
                        padding-right: 0%;
                    };
            `;
        }
      }}

    
`
export const DropdownHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: #FF6060;
    
    border-radius: 5px;
    z-index: 1;

    ${(props) => {
        switch (props.model) {
          case "medium":
            return css`
            width: 582px;
            height: 52px;
                @media screen and (max-width: 1045px) {};
                @media screen and (max-width: 680px) {};
                @media screen and (max-width: 500px) {};
                @media screen and (max-width: 375px) {};
            
            `;
          default:
            return css`
                width: 90%;
                height: 47px;
                    @media screen and (max-width: 850px) {
                        width: 100%;
                    };
                    @media screen and (max-width: 680px) {};
                    @media screen and (max-width: 500px) {};
                    @media screen and (max-width: 375px) {};
            `;
        }
      }}
`
export const DropdownHeaderText = styled.p`
    color: #ffffff;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    ${(props) => {
        switch (props.model) {
          case "medium":
            return css`
            font-size: 18px;
            margin-left: 20px;
            `;
          default:
            return css`
                font-size: 24px;
                margin-left: 19px;
                    @media screen and (max-width: 850px) {
                        width: 100%;
                    };
                    @media screen and (max-width: 680px) {};
                    @media screen and (max-width: 500px) {};
                    @media screen and (max-width: 375px) {};
            `;
        }
      }}
    
`
export const DropdownBody = styled.div`
        display: ${props => props.$mode ?" block": "none"};
        position: relative;
        top: -10px;
        height: auto;
        text-align: justify;
        background: #F7F7F7;
        border-radius: 5px;
        margin-bottom: 10px;
        overflow: hidden;
        z-index: 0;
        ${(props) => {
            switch (props.model) {
              case "medium":
                return css`
                width: 582px;
                max-height: 250px;
                    @media screen and (max-width: 1045px) {};
                    @media screen and (max-width: 680px) {};
                    @media screen and (max-width: 500px) {};
                    @media screen and (max-width: 375px) {};
                `;
              default:
                return css`
                width: 90%;
                max-height: 450px;
                    @media screen and (max-width: 850px) {
                        width: 100%;
                        padding-left: 11.75px;
                        padding-right: 6.91px;
                        padding-bottom: 52.58px
                    };
                    @media screen and (max-width: 680px) {};
                    @media screen and (max-width: 500px) {};
                    @media screen and (max-width: 375px) {};
                        
                `;
            }
          }}
        
        
            
`
export const DropdownBodyText = styled.p`
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

export const ListContainer = styled.div`
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    padding-top: 20px;
    padding-bottom: 18px;
    with: 100%;
        @media screen and (max-width: 850px) {}
        @media screen and (max-width: 680px) {}
        @media screen and (max-width: 500px) {}
        @media screen and (max-width: 375px) {}
`
