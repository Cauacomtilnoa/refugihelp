import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function ItemDoacao(props) {
    return(
        <div>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..." height="180"/>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.conteudo}</p>
                    <a href="#" className="btn btn-primary">Doar</a>
                </div>
            </div>
        </div>
    )
};

export default ItemDoacao

