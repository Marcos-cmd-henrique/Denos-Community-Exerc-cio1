import React from 'react';
import Card from '../components/index';
import Programming from '../assets/programação.jpg'



const App = () => {
  const react =
  "../assets/react.png";
const angular =
  "../assets/angular.png";

const vuejs =
  "../assets/vuejs.webp";

const laravel =
  "../assets/laravel.jpg";

const ionic =
"../assets/ionic.png";

  return (
    <div className="main">

      <div className="header">
        <a>
          Linguagens Front-End mais usadas <img src={Programming} />
        </a>
      </div>

      <section className="container">

        <div className="cardLanguage">

          <h2>Linguagens de Programação</h2>

          <div className="languages">
            <Card
              title={"React"}
              description={
                "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
              }
              rate={5}
              img={react}
            />
            <Card
              title={"Angular"}
              description={
                "Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações."
              }
              rate={1}
              img={angular}
            />
            <Card
              title={"vuejs"}
              description={
                "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única."
              }
              rate={3}
              img={vuejs}
            />
            <Card
              title={"Laravel"}
              description={
                "Laravel é um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC."
              }
              rate={2}
              img={laravel}
            />

            <Card
              title={"Ionic"}
              description={
                "Ionic é um SDK de código aberto completo para desenvolvimento de aplicativos móveis híbridos criado por Max Lynch, Ben Sperry e Adam Bradley da Drifty Co. em 2013."
              }
              rate={1}
              img={ionic}
            />
          </div>
        </div>
        </section>
      </div>




/*     <div>
    <Card title="React é melhor que Angular" description="Front-End React" rate={3} />
    <Card title="Angular é melhor que React" description="Front-End Angular" rate={1} />
  </div> */
  
  );
}

export default App;