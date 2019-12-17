import React from 'react';
import styled from "styled-components"

const MainContainer = styled.div `

`


const Header = styled.div `
display:flex;
justify-content: center;
border: solid 1px;

`

const Section = styled.section `
background-color: #e6e6e6;
height: 500px;
padding-top: 50px;

`
const Hr = styled.hr `
padding-top: 50px;
`

const Titulo = styled.div `
width: 100%;
height: 50px;
background-color: rgb(255,92,92);

`



const Footer= styled.div `
display:flex;
background-color: rgb(255,92,92);
height: 50px;

`

const ImgFooter= styled.img `
display:flex;
width: 40px;
height: 40px;
`
const IconeFooter = styled.div `
`






function App() {
  return (
    <MainContainer>
      <Header>   
        <img src={require('./components/img/futurecar.png') }  />
      </Header>
     
      <Section>

      <Hr/>
      
        <Titulo>
          FutureCAR VRUMM !
        </Titulo>

        <button/>       <button/>



      </Section>


      
      <Footer>
    
        <ImgFooter src={require('./components/img/carro-preto.png')}/> <h4>FUTURECAR | Going beyond.</h4>
        <IconeFooter></IconeFooter>

      
      </Footer>


    </MainContainer>

  );
}

export default App;
