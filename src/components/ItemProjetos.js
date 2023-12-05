import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function ItemProjetos(props) {
    return (
        <div className='p-0 m-0 mt-5 mb-5'>
            <Row>
                <Col xs="12" md="5" className='d-flex justify-content-start'>
                    <img src={props.img} alt="" className='rounded-1 w-100' style={{ maxWidth: '400px', height: 'auto' }} />
                </Col>
                <Col xs="12" md="6">
                    <div>
                        <h2>{props.titulo}</h2>
                        <h3>{props.subtitulo}</h3>
                        <p className='text-break fs-5 lead' style={{ overflow: 'hidden' }}>{props.desc}</p>
                        <button type="button" className="btn btn-outline-dark">Saiba mais</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ItemProjetos;