import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import voluntario from '../images/aaa.jpeg'

function Voluntarios() {
    return (
        <div className='p-0'>
            <div className='img-fluid p-0' style={{ backgroundImage: `url(${voluntario})`, height: '60vh', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '-16px' }}>
                <Row className='p-0 m-0'>
                    <Col>
                        <p></p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Voluntarios