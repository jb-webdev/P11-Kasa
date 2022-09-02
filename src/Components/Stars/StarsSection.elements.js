/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import styled, {css} from "styled-components"

import {Star} from '@styled-icons/entypo/Star'

export const StarsWrapper = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: flex-end;
`

export const StyledStar = styled(Star)`
    height:30px;
    with: 30px;
    margin-left: 10px;
    ${(props) => {
        switch (props.color) {
          case "grey":
            return css`
                color: #E3E3E3;
            `;
            case "color":
            return css`
                color: #FF6060;
            `;
          default:
            return css`
                color: '#FF6060';
            `;
        }
      }}

        @media screen and (max-width: 826px) {};
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {};

`
