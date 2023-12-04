import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import ItemProjetos from '../components/ItemProjetos';
import ItemProjetosInvertido from '../components/itemProjetosInvertido'

function Projetos() {
    return (
        <div>
            <Row className='mt-5'>
                <Col className='p-0 m-0 text-center mt-5 mb-5'>
                    <h2 className='h1'>Nossos principais projetos</h2>
                    <p className='lead fs-5 m-0 p-0 mt-3'>Conheça mais sobre todos os nossos projetos</p>
                </Col>
            </Row>
            <Row className='justify-content-center p-0 m-0'>
                <Col xs="8" className='p-0 m-0'>
                    <ItemProjetos img="https://picsum.photos/400/300" titulo="Ajuda ao povo Palestino" subtitulo="Você também pode colaborar" desc="uiadasdasd"/>
                    <ItemProjetosInvertido img="https://picsum.photos/400/300" titulo="Ajuda ao povo Palestino" subtitulo="Você também pode colaborar" desc="uiadasdasd"/>
                    
                </Col>
            </Row>
        </div>
    )
}

export default Projetos