import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import ItemProjetos from '../components/ItemProjetos';
import ItemProjetosInvertido from '../components/itemProjetosInvertido';
import palestina from '../images/palestina.jpg';
import ucrania from '../images/ucrania.jpg';
import 'animate.css';

function Projetos() {
    return (
        <div className='animate__animated animate__fadeIn'>
            <Row className='mt-5'>
                <Col className='p-0 m-0 text-center mt-5 mb-5'>
                    <h2 className='h1'>Nossos principais projetos</h2>
                    <p className='lead fs-5 m-0 p-0 mt-3'>Conheça mais sobre todos os nossos projetos</p>
                </Col>
            </Row>
            <Row className='justify-content-center p-0 m-0'>
                <Col xs="8" className='p-0 m-0'>
                    <ItemProjetos img={palestina} titulo="Construindo Esperança para os Refugiados da Palestina" desc="Adentremos juntos a seção de nossa ONG dedicada à ajuda aos refugiados da Palestina. " />
                    <ItemProjetosInvertido img={ucrania} titulo="Iniciativas Transformadoras: Projetos de Apoio aos Refugiados Ucranianos" desc="Neste projeto temos iniciativas destinadas a criar impacto positivo e duradouro para os refugiados da Ucrânia." />

                </Col>
            </Row>
        </div>
    )
}

export default Projetos