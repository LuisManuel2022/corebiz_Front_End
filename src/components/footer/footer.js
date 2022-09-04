import React from 'react'
import './footer.css'
import Mail from '../img/mail.png'
import Consulta from '../img/heatset.png'
import Creada from '../img/logo_alternativo.png'
import Vtex from '../img/vtex.png'

const Footer = () => {
  return (
    <div className='contain_footer'>
        <div className='localizacion'>
            <h3>Ubicacion</h3>
            <br />
            <hr className='lines'/>
            <br />
            <h5>Avenida Andromeda, 2000. Bloco G o B</h5>
            <h5>alphaVille SP</h5>
            <h5>brasil@corebiz.ag</h5>
            <h5>+55 11 30901039</h5>
        </div>
        <div className='contacto'>
            <div className='contacto_contactanos'>
                <img src={Mail} alt="mail"/>
                <a href='//' alt=''>CONTÁCTANOS</a>
            </div>
            <div className='contacto_consulta'>
                <img src={Consulta} alt='ConsultaEnLinea' />
                <a href='/' alt=''>HABLA CON UN CONSULTOR</a>
            </div>
        </div>
        <div className='compañia'>
            <div className='compañia_creada'>
                <p>Creada por</p>
                <img className='Creada' src={Creada} alt="CreadaPorCorebiz"/>
            </div>
            <div className='compañia_power'>
                <p>Powered by</p>
                <img className='vtex' src={Vtex}    alt='vtex'/>
            </div>
        </div>
    </div>
  )
}

export default Footer