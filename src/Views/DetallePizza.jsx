import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

import MyContext from '../Context/MyContext';
import { Button, Card } from 'react-bootstrap';


const DetallePizza = () => {

    const { id } = useParams();

    const { pizzas, agregarPizza } = useContext(MyContext);

const indexPizza = pizzas.findIndex((p) => p.id === id);
const pizzaDetalle = pizzas[indexPizza];

  return (
    <div className='estiloDetalle'>
    
    <div><img className='imagenDetalle' src={pizzaDetalle.img} alt="imagenPizza"/></div>
    
    <div>
        <Card.Title className='cardTitle' style={{ textTransform: "capitalize" }} >{pizzaDetalle.name}</Card.Title>
        
        <div>
            <p>{pizzaDetalle.desc}</p>
            <p className="textoIngredientes">Ingredientes</p>
            <ul style={{ textTransform: "capitalize" }}>
                {
                    pizzaDetalle.ingredients.map((i) => <li key={i}>{i}</li>)
                }
            </ul>
            
            <p className='textoPrecio'>$ {pizzaDetalle.price}</p>
            <Button className='btnVerMas' onClick={() =>agregarPizza(pizzaDetalle[0])}>Añadir</Button>{' '}
        </div>
        
    </div>

</div>
  )
}

export default DetallePizza