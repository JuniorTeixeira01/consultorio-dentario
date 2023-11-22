import React from 'react';
import CardInformacoes from '../../componentesCards/CardInformacoes';
import './style.css';

const Informacoes = () => (
    <div className='container-informacao'>
        <CardInformacoes titulo = 'INFORMAÇÕES'>
            <ul>
                <li>Segunda - 09:00 às 18:00</li>
                <li>Terça - 09:00 às 18:00</li>
                <li>Quarta -09:00 às 18:00</li>
                <li>Quinta - 09:00 às 18:00</li>
                <li>Sexta - 09:00 às 17:00</li>
                <li>Sábado - 09:00 às 12:00</li>
            </ul>
        </CardInformacoes>

        <CardInformacoes titulo = 'INFORMAÇÕES'>
            <section className='container-doutores'>
               <section className='informacoes-doutores'>
                   <img src='assets/doutora.png' alt='Imagem doutora'/>
                   <section className='container-texto'>
                     <p>Dra.Ana - Ortodontista</p>
                     <p>Segundas e sextas</p>
                    </section>
               </section>
               <section className='informacoes-doutores'>
                   <img src='assets/doutor.jpeg' alt='Imagem doutor'/>
                   <section className='container-texto'>
                     <p>Dr.carlos Endodontia</p>
                     <p>Terças e quartas</p>
                    </section>
               </section>
            </section>
        </CardInformacoes>

        <CardInformacoes titulo = 'INFORMAÇÕES'>
            <section className='container-contato'>
               <p>Ligar para agendar uma consulta:</p>
               <p>(21) 3699 - 9999</p>
               <p>(21) 97788 - 5566</p>
            </section>
        </CardInformacoes>

    </div>
);

export default Informacoes;