import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const DivButton1 = styled.div `
  margin-top: 20px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`;

const Button = styled.button `
  align-self:center;
  width: 150px;
  height: 50px;
  background-color: #ff5c5c;
`;

const Inputs = styled.input `
  width: 100%;
  padding: 12px 12px;
  margin: 8px 0;
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
            price: '' ,
            paymentMethod:'' ,
            shipping:'' ,
            cor: '',
            ano: '',
            fornecedor: '',
            foto: ''
        }
    }

    CreateCars =  async () =>{

        
        const cars = {
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                paymentMethod: this.state.paymentMethod,
                shipping: this.state.cor,
                cor: this.state.cor,
                ano: this.state.ano,
                fornecedor: this.state.fornecedor,
                foto: this.state.foto
        };

        try {
            await axios.post(baseUrl, cars);	
            this.setState({
                name: '',
                description: '',
                price: '' ,
                paymentMethod:'' ,
                shipping:'' ,
                cor: '',
                ano: '',
                fornecedor: '',
                foto: ''
            })           
            }catch (error) {
                alert(error.message)
            }
        
        
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

    controleFoto = event =>{
        this.setState({foto: event.target.value})
    }

    controleDescription = event =>{
        this.setState({description: event.target.value})
    }

    controlePrice = event =>{
        this.setState({price: event.target.value})
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
            <h2>Preencha o cadastro de veículo</h2>
                
                <div>
                <p>Modelo: </p><Inputs type="text" placeholder="MODELO DO CARRO"
                value={this.state.name} onChange={this.controleName}
                />
                 <p>Descrição: </p><Inputs type="text" placeholder="DESCRIÇÃO "
                value={this.state.description} onChange={this.controleDescription}
                />
                <p>Preço: </p><Inputs type="number" placeholder="VALOR DO CARRO"
                value={this.state.price} onChange={this.controlePrice}
                />
                <p>Método de Pagamento: </p><Inputs type="text" placeholder="FORMA DE PAGAMENTO"
                value={this.state.paymentMethod} onChange={this.controlePaymentMethod}
                />
                <p>Prazo de Entrega: </p><Inputs type="number" placeholder="TEMPO DE ENTREGA"
                value={this.state.shipping} onChange={this.controleShipping}
                />
                </div>
                <div>
                <p>Cor: </p><Inputs type="text" placeholder="COR"
                value={this.state.cor} onChange={this.controleCor}
                /> 
                <p>Ano: </p><Inputs type="number" placeholder="ANO"
                value={this.state.ano} onChange={this.controleAno}
                /> 
                <p>Marca: </p><Inputs type="text" placeholder="FORNECEDOR DO VEÍCULO"
                value={this.state.fornecedor} onChange={this.controleFornecedor}
                /> 
                <p>Foto: </p><Inputs type="text" placeholder="URL DA IMAGEM DO VEÍCULO"
                value={this.state.foto} onChange={this.controleFoto}
                /> 
                </div>
                <Button onClick={this.CreateCars}>Enviar</Button>
            </DivButton1>
  
         
     
        )
    }
}
export default FormCars;