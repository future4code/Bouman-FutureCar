import React from 'react';
import styled from "styled-components"
//import Filtro from './components/Filtro'
//import Grid from './components/grid'

//mock de dados para o grid dos carros
const carros = [
  {
    id: 1,
    modelo: 'McLaren SLR',
    cor: 'prata',
    ano: 2010,
    marca: 'Mercedes',
    preco: 500000,
    km: 10000,
    foto: 'https://live.staticflickr.com/7616/16325639624_c61f70fcbb_z.jpg'
  },
  {	
    id: 2,
    modelo: 'Bonneville',
    cor: 'cinza',
    ano: 1967,
    marca: 'Pontiac', 
    preco: 10000,
    km: 2000000,
    foto: 'https://live.staticflickr.com/2845/9687832223_c065b580c3_c.jpg'
  },
  {	
    id: 3,
    modelo: 'Cadillac DeVille',
    cor: 'verde',
    ano: 1972,
    marca: 'General Motors',
    preco: 20000,
    km: 2550000,
    foto: 'https://live.staticflickr.com/7378/9690987814_1a4475f175_z.jpg'
  },
  {	
    id: 4,
    modelo: 'Dino 246 GT',
    cor: 'vermelho',
    ano: 1972,
    marca: 'Ferrari', 
    preco: 50000,
    km: 1550000,
    foto: 'https://foter.com/photos/224/ferrari-dino-246-1.jpg'
  },
  {
    id: 5,
    modelo: 'Oldsmobile Cutlass Calais',
    cor: 'branco',
    ano: 1979 ,
    marca: 'General Motors',
    preco: 40000,
    km: 1550000,
    foto: 'https://live.staticflickr.com/7328/9684124242_02d023d242_c.jpg'
  },
  {
    id: 6,
    modelo: 'Buick Riviera',
    cor: 'preto',
    ano: 1963,
    marca: 'General Motors',
    preco: 30000,
    km: 1550000,
    foto: 'https://live.staticflickr.com/5508/9687912489_bfc8b1752e_c.jpg',
  },
  {
    id: 7,
    modelo: 'Firebird',
    cor: 'azul',
    ano: 1986,
    marca: 'Pontiac',
    preco: 40000,
    km: 4000000,
    foto: 'https://live.staticflickr.com/5557/14925924479_f77a48b930_c.jpg'
  },
  {
    id: 8,
    modelo: '300 SL Roadster',
    cor: 'plata',
    ano: 1962,
    marca: 'Mercedes',
    preco: 100000,
    km: 100000,
    foto: 'https://live.staticflickr.com/6143/6001895552_9cceed31ba_z.jpg',
  }
  ]
  //fim do mock de dados


const MainContainer = styled.div `

`;

const Header = styled.div `
  display:flex;
  justify-content: center;
  border: solid 1px;
`;

const Section = styled.section `
  background-color: #e6e6e6;
  height: 700px;
  padding-top: 70px;
  margin: 0 auto;
  
`;

const Hr = styled.hr `
  padding-top: 50px;
`;

const Titulo = styled.div `
  text-align: center;

  width: 100%;
  height: 40px;
  background-color: rgb(255,92,92);
`;

const Footer= styled.footer `
  display: flex;
  justify-content: space-between;
  background-color: rgb(255,92,92);
  height: 50px;
  bottom: 0px;
  position: relative;
  padding: 5px;
`;

const Test= styled.div`
display:flex;
`

const ImgFooter= styled.img `
  display:flex;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

const FooterIcons= styled.div`
display:flex;
`

const IconeFooter = styled.img `
display:flex;
width: 40px;
height: 40px;
margin-right: 5px;

`

const DivButton = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`

const Button = styled.button `
  width: 150px;
  height: 50px;
  background-color: #ff5c5c;
  margin-left: 50px;
`

function App() {
  return (
    <MainContainer>
      <Header>   
        <img src={require('./components/img/futurecar.png')}  />
      </Header>
     
      <Section>

        <Hr/>
        
          <Titulo>
           <h2>FutureCAR VRUMM !</h2> 
          </Titulo>
          <DivButton>
            <Button> Quero Comprar</Button>
            <Button> Quero Vender</Button>
          </DivButton>
      </Section>


      
      <Footer>
    
      <Test>
        <ImgFooter src={require('./components/img/carro-preto.png')}/> <h4>FUTURECAR | Going beyond.</h4>
      </Test>
        <FooterIcons>
          <IconeFooter src={require('./components/img/instagram.png')} />
          <IconeFooter  src={require('./components/img/facebook.png')} />
          <IconeFooter src={require('./components/img/email.png')}  />
        </FooterIcons>
      
      </Footer>


    </MainContainer>

  );
}

export default App;