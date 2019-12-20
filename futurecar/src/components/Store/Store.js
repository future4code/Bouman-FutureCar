import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
const baseURL = "https://us-central1-future-apis.cloudfunctions.net/futureCar"

const CarrosGrid = styled.div `
    display: grid;
    
`

const CardCar = styled.div `
    border: 1px dotted black;
    display: grid;
`;

const ImagemCar = styled.img `
    width: 300px;
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
            return carro.price < (this.state.maior || Infinity)
        }).filter ((carro) => {
            return carro.price > (this.state.menor || 0)
        })

        console.log(filtroCarro)
        return(
            <div>
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
              {filtroCarro.map((carro) => (<CarrosGrid>
                  <CardCar>
                    <ImagemCar src={carro.foto} alt="imagem"/>
                    <p>Modelo: {carro.name}</p>
                    <p>Preço: {carro.price}</p>
                </CardCar>
                  </CarrosGrid>))}
            </div>
        )
    }
}
export default Store;