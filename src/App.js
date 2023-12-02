import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu';
import Inicio from './pages/Inicio.js'
import Projetos from './pages/Projetos.js'
import Voluntarios from './pages/Voluntarios.js'
import Doacoes from './pages/Doacoes.js'
import Contato from './pages/Contato.js'
import Rodape from './components/Rodape.js'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Container fluid>
      <BrowserRouter>
        <Row>
          {/* Header */}
          <Col className='p-0'>
            <Menu />
          </Col>
        </Row>
        <Row>
          {/* Conteúdo que vai aparecer para o usuário baseado no que ele escolher no menu */}
          <Col>
            <Routes>
              <Route exact path="/" element={<Inicio />} />
              <Route path='/projetos' element={<Projetos />} />
              <Route path="/voluntarios" element={<Voluntarios />} />
              <Route path="/doacoes" element={<Doacoes />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </Col>
        </Row>
        <Row>
          <Col className='p-0'>
            {/* Footer */}
            <Rodape />
          </Col>
        </Row>
      </BrowserRouter >
    </Container>

  );
}

export default App;
