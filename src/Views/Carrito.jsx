import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import MyContext from '../Context/MyContext'
import { calculaTotal } from '../utils/utils';


const Carrito = () => {
    const { pizzasPedidas, totalPedido, setPizzasPedidas, setTotalPedido } = useContext(MyContext);

    const disminuirCantidad = (id) => {
        const index = pizzasPedidas.findIndex((p) => p.id === id);

        if (index >= 0) {
            if (pizzasPedidas[index].cant > 0) {
                pizzasPedidas[index].cant -= 1;
                setPizzasPedidas([...pizzasPedidas])
            }
            

            
        } 
        
        setTotalPedido(calculaTotal(pizzasPedidas));
    } 

    const aumentarCantidad = (id) => {
        const index = pizzasPedidas.findIndex((p) => p.id === id);

        if (index >= 0) {
            pizzasPedidas[index].cant += 1;

            setPizzasPedidas([...pizzasPedidas])
        } 
        setTotalPedido(calculaTotal(pizzasPedidas))
    } 


    return (
        <div>
            <h3 style={{ marginLeft: "100px", marginTop: "5px" }}>Detalle del pedido:</h3>


            <div >
                {
                    pizzasPedidas.map((p, i) => {
                        return <div key={i} className='carrito'>

                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} >
                                <img src={p.img} style={{ width: "50px", padding: "5px" }} alt="imagen"></img>
                                <div style={{ textTransform: "capitalize", padding: "2px" }}><NavLink className="link" to={`/pizza/${p.id}`}> {p.name} </NavLink></div>
                            </div>

                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} >


                                <button className='px-2 '
                                    style={{ marginLeft: "5px", marginRight: "5px", backgroundColor: "red", border: "5px", borderRadius: "5px", color: "white" }}
                                    onClick={() => disminuirCantidad(p.id)}>
                                    <strong>-</strong></button>
                                <strong className='px-2'> {p.cant}</strong>
                                <button
                                    style={{ marginLeft: "5px", marginRight: "5px", backgroundColor: "green", border: "5px", borderRadius: "5px", color: "white" }}
                                    onClick={() => aumentarCantidad(p.id)}>
                                    <strong>+</strong></button>
                                <div className='px-4'> $ {(p.price * p.cant)}</div>
                            </div>

                        </div>

                    })

                }

                <h3 style={{ marginTop: "15px", marginBottom: "15" }}><center> Total Pedido: $ {totalPedido}</center></h3>

            </div>


        </div>
    )
}

export default Carrito