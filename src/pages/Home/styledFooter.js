import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    height: 8vh;
    background: #141824;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
    align-items: center;    
    justify-content: space-around;
    color: #fff;

`

export const Warnning = styled.div`
    font-size: small;

    @media (max-width: 768px) {
        display: none;
    }  

`

export const Github = styled.a`
   cursor: pointer;
   text-decoration: none;
   font-size: 1.5rem;
   color: #fff;

`