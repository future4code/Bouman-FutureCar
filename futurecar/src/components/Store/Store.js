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
            <div>
                <h1>Oi</h1>
            </div>
        )
    
    }
}

export default Store;