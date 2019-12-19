import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const DivButton1 = styled.div `
  margin-top: 150px;
  display: flex;
  flex-direction: column;

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

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/futureCar/cars"

class FormCars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            prince: '' ,
            paymentMethod:'' ,
            shipping:'' ,
            cor: '',
            ano: '',
            fornecedor: '',
            km: '',
            foto: ''
        }
    }

    CreateCars =  async () =>{

        console.log(data)
        const data = {
                name: this.state.name,
                description: this.state.description,
                prince: this.state.prince,
                paymentMethod: this.state.paymentMethod,
                shipping: this.state.cor,
                cor: this.state.cor,
                ano: this.state.ano,
                fornecedor: this.state.fornecedor,
                foto: this.state.foto,

        };

        const response = axios.post(baseUrl, data)
    
        this.setState({cars: response.data})
        
        
    }

    controleName = event =>{
        this.setState({name: event.target.value})
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

    controleKm = event =>{
        this.setState({km: event.target.value})
    }

    controleFoto = event =>{
        this.setState({foto: event.target.value})
    }

    controleDescription = event =>{
        this.setState({description: event.target.value})
    }

    controlePrince = event =>{
        this.setState({prince: event.target.value})
    }

    controlePaymentMethod = event =>{
        this.setState({paymentMethod: event.target.value})
    }

    controleShipping = event =>{
        this.setState({shipping: event.target.value})
    }

    render(){
    
        return(
        
            <DivButton1>
            <h2>Preencha o casdastro de veículo</h2>
                <p>Modelo: </p><Inputs type="text" placeholder="MODELO"
                value={this.state.name} onChange={this.controleName}
                />
                 <p>Descrição: </p><Inputs type="text" placeholder="MODELO"
                value={this.state.description} onChange={this.controleDescription}
                />
                <p>Preço: </p><Inputs type="number" placeholder="MODELO"
                value={this.state.prince} onChange={this.controlePrince}
                />
                <p>Método de Pagamento: </p><Inputs type="text" placeholder="MODELO"
                value={this.state.paymentMethod} onChange={this.controlePaymentMethod}
                />
                <p>Prazo de Entrega: </p><Inputs type="text" placeholder="MODELO"
                value={this.state.shipping} onChange={this.controleShipping}
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
                <p>KM: </p><Inputs type="number" placeholder="QUILOMETRANGEM"
                value={this.state.km} onChange={this.controleKm}
                /> 
                <p>Foto: </p><Inputs type="text" placeholder="URL DA IMAGEM DO VEÍCULO"
                value={this.state.foto} onChange={this.controleFoto}
                /> 
                <button onClick={this.CreateCars}>Enviar</button>
            </DivButton1>
  
         
     
        )
    }
}
export default FormCars;