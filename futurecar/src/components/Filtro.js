import React from 'react';
import styled from 'styled-components';

class Filtro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filtroCarro: '',
            filtroMax: Infinity ,
            filtroMin: '' 
        };

    render () {
        return (
            <details>
                <summary> Filtrar por: </summary>
                    <input 
                        placeholder='Modelo do carro'
                        type='text'
                        value={this.state.filtroCarro}
                        onChange={(event) => {
                            this.setState({
                                filtroCarro: event.target.value
                            })
                            }}
                            />
                    <input 
                        placeholder='Valor máximo'
                        type='number'
                        value={this.state.filtroMax}
                        onChange={(event) => {
                            if (event.target.value) {
                                this.setState({
                                    filtroMax: event.target.value
                                })
                            } else {
                                this.setState({
                                    filtroMax: Infinity
                            })
                        }
                    }}/>
                    <input 
                        placeholder='Valor mínimo'
                        type='number'
                        value={this.state.filtroMin}
                        onChange={(event) => {
                            this.setState({
                                filtroMin: event.target.value
                            })
                        }}/>
            </details>
        );
        };
    }
}

export default Filtro;

