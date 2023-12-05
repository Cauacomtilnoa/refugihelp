import ItemDoacao from "../components/ItemDoacao"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import doacao1 from '../images/doacoes1.jpg'
import doacao2 from '../images/doacoes2.jpg'
import doacao3 from '../images/doacoes3.jpg'
import 'animate.css';

function Doacoes() {
    return (
        <div className="animate__animated animate__fadeIn">
            <Row className="mt-5 mb-5">
                <Col className="mb-5 mt-5">
                    <h2 className="text-center mb-5">Ajude-nos a Construir Esperança: Faça uma Doação à RefugiHelp</h2>
                </Col>
            </Row>
            <Row className="justify-content-around">

                <Col xs="12" md="2" >
                    <ItemDoacao img={doacao1} titulo="Doe 30 reais" conteudo="Ajude realizando uma doação de 30 reais." />
                </Col>

                <Col xs="12" md="2">
                    <ItemDoacao img={doacao2} titulo="Doe 50 reais" conteudo="Ajude realizando uma doação de 50 reais" />
                </Col>

                <Col xs="12" md="2">
                    <ItemDoacao img={doacao3} titulo="Doe quanto quiser" conteudo="Ajude realizando uma doação" />
                </Col>

                <Row className="mt-5 mb-5"></Row>
            </Row>
        </div>
    )
}

export default Doacoes