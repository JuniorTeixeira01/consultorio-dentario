import React from 'react';
import Topo from '../componentes/Topo';
import Apresentacao from '../componentes/Apresentacao';
import Beneficios from '../componentes/Beneficios';
import Depoimentos from '../componentes/Depoimentos';
import Informacoes from '../componentes/Informacoes';
import Localizacao from '../componentes/Localizacao';
import Rodape from '../componentes/Rodape';


 const Home = () => (
    <div>
       <Topo />
       <Apresentacao />
       <Beneficios />
       <Depoimentos />
       <Informacoes />
       <Localizacao />
       <Rodape />
    </div>

 );

 export default Home;