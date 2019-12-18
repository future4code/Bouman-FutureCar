import React from 'react';
import styled from 'styled-components';
import FormCars from './components/FormCars/FormCars'


const MainContainer = styled.div `

`;


const Header = styled.div `
  display:flex;
  justify-content: center;
  border: solid 1px;
`;

const Section = styled.section `
  background-color: #e6e6e6;
  height: 500px;
  padding-top: 70px;
  margin: 0 auto;
  
`;

const Hr = styled.hr `
  padding-top: 50px;
`;

const Titulo = styled.div `
  width: 100%;
  height: 50px;
  background-color: rgb(255,92,92);
`;

const Footer= styled.footer `
  display: flex;
  background-color: rgb(255,92,92);
  height: 50px;
  bottom: 0px;
  position: relative;
  padding: 5px;
`;

const ImgFooter= styled.img `
  display:flex;
  width: 40px;
  height: 40px;
`;

const IconeFooter = styled.div `
`;

const DivButton = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  padding: 10px;
`;

const Button = styled.button `
  width: 150px;
  height: 50px;
  background-color: #ff5c5c;
  margin-left: 50px;
`;



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
          <DivButton>
            <Button> Quero Comprar</Button>
            <Button> Quero Vender</Button>
          </DivButton>

       
      </Section>


      
      <Footer>
    
        <ImgFooter src={require('./components/img/carro-preto.png')}/> <h4>FUTURECAR | Going beyond.</h4>
        <IconeFooter></IconeFooter>

      
      </Footer>


    </MainContainer>

  );
}

export default App;