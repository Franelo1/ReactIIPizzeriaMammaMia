import React, { useContext } from 'react'
import MyContext from '../Context/MyContext';
import { Row, Col } from 'react-bootstrap';
import CardPizza from '../Components/CardPizza';


const Home = () => {

    const { pizzas } = useContext(MyContext);

    return (
        <>
            <Row>
                {
                    pizzas.map((pizza) => {
                        return <Col key={pizza.id}><CardPizza pizza={pizza}></CardPizza></Col>


                    })
                }

                

            </Row>
        </>
    )
}

export default Home