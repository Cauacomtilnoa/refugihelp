import refugiados from '../images/refugiados.jpeg';
import refugiados2 from '../images/refugiados2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function Inicio() {
    const paragrafoStyle = {
        textAlign: 'justify',
        textIndent: '1.2em', // Altere o valor conforme necessário
        // Adicione outros estilos conforme necessário
    };
    return (
        <div>
            <Row className='bg-dark py-4 mb-5 text-white' style={{ marginTop: "-16px", boxShadow: '0px 0px 7px black' }}>
                <Col xs="7" className='text-center'>
                    <p className='p-0 m-0 '>Ajude-nos a Fazer a Diferença! Faça sua doação hoje.
                    </p>
                </Col>

                <Col xs="5" className='text-center align-self-center text-md-start'><Link to="/doacoes" className='text-decoration-none text-white'><span className='border p-2 px-3'>Doar</span></Link></Col>

            </Row>
            <Row style={{ marginBottom: '270px', marginTop: '100px' }} >
                <Col md="6" lg="5" className='d-flex justify-content-center'>
                    <img src={refugiados} className='img-fluid rounded-2 img-responsive' style={{ boxShadow: '0px 0px 3px black' }} />
                </Col>
                <Col md="6" className='mt-5 mt-md-0 ms-0 ms-lg-5' >
                    <Row className='justify-content-center'>
                        <Col md="12">
                            <h1 className='bg-black text-white rounded-2 pb-2 pt-1 text-center lh-1' >Junte-se à RefugiHelp e Faça a Diferença!</h1>

                            <p className='mt-3 mt-md-4 fs-5' style={paragrafoStyle}>Você já parou para pensar na diferença que podemos fazer quando nos unimos em prol de uma causa nobre? A RefugiHelp é uma ONG fictícia que tem como missão fundamental oferecer apoio e assistência a refugiados, proporcionando-lhes um novo começo e a chance de construir um futuro digno.</p>

                            <p style={paragrafoStyle} className='fs-5'>Imbuída de um compromisso inabalável com a justiça social, a RefugiHelp não é apenas uma organização, mas sim uma família global, conectada pelo propósito de restaurar a esperança naqueles que enfrentaram os desafios mais assombrosos. Em nossa jornada, testemunhamos histórias de resiliência e coragem que inspiram cada passo que damos.</p>

                            <p style={paragrafoStyle} className='fs-5'>Cada história que encontramos é uma narrativa de coragem e resiliência. Em meio às circunstâncias mais desafiadoras, testemunhamos a força interior daqueles que, apesar de terem enfrentado a adversidade, mantêm uma chama ardente de esperança. A RefugiHelp se coloca ao lado desses indivíduos, pronta para ser a ponte que os conduz a um futuro cheio de possibilidades.</p>

                            <Link to="/projetos"><button type="button" className="btn btn-dark p-3 ">Conheça Nossos Projetos</button></Link>
                        </Col>
                    </Row >
                </Col >
            </Row>
            <Row className='mt-5'>
                <Col md="11 ms-md-5">
                    <Row>
                        <Col md="6">
                            <Col md="12">
                                <p className='h3 bg-black text-white rounded-2 pb-2 pt-1 px-3 text-center lh-1 mb-4'>Quem Somos - RefugiHelp: Unindo Corações, Transformando Vidas</p>
                            </Col>

                            <Col md='12'>
                                <p style={paragrafoStyle} className='fs-5'>Seja bem-vindo à RefugiHelp, uma organização não governamental comprometida em fazer a diferença na vida dos refugiados, oferecendo apoio, solidariedade e oportunidades para construir um futuro digno. Fundada com a missão de proporcionar auxílio e esperança às pessoas que foram forçadas a deixar seus lares devido a conflitos, perseguições ou desastres, a RefugiHelp busca ser a voz daqueles que muitas vezes são negligenciados.</p>
                            </Col>
                            <Col md="12">
                                <p className='h5 fs-4'>Nossa Missão:</p>
                            </Col>
                            <Col md="12">
                                <p style={paragrafoStyle} className='fs-5 mt-2'>Na RefugiHelp, acreditamos que cada indivíduo tem o direito fundamental de viver com dignidade, liberdade e oportunidades iguais. Nossa missão é oferecer assistência abrangente aos refugiados, visando não apenas suprir suas necessidades básicas, mas também capacitá-los a reconstruir suas vidas de maneira sustentável.</p>
                            </Col>
                        </Col>
                        <Col md="6" className='align-self-center'>
                            <img src={refugiados2} className='img-fluid rounded-2 img-responsive' style={{ boxShadow: '0px 0px 3px black' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div >
    )
}

export default Inicio
