import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import MyContext from '../Context/MyContext';

const Navi = () => {
    const {totalPedido} = useContext(MyContext)
    return (
        <Navbar className='myNavbar'>
            <Container className='navi'>
                <NavLink to="/" className='titulo'>Pizzería Mamma Mía!</NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='carritoTexto'>
                        <img className='imagenCarrito' src="https://icones.pro/wp-content/uploads/2021/05/symbole-charrette-verte.png" alt="carrito" />
                        <NavLink to="/carrito" className='montoCarrito'>Ver Carrito [{totalPedido}]</NavLink>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navi