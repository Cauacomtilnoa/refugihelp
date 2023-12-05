import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function ItemProjetos(props) {
    return (
        <div className='mt-5 mb-5'>
            <Row>
                <Col className='order-md-0' md="1"></Col>
                <Col className="order-2 order-md-1" md="6">
                    <div>
                        <h2>{props.titulo}</h2>
                        <h3>{props.subtitulo}</h3>
                        <p className='text-break fs-5 lead' style={{ overflow: 'hidden' }}>{props.desc}</p>
                        <button type="button" class="btn btn-outline-dark">Saiba mais</button>
                    </div>
                </Col>
                <Col md="5" className='d-flex justify-content-end order-1 order-md-2'>
                    <img src={props.img} alt="" className='rounded-1 img-fluid' />
                </Col>
            </Row>
        </div>
    )
}

export default ItemProjetos