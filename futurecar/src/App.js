import React from 'react';
import styled from 'styled-components';
import FormCars from './components/FormCars/FormCars'
import Store from './components/Store/Store' 


const MainContainer = styled.div `
`;

const Header = styled.div `
  display:flex;
  justify-content: center;
  border: solid 1px;
`;

const Section = styled.section `
  background-color: #e6e6e6;
  height: 100%;
  padding-top: 70px;
  margin: 0 auto;
  
`;

const Hr = styled.hr `
  padding-top: 50px;
`;

const Titulo = styled.div `
  text-align: center;
  width: 100%;
  height: 40px;
  background-color: rgb(255,92,92);
`;

const Footer= styled.footer `
  display: flex;
  justify-content: space-between;
  background-color: rgb(255,92,92);
  height: 50px;
  padding: 5px;
`;

const Test= styled.div`
display:flex;
`

const ImgFooter= styled.img `
  display:flex;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

const FooterIcons= styled.div`
display:flex;
`

const IconeFooter = styled.img `
display:flex;
width: 40px;
height: 40px;
margin-right: 5px;
`;

const DivButton = styled.div `
  display: flex;
  align-items: flex-start;
  justify-items: center;
  margin-top: 30px;
`;

const Button = styled.button `
  width: 150px;
  height: 50px;
  background-color: #ff5c5c;
  margin-left: 50px;
`;

const DivTest = styled.div `
  display: flex;
`;



 
  
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null 
    }
  }

  handleStore = () => {
  this.setState({ currentPage: "store" });
  }

  handleForm = () => {
  this.setState({ currentPage: "form" });
  }

  render () {
    return (
      <MainContainer>
        <Header>   
          <img src={require('./components/img/futurecar.png')}  />
        </Header>
      
        <Section>

          <Hr/>
          
            <Titulo>
            <h2>FutureCAR VRUMM !</h2> 
            </Titulo>
            <DivButton>
              <Button onClick={this.handleStore}> Quero Vender</Button>
              <Button onClick={this.handleForm}> Quero Comprar</Button>
              {this.state.currentPage === "store" ? <FormCars /> : <Store />}
            </DivButton>
        </Section>


        
        <Footer>
      
        <Test>
          <ImgFooter src={require('./components/img/carro-preto.png')}/> <h4>FUTURECAR | Going beyond.</h4>
        </Test>
          <FooterIcons>
            <IconeFooter src={require('./components/img/instagram.png')} />
            <IconeFooter  src={require('./components/img/facebook.png')} />
            <IconeFooter src={require('./components/img/email.png')}  />
          </FooterIcons>
        
        </Footer>


    </MainContainer>
    )}

}

export default App;