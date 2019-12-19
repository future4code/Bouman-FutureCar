import React from 'react';
import styled from 'styled-components';


const DivCards = styled.div `
    border: 1px dotted black;
    width: 300px;

`;

const ImaginaCars = styled.img `
    width: 300px;
`;

class Store extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render(){  
        return(
            this.props.carro.map((car) => {
                console.log(car)
                    return (
                        <DivCards>
                            <ImaginaCars src={car.foto}/>
                            <p>Modelo: {car.modelo}</p>
                            <p>Fabricante: {car.marca}</p>
                            <p>Ano: {car.ano}</p>
                        </DivCards>
                    )
                })
        )
    
    }
}

export default Store;