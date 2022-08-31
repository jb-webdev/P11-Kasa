import styled from 'styled-components'

export const DropdownWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 38px;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 33px;
    overflow: hidden;

    @media screen and (max-width: 1045px) {}
    @media screen and (max-width: 680px) {}
    @media screen and (max-width: 500px) {}
    @media screen and (max-width: 375px) {
        padding-left: 0%;
        padding-right: 0%;
      }
`
export const DropdownHeader = styled.div`
    width: ${props => props.$model ? props.$model : '90%'};
    height: 47px;
    border-radius: 5px;
    background-color: #FF6060;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
        @media screen and (max-width: 850px) {
            width: 100%;
        };
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {};
`
export const DropdownHeaderText = styled.p`
    color: #ffffff;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 19px;
    @media screen and (max-width: 1045px) {};
    @media screen and (max-width: 680px) {};
    @media screen and (max-width: 500px) {};
    @media screen and (max-width: 375px) {};
    
`
export const DropdownBody = styled.div`
        display: ${props => props.$mode ?" block": "none"};
        width: ${props => props.$model ? props.$model : '90%'};
        height: auto;
        max-height: 450px;
        border-radius: 5px;
        position: relative;
        top: -10px;
        text-align: justify;
        background: #F7F7F7;
        border-radius: 5px;
        z-index: 0;
        overflow: hidden;
        margin-bottom: 10px;
        
            @media screen and (max-width: 850px) {
                width: 100%;
                padding-left: 11.75px;
                padding-right: 6.91px;
                padding-bottom: 52.58px
            };
            @media screen and (max-width: 680px) {};
            @media screen and (max-width: 500px) {};
            @media screen and (max-width: 375px) {};
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
`

