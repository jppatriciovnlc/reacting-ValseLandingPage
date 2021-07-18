import styled from 'styled-components';
import back from '../../assets/img/backS1.png';
import tango from '../../assets/img/tango.jpg';


export const Section = styled.section`
width: 100%;
height: 100%;
min-height: 800px;
background: #fb4b24;
background-image: url(${back});
background-size: cover;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`

export const Div1 = styled.div`
height: 100%;
margin: 1rem;
width: 400px;
height:600px;
border: solid #000 1px;
background-image: url(${tango});
background-size: cover;
border-radius: 0 8% 0 8%;
border: solid #fff 2px;

`


export const Div2 = styled.div`
background-color: black;
margin: 1rem;
width: 400px;
height:600px;
border-radius: 8% 0 8% 0;
border: solid #fff 2px;

`

export const Div2Header = styled.div`

height: 20%;
display: flex;
justify-content: center;
align-items: center;
padding: 5px 0 5px 0;

`

export const Div2HeaderP = styled.div`
color: white;
word-wrap: break-word;
font-size: 24px;
text-align: center;

`

export const Div2Form = styled.div`
height: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const Div2FormInput = styled.input`
width: 80%;
height: 50px;
background-color: #303030;
color: #fafafa;
margin-bottom: 25px;
padding-left: 10px;
font-size: 16px;
border: none;
border-bottom: 1px solid #fff;

&:hover {

}



`

export const Div2Footer = styled.div`
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding-left: 20px;
padding-right: 20px;

`

export const Div2FooterP = styled.div`
color: #fff;
font-size: 1.2rem;
text-align: center;   

`

export const Div2FooterButton = styled.button`

width: 60%;
height: 60px;
font-size: 1rem;
font-weight: 700;
color: #dd5870;
border: none;
cursor: pointer;

`