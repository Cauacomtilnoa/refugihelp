import ItemDoacao from "../components/ItemDoacao"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function Doacoes() {
    return (
        <div>
            <Row className="mt-5 mb-5">
                <Col className="mb-5 mt-5">
                    <h2 className="text-center mb-5">Ajude-nos a Construir Esperança: Faça uma Doação à RefugiHelp</h2>
                </Col>
            </Row>
            <Row>

                <Col xs="2">
                    <ItemDoacao img="https://picsum.photos/100/200" titulo="Doe 30 reais" conteudo="Ajude realizando uma doação" />
                </Col>

                <Col xs="2">
                    <ItemDoacao img="https://picsum.photos/100/200" titulo="Doe 45 reais" conteudo="Ajude realizando uma doação" />
                </Col>

                <Col xs="2">
                    <ItemDoacao img="https://picsum.photos/100/200" titulo="Doe 80 reais" conteudo="Ajude realizando uma doação" />
                </Col>
                <Col xs="1"></Col>


            </Row>
        </div>
    )
}

export default Doacoes