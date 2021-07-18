import styled from 'styled-components';

export const Header = styled.section`
    width: 100%;
    height: 8vh;
    background: #141824;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
    align-items: center;    

`
export const HeaderItems = styled.div`  
   color: #fff;
   max-height: 8vh;
   flex-grow: 1;
`

export const HeaderLogo = styled.h1`   
   margin: 0;
   padding: 0;
   text-align: left;
   margin-left: 2rem;
   margin-right: 4rem;
   color: #fff;
   max-height: 6vh;
   font-size: 5vh;
   
  
`

export const HeaderDesc = styled.div`
   margin-right: 4rem;
   font-size: 2.5vh;
   color: #fff;
   max-height: 8vh;
   text-transform: capitalize;
   text-align: center;

   @media (max-width: 800px) {
       display: none;
   }  
`

export const HeaderButton = styled.button`
   margin-right: 4rem;
   color: #fff;
   background: #dd5870;
   height: 4.5vh;
   width: 8rem;
   font-size: 0.8rem;
   font-weight: 600;
   text-transform: uppercase;
   float: right;
   border: none;  
   cursor: pointer;

   @media (max-width: 375px) {
      margin-right: 1rem;
   }  

`
