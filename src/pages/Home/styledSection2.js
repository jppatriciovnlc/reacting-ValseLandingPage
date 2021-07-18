import styled from 'styled-components';
import back from '../../assets/img/dancers.png';
import dance1 from '../../assets/img/dance1.jpg';
import dance2 from '../../assets/img/dance2.jpg';
import dance3 from '../../assets/img/dance3.jpg';
import dance4 from '../../assets/img/dance4.jpg';



export const Section = styled.section`
    width: 100%;
    height: 100%;
    min-height: 800px;
    background: #141824;
    background-image: url(${back});
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
`

export const Card = styled.div`
    width: 350px;
    height: 450px;
    background: #fff;
    border-radius: 4px;
    margin-right: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid #fff 2px;
    
`

export const CardImage = styled.div`
    width: 100%;
    height: 80%;
    background: #fff;
    background-image: url(${dance1}) ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export const CardImage2 = styled(CardImage)`    
    background-image: url(${dance2}) ;
    
`

export const CardImage3 = styled(CardImage)`   
    background-image: url(${dance3}) ;    
`

export const CardImage4 = styled(CardImage)`   
    background-image: url(${dance4}) ;    
`

export const CardText = styled.div`
    width: 70%;
    margin-top: 5%;
    background: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
`