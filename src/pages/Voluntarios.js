import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import voluntario from '../images/aaa.jpg'

function Voluntarios() {
    return (
        <div className='p-0 m-0'>
            <div className='img-fluid' style={{ backgroundImage: `url(${voluntario})`, height: '65vh', backgroundSize: 'cover', backgroundPosition: 'top', marginTop: '-16px' }}>
                <Row className='p-0 m-0 h-100'>
                    <Col className='text-white justify-content-center d-flex flex-column text-shadow'>
                        <h1 className='display-4' style={{ textShadow: '2px 2px 5px black' }}>Seja um Voluntário na RefugiHelp</h1>
                        <p className='lead fs-4' style={{ textShadow: '2px 2px 5px black' }}>Faça a diferença na vida dos refugiados. Junte-se à nossa equipe dedicada e contribua para um futuro mais brilhante.</p>
                        <p className='lead fs-4' style={{ textShadow: '2px 2px 5px black' }}>Escolha entre diversas oportunidades de voluntariado e faça parte da mudança positiva que queremos ver no mundo.</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Voluntarios