/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 108px;
  margin-left: 100px;
  margin-bottom: 0;
  margin-right: 100px;
  position: top;

  @media screen and (max-width: 375px) {
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 0;
    margin-right: 20px;
}
`
export const HeaderLink = styled(Link)`
    color: #FF6060;
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin-left: 57px;

    @media screen and (max-width: 375px) {
        font-size: 12px;
        margin-left: 10px;
    }
`
export const Logo = styled.img`
  height: 100px;

  @media screen and (max-width: 375px) {
    height: 40px;
  }
  
`
export const ContainerLink = styled.div`
`