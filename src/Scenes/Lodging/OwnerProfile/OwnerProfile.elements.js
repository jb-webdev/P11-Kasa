/**
 * Author : Jean-Jacques Boero
 * Projet : App Kasa / P10 OC
 * Date : Aout 2022
 */
import styled from 'styled-components'

export const WrapperProfile = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
     height: 64px;
        @media screen and (max-width: 826px) {}
        @media screen and (max-width: 680px) {}
        @media screen and (max-width: 500px) {}
        @media screen and (max-width: 375px) {}
`
export const OwnerName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
`
export const ProfileFirstName = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;

    text-align: right;
    color: #FF6060;
        @media screen and (max-width: 826px) {};
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {};
`
export const ProfileName = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    text-align: right;
    color: #FF6060;
        @media screen and (max-width: 826px) {};
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {};
`
export const ProfileImage = styled.img.attrs(props => ({
    alt: props.alt,
    src: props.src,
  }))`
    border-radius: 50%;
    width: 64px;
    height: 64px;

        @media screen and (max-width: 826px) {};
        @media screen and (max-width: 680px) {};
        @media screen and (max-width: 500px) {};
        @media screen and (max-width: 375px) {};
`