import React from 'react';
import './App.css';
import { Button, Row, Col, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul > 
          <li> Home </li>
          <li> Sobre</li>
          <li> <a> Pedir já</a></li>
        </ul>
        
        </div>

        <header>
      <img src={require('./images/header.png')} className="w-100 "></img> 
      </header>
      <div className="Chefs"> 
      <h5> Os <b>melhores</b> chefes estāo te esperando!</h5>
      <p> Conheça os experts que fazem os melhores hamburgueres que você conhece!</p>

      <div className="img-chef">
      <img src={require('./images/chef1.png')}></img> 
      <img src={require('./images/chef2.png')}></img> 
      <img src={require('./images/chef3.png')}></img> 
      </div>
    </div>

    <div className="Aplicativo">
    <img src={require('./images/bannerapp.png')} className="w-100"></img> 

    </div>

    <div className="Instagram w-100">
      <Row> 
        <Col md={5}> 
    <img src={require('./images/instagram-pic.png')}></img> 
    </Col>
    <Col md={5}> 
   <h5> <b>Siga nosso instagram,</b></h5> 
   <h5> e acompanhe nossas novidades.</h5>
   <Button> Ir para Instagram</Button>
    </Col>
    </Row>


    </div>
      <div className="Footer">
      <img src={require('./images/image 18.png')} className="textura"></img> 

      <footer>

    <Row > 
      <Col md={4}>
        <p> Seg - Quin : 18:00 as 22:00</p>
       <p> Sex - Dom :  18:00 as 00:00</p>
      </Col>
      <Col md={4}>
      <img src={require('./images/image 17.png')}></img> 

      </Col>
      <Col md={4}>
      <p> (41) 9 8812-13849</p>
       <p> contato.burguer@email.com</p>
      </Col>

    </Row>
    </footer>
    </div>


    </div>
  );
}

export default App;
