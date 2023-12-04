import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function ItemProjetos(props) {
    return (
        <div className='mt-5 mb-5'>
            <Row>
                <Col md="1"></Col>
                <Col md="6">
                    <div>
                        <h2>{props.titulo}</h2>
                        <h3>{props.subtitulo}</h3>
                        <p className='text-break' style={{overflow: 'hidden'}}>{props.desc}</p>
                        <button type="button" class="btn btn-outline-dark">Saiba mais</button>
                    </div>
                </Col>
                <Col md="5" className='d-flex justify-content-end'>
                    <img src={props.img} alt="" className='rounded-1 img-fluid'/>
                </Col>
            </Row>
        </div>
    )
}

export default ItemProjetos