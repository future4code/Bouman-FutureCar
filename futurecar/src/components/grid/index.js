import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/futureCar"

const CarrosGrid = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;

`

class CarrosAPI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todosCarros: [],
        }
    }

    pegarCarros = async () => {
        const response = await axios.get(`${baseURL}/cars`)
        this.setState({todosCarros: response.data.results})
    }

    componentDidMount(){
        this.todosCarros();
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }



}







export default CarrosAPI;