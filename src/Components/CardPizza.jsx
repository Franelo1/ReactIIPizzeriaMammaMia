import { useContext } from 'react';
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';
import MyContext from '../Context/MyContext';

function CardPizza({ pizza }) {

    const navigate = useNavigate();

    const { agregarPizza } = useContext(MyContext);

    const verDetalle = () => {
        navigate(`/pizza/${pizza.id}`);
    }

    
    

    return (
        <div>
            <div className='card' >
                <img className='imgCard' src={pizza.img} alt="fotopizza" />
                <div>
                    <div className='cardTitle' style={{ textTransform: "capitalize" }} >{pizza.name}</div>

                    <div>
                        <p className="textoIngredientes">Ingredientes</p>
                        <ul style={{ textTransform: "capitalize" }}>
                            {
                                pizza.ingredients.map((i) => <li key={i}>{i}</li>)
                            }
                        </ul>

                        <p className="textoPrecio">$ {pizza.price}</p>
                    </div>
                    <Button className='btnVerMas' onClick={() => verDetalle()}>Ver más</Button>{' '}
                    <Button className='btnAñadir' onClick={() => agregarPizza(pizza)}>Añadir</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default CardPizza