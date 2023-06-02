import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">

            <div>
                <p>Nuestros Ingredientes</p>
                <p>Formas de pago</p>
                <p>Desafio Latam, G30 - React II. Francisco Alorda 2023</p>
            </div>

            <div>
                <p>Trabaja con Nosotros</p>
                <p>Locales</p>
            </div>

            <div>
                <p>Contáctanos</p>
                <div className='redesSociales'>
                    <div>
                        <img src="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Image.png" alt="facebook" className='imgContacto'></img>
                    </div>
                    <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/017/743/717/non_2x/instagram-icon-logo-free-png.png" alt="facebook" className='imgContacto'></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer