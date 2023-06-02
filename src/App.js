import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MyContext from "./Context/MyContext";
import Navi from './Components/Navi';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Carrito from './Views/Carrito';
import DetallePizza from './Views/DetallePizza';




function App() {

  const [pizzas, setPizzas] = useState([]);
  const [pizzasPedidas, setPizzasPedidas] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);

  const getPizzas = async () => {
    const res = await fetch('http://localhost:3000/pizzas.json');
    const data = await res.json();

    setPizzas(data);
  }

  const agregarPizza = (pizza) => {
    const index = pizzasPedidas.findIndex((p) => p.id === pizza.id);


    if (index > -1) {
        pizzasPedidas[index].cant += 1;
        setPizzasPedidas([...pizzasPedidas]);

    
    } else {
        const pizzaSeleccionada = { id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img, cant: 1 };
        setPizzasPedidas([...pizzasPedidas, pizzaSeleccionada]);
    }
    setTotalPedido(totalPedido+pizza.price)

    

}



useEffect(() => {
  getPizzas();
  
}, []);

  return (
    <div className="App">
      <MyContext.Provider value={{pizzas, pizzasPedidas, setPizzasPedidas, setTotalPedido, totalPedido, agregarPizza}}>
     <BrowserRouter>
     <Navi></Navi>
     <Banner></Banner>

     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/carrito" element={<Carrito></Carrito>}></Route>
      <Route path="/pizza/:id" element={<DetallePizza></DetallePizza>}></Route>
     </Routes>
     
     <Footer></Footer>
     </BrowserRouter>
     </MyContext.Provider>
    </div>
  );
}

export default App
