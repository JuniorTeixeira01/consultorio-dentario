import React from 'react';
import './style.css';

const Apresentacao = () => (
    <section className='secao-apresentacao'>
        |<h2><span>OS MELHORES</span> APARELHOS DENTÁRIOS</h2>
        <p>Confira abaixo todas as especialidades odontológicas que temos a sua disposição</p>
      
        <div className='container-apresentacao'>
            <div className='container-apresentacao primeiro-bloco'>
               <div>
                   <img src='assets/sun.png' alt='Imagem dental' />
                   <p>Pré-avaliação</p>
               </div>
               <div>
                   <img src='assets/sun.png' alt='Imagem dental' />
                   <p>Raio-X digital</p>
               </div>
            </div>

            <div className='container-apresentacao segundo-bloco'>
                <div>
                  <img src='assets/sun.png' alt='Imagem dental' />
                  <p>Aparelhos Dentários</p>
                </div>
        
                <div>
                  <img src='assets/sun.png' alt='Imagem dental' />
                  <p>Clareamento dental</p>
                </div>
            </div>
        </div>

    </section>
);

export default Apresentacao;