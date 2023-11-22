import React from 'react';
import './style.css';

const Localizacao = () => (

    <div className='container-local'>
        <h2>ONDE ESTAMOS <span>LOCALIZADOS</span></h2>
        <p>Av. Ayrton Senna, 3000 - Barra da Tijuca - RJ. CEP: 22775-904</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3673.1166797096143!2d-43.360893!3d-22.982736499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1700558319711!5m2!1spt-BR!2sbr" title='local'></iframe>
    </div>
);
export default Localizacao;