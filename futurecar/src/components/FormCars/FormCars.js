import React from 'react';
import styled from 'styled-components';


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
  margin-top: 150px;
`;

const Button = styled.button `
  width: 150px;
  height: 50px;
  background-color: #ff5c5c;
  margin-left: 50px;
`;

const Inputs = styled.input `
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

class FormCars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modelo: '',
            cor: '',
            ano: '',
            fornecedor: '',
            preco: '',
            km: '',
            foto: ''
        }
    }

    controleModelo = event =>{
        this.setState({modelo: event.target.value})
    }

    controleCor = event =>{
        this.setState({cor: event.target.value})
    }

    controleAno = event =>{
        this.setState({ano: event.target.value})
    }

    controleFornecedor = event =>{
        this.setState({fornecedor: event.target.value})
    }

    controlePreco = event =>{
        this.setState({preco: event.target.value})
    }

    controleKm = event =>{
        this.setState({km: event.target.value})
    }

    controleFoto = event =>{
        this.setState({foto: event.target.value})
    }

    render(){
    
        return(
        <MainContainer>
        <Header>   
          <img src={require('../img/futurecar.png') }  />
        </Header>
       
        <Section>
  
          <Hr/>
          
            <Titulo>
              FutureCAR VRUMM !
            </Titulo>
            <DivButton>
            <h2>Preencha o casdastro de veículo</h2>
                <p>Modelo: </p><Inputs type="text" placeholder="MODELO"
                value={this.state.modelo} onChange={this.controleModelo}
                />
                <p>Cor: </p><Inputs type="text" placeholder="COR"
                value={this.state.cor} onChange={this.controleCor}
                /> 
                <p>Ano: </p><Inputs type="number" placeholder="ANO"
                value={this.state.ano} onChange={this.controleAno}
                /> 
                <p>Marca: </p><Inputs type="text" placeholder="FORNECEDOR DO VEÍCULO"
                value={this.state.fornecedor} onChange={this.controleFornecedor}
                /> 
                <p>Preço: </p> <Inputs type="number" placeholder="VALOR DO VEÍCULO"
                value={this.state.preco} onChange={this.controlePreco}
                />
                <p>KM: </p><Inputs type="number" placeholder="QUILOMETRANGEM"
                value={this.state.km} onChange={this.controleKm}
                /> 
                <p>Foto: </p><Inputs type="text" placeholder="URL DA IMAGEM DO VEÍCULO"
                value={this.state.foto} onChange={this.controleFoto}
                /> 
                <button>Enviar</button>
            </DivButton>
  
         
       </Section>
  
  
        
          <Footer>
      
            <ImgFooter src={require('../img/carro-preto.png')}/> <h4>FUTURECAR | Going beyond.</h4>
            <IconeFooter></IconeFooter>
  
        
      </Footer>
  
  
    </MainContainer>
        )
    }
}
export default FormCars;