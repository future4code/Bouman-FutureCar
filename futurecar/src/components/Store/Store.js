import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
const baseURL = "https://us-central1-future-apis.cloudfunctions.net/futureCar"

const CarrosGrid = styled.div `
    max-width: 650px;
`

const DivCarrosStyle = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto 0;

`
const InputDivCarros = styled.div`
display:block;
margin-bottom: 20px;
`

const CardCar = styled.div `
    display: block;
    margin: 10px;
    width: 290px;
    border: 1px dotted black;
`;

const ImagemCar = styled.img `
    width: 100%;
`;

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todosCarros: [],
            menor: '',
            maior: Infinity
            }
        }
    
    pegarCarros = async () => {
        const response = await axios.get(`${baseURL}/cars`)
        this.setState({todosCarros: response.data.cars})
        console.log(response.data.cars)
    }
    componentDidMount(){
        this.pegarCarros();
    }

    // controleMenor = event => {
    //     this.setState({menor: event.target.value})
    // }

    // controleMaior = event => {
    //     this.setState({maior: event.target.value})
    // }

    
       

    render() {

        let filtroCarro = this.state.todosCarros.filter((carro)=>{
            return Number(carro.price) < (this.state.maior || Infinity)
        }).filter ((carro) => {
            return Number(carro.price) > (this.state.menor || 0)
        })
        
        return(
            <div>
                <hr/>
                <h3>Estoque</h3>
    <InputDivCarros>
            <input type="number" placeholder="MENOR VALOR" value={this.state.menor} onChange={(event) => {
                        this.setState({
                            menor: event.target.value
                        })
                    }}/>

            <input type="number" placeholder="MAIOR VALOR" value={this.state.maior} onChange={(event) => {
                        if (event.target.value) {
                            this.setState({
                                maior: event.target.value
                            })
                        } else {
                            this.setState({
                                maior: Infinity
                        })
                    }
                }}/>

</InputDivCarros>


            <DivCarrosStyle>
              
              {filtroCarro.map((carro) => (<CarrosGrid>
                  <CardCar>
                    <ImagemCar src={carro.foto} alt="imagem"/>
                    <p>{carro.name} {carro.ano} </p>
                    <p>Cor: {carro.cor}</p>
                    <p>{Number(carro.price).toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}</p>

                </CardCar>
                  </CarrosGrid>))}
            </DivCarrosStyle>
            </div>
        )
    }
}
export default Store;