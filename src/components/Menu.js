import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { SiWorldhealthorganization } from "react-icons/si";



function Menu() {
    const [paginaAtual, mudaPaginaAtual] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md" className='bg-black py-4'>
                <Link to="/" className='navbar-brand me-5'><SiWorldhealthorganization style={{ transform: 'scale(1.5)' }} /> RefugiHelp</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto gap-2" navbar>
                        <NavItem>
                            <Link to="/" className={paginaAtual === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('home')}>Início</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/projetos" className={paginaAtual === 'projetos' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('projetos')}>Projetos</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/voluntarios" className={paginaAtual === 'voluntarios' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('voluntarios')} >Voluntários</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/doacoes" className={paginaAtual === 'doacoes' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('doacoes')}>Doações</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contato" className={paginaAtual === 'contato' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('contato')}>Contato</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Menu