import React from 'react';
import './style.css';

function CardInformacoes(props) {
    return(
        <div className='secao-informacao'>
            <h2>{props.titulo}</h2>
            
            <div>
                {props.children}

            </div>
        </div>
    )
};

export default CardInformacoes;