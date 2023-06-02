const calculaTotal = (lstProductos) => {
let total = 0;
lstProductos.map((p) => {
    total = total + (p.price * p.cant)
})

return total;
}

export { calculaTotal }