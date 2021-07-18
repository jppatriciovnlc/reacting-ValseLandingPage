import * as SH from './styledHeader';
import * as S1 from './styledSection1';
import * as S2 from './styledSection2';
import * as SF from './styledFooter';
import { useState } from 'react';

export default function Home(){

    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');

    function handleRegister(){
        if((nome == "" || email =="")){
            alert('Os campos Nome e Email são obrigatórios')
        }
        else{
            localStorage.setItem('email', JSON.stringify(email))
            localStorage.setItem('nome', JSON.stringify(nome))
            alert('ATENÇÃO! Esta é uma página criada exclusivamente para portfólio. Até onde sei, a empresa "Valse!" não existe. Dúvidas, críticas, sugestões... encontre-me no GitHub (link no rodapé)')
        }
        
        
    }

    function handleMatricula(){
        alert('ATENÇÃO! Esta é uma página criada exclusivamente para portfólio. Até onde sei, a empresa "Valse!" não existe. Dúvidas, críticas, sugestões... encontre-me no GitHub (link no rodapé)')
    }

    
    return(
        <>        
            <SH.Header>   
                <SH.HeaderItems>
                    <SH.HeaderLogo>Valse!</SH.HeaderLogo>    
                </SH.HeaderItems>
                <SH.HeaderItems>
                    <SH.HeaderDesc>Venha aprender a dançar conosco!</SH.HeaderDesc>
                </SH.HeaderItems>
                <SH.HeaderItems>
                    <SH.HeaderButton onClick={handleMatricula}>Matricule-se</SH.HeaderButton>
                </SH.HeaderItems>            
            </SH.Header>
            
            <S1.Section>
                <S1.Div1></S1.Div1>
                <S1.Div2>
                    <S1.Div2Header>
                        <S1.Div2HeaderP>
                        Cadastre-se agora para ganhar a primeira aula GRÁTIS!
                        </S1.Div2HeaderP>
                    </S1.Div2Header>
                    <S1.Div2Form>
                        <S1.Div2FormInput placeholder="Nome" onChange={e => setNome(e.target.value)}/>
                        <S1.Div2FormInput placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                    </S1.Div2Form>
                    <S1.Div2Footer>
                        <S1.Div2FooterP>
                            Informe seu nome e e-mail.
                        </S1.Div2FooterP>
                        <S1.Div2FooterP>
                            Nós entraremos em contato para agendar sua aula GRÁTIS.
                        </S1.Div2FooterP>
                        <S1.Div2FooterButton onClick={handleRegister}>
                            Quero Minha Aula GRÁTIS
                        </S1.Div2FooterButton>
                    </S1.Div2Footer>
                </S1.Div2>
            </S1.Section>
            <S2.Section>
                <S2.Card>
                    <S2.CardImage></S2.CardImage>
                    <S2.CardText>Do hiphop ao ballet clássico</S2.CardText>
                </S2.Card>
                <S2.Card>
                    <S2.CardImage2></S2.CardImage2>
                    <S2.CardText>Liberte seu corpo! A dança é um ótimo exercício!</S2.CardText>
                </S2.Card>
                <S2.Card>
                    <S2.CardImage3></S2.CardImage3>
                    <S2.CardText>Nunca é cedo demais para começar...</S2.CardText>
                </S2.Card>
                <S2.Card>
                    <S2.CardImage4></S2.CardImage4>
                    <S2.CardText>... nem tarde demais</S2.CardText>
                </S2.Card>
            </S2.Section>
            <SF.Footer>
                <SF.Warnning>ATENÇÃO! Esta é uma página criada exclusivamente para portfólio. Até onde sei, a empresa "Valse!" não existe. Dúvidas, críticas, sugestões... encontre-me no GitHub </SF.Warnning>
                <SF.Github href="https://github.com/jppatriciovnlc/reacting-valseLandingPage.git">GitHub Valse!</SF.Github>
            </SF.Footer>
        </>
    )     

}