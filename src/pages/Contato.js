import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import fundo from '../images/fundoContato.jpg';
import ItemFormulario from '../components/ItemFormulario';
import 'animate.css';

function Contato() {
    return (
        <div className='animate__animated animate__fadeIn p-0 m-0'>
            <div className='p-0' style={{ backgroundImage: `url(${fundo})`, height: 'auto', backgroundSize: 'cover', backgroundPosition: 'top', marginTop: '-16px', marginBottom: '-48px' }}>
                <Row className='m-0 pb-5 justify-content-center' >
                    <Col xs="10" className='border border-secondary bg-dark text-white mt-5' style={{ height: 'fit-content', opacity: '95%' }}>
                        <Row>
                            <Col xs="12">
                                <h1 className='text-center display-4 mb-3 mt-3'>Fale Conosco</h1>
                            </Col>
                            <Col xs="12">
                                <ItemFormulario name="nome" label="Nome" tipo="text" ph="Digite seu nome aqui" />
                            </Col>
                            <Col xs="12">
                                <ItemFormulario name="email" label="Email" tipo="email" ph="Digite seu email aqui" />
                            </Col>
                            <Col xs="12">
                                <ItemFormulario name="telefone" label="Telefone" tipo="tel" ph="Digite o número do seu telefone celular aqui" />
                            </Col>
                            <Col xs="12">
                                <ItemFormulario name="idade" label="Idade" tipo="number" ph="Quantos anos você tem?" />
                            </Col>
                            <Col xs="12">
                                <ItemFormulario name="assunto" label="Assunto" tipo="text" ph="Qual o tema que irá falar sobre" />
                            </Col>
                            <Col xs="12">
                                <label htmlFor="textarea" className='d-block mb-3'>Sua mensagem:</label>
                            </Col>
                            <Col xs="12">
                                <textarea
                                    rows={6}
                                    cols={80}
                                    name="textarea"
                                    id="textarea"
                                    className='bg-dark text-white w-100'
                                    style={{ textIndent: '10px', boxSizing: 'border-box' }}
                                />
                            </Col>
                            <Col xs="12">
                                <button type="button" className="d-block mx-auto btn btn-outline-light mt-5 mb-4 px-5 py-3">Enviar</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Contato;