import React from 'react';
import './style.css';

const Beneficios = () => (
    <div>
        <section className='secao-beneficios'>
            <h1>POR QUE USAR <span>APARELHO?</span></h1>
            <img src='assets/dental.jpeg' alt='Imagem dental' />
            <div className='container-beneficios'>
                <div>
                   <h3>Alinhar os dentes</h3>
                   <p>Dentes desalinhados causam problemas nos dentes e podem
                       afetar a digestão dos alimentos e a respiração.
                   </p>
                </div>
                
                <div>
                   <h3>Melhora a dicção e a higiene dentária</h3>
                   <p>Muitas pessoas não conseguem nem usar fio dental
                       devido a posição da sua dentição. Contudo, a correção
                       possibilita o cuidado com a saúde bucalde forma bem mais
                       ampla.
                   </p>
                   </div>
                 
                  <div>
                     <h3>Corrigir espaços entre os dentes</h3>
                     <p>Uma dentição desalinhada e com espaços
                         significativos incomodam muitas pessoas,
                         Usar aparelho nos dentes é uma das formas mais eficientes
                         para que esses problemas possam ser corrigidos.

                     </p>
                  </div>
            </div>
        </section>

    </div>
);

export default Beneficios;