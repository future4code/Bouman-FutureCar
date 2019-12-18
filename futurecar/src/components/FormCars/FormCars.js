import React from 'react';
import styled from 'styled-components';

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
            <div>
                <h2>Preencha o casdastro de veículo</h2>
                <span>Modelo: </span><input type="text" placeholder="MODELO"
                value={this.state.modelo} onChange={this.controleModelo}
                /> <br />
                <span>Cor: </span><input type="text" placeholder="COR"
                value={this.state.cor} onChange={this.controleCor}
                /> <br />
                <span>Ano: </span><input type="number" placeholder="ANO"
                value={this.state.ano} onChange={this.controleAno}
                /> <br />
                <span>Marca: </span><input type="text" placeholder="FORNECEDOR DO VEÍCULO"
                value={this.state.fornecedor} onChange={this.controleFornecedor}
                /> <br />
                <span>Preço: </span> <input type="number" placeholder="VALOR DO VEÍCULO"
                value={this.state.preco} onChange={this.controlePreco}
                /> <br />
                <span>KM: </span><input type="number" placeholder="QUILOMETRANGEM"
                value={this.state.km} onChange={this.controleKm}
                /> <br />
                <span>Foto: </span><input type="text" placeholder="URL DA IMAGEM DO VEÍCULO"
                value={this.state.foto} onChange={this.controleFoto}
                /> <br />
                <button>Enviar</button>
            </div>
        )
    }
}
export default FormCars;