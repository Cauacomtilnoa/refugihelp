import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import voluntario from '../images/aaa.jpg'
import maozinha from '../images/voluntariosoqe.svg'
import 'animate.css';

function Voluntarios() {
    const paragrafoStyle = {
        textAlign: 'justify',
        textIndent: '1.2em', // Altere o valor conforme necessário
        // Adicione outros estilos conforme necessário
    };
    return (
        <div className='animate__animated animate__fadeIn p-0 m-0'>
            <div className='img-fluid' style={{ backgroundImage: `url(${voluntario})`, height: '65vh', backgroundSize: 'cover', backgroundPosition: 'top', marginTop: '-16px', backgroundAttachment: 'fixed' }}>
                <Row className='p-0 m-0 h-100'>
                    <Col className='text-white justify-content-center d-flex flex-column text-shadow'>
                        <h1 className='display-4' style={{ textShadow: '2px 2px 5px black' }}>Seja um Voluntário na RefugiHelp</h1>
                        <p className='lead fs-4' style={{ textShadow: '2px 2px 5px black' }}>Faça a diferença na vida dos refugiados. Junte-se à nossa equipe dedicada e contribua para um futuro mais brilhante.</p>
                        <p className='lead fs-4' style={{ textShadow: '2px 2px 5px black' }}>Escolha entre diversas oportunidades de voluntariado e faça parte da mudança positiva que queremos ver no mundo.</p>
                    </Col>
                </Row>
            </div>
            <Row className='p-0 m-0 mt-5'>
                <Col md="6" className='d-flex flex-column justify-content-evenly gap-4'>
                    <span>
                        <h2 className='h1 ms-0 ms-md-3 mb-4'>O que é ser voluntário?</h2>
                        <p className='lead fs-5' style={paragrafoStyle}>O voluntariado é sobre trocas - de experiência, conhecimento, serviço, apoio, cidadania, carinho, amor - existindo um ganho não apenas para a organização, mas também para o voluntário. É uma experiência para todes - independe de gênero, raça ou etnia - que permite conhecer novas realidades, se engajar em uma causa social, contribuir com suas habilidades, e até mesmo desenvolver novas competências.</p>
                    </span>

                    <span>
                        <h2 className='h1 ms-0 ms-md-3 mb-4'>Torne-se um Voluntário na RefugiHelp!</h2>
                        <p className='lead fs-5'>Você deseja fazer a diferença na vida dos refugiados e contribuir para um mundo mais solidário? Tornar-se voluntário na RefugiHelp é simples e significativo. Basta preencher nosso formulário de voluntariado e iniciar sua jornada de apoio e impacto positivo.</p>
                    </span>
                </Col>
                <Col md="6" className='d-flex justify-content-center mt-2'>
                    <img src={maozinha} alt="" className='img-fluid' />
                </Col>
            </Row>
            <div className='p-0 m-0'>

            </div>
        </div>
    )
}

export default Voluntarios