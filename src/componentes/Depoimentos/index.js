import React from 'react';
import CardDepoimentos from '../../componentesCards/CardsDepoimentos';
import './style.css';

const Depoimentos = () => (
    <div className='secao-depoimentos'>
        <h2>VEJA O QUE NOSSOS <span>CLIENTES</span> ESTÃO FALANDO</h2>
        <div className='depoimentos-cards'>
            <CardDepoimentos>
                <img src='assets/pessoa1.png' alt='pessoa 1' />
                <h4>Alberto</h4>
                <p>Por dois anos, eu fiz um tratamento com o Dentes saudáveis,
                    que me atendeu com profissionalismo e cuidado.
                </p>
            </CardDepoimentos>
            <CardDepoimentos>
                <img src='assets/pessoa2.jpeg' alt=' pessoa 2' />
                <h4>Eliana</h4>
                <p>Por dois anos, eu fiz um tratamento com o Dentes saudáveis,
                    que me atendeu com profissionalismo e cuidado.</p>
            </CardDepoimentos>
            <CardDepoimentos>
            <img src='assets/pessoa3.jpeg' alt=' pessoa 3' />
                <h4>Carla</h4>
                <p>Por dois anos, eu fiz um tratamento com o Dentes saudáveis,
                    que me atendeu com profissionalismo e cuidado.</p>
            </CardDepoimentos>
            
        </div>
    </div>
);

export default Depoimentos;