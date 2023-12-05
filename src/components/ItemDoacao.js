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
                    <button type="button" class="btn btn-outline-dark">Doar</button>
                </div>
            </div>
        </div>
    )
};

export default ItemDoacao

