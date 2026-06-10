import { Link } from "react-router-dom";

import "./home.css";

import feedDio from "../../assets/feedDio.png"

import Button from "../../components/Button";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header tela={"home"}/>
      <main className="main-home">
        <div className="text-main">
          <h2>
            <span className="text-span">Implemente</span>
            <br />o seu futuro global agora!
          </h2>

          <p className="p-main">
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
            e encare seu novo desafio profissional, evoluindo em comunidade com os 
            melhores experts.
          </p>
          <Link to={"/login"}><Button variant="secundary" title={"Começar agora"}/></Link>

          
        </div>

        <img className="img-techDio" src={feedDio} alt="feed Dio" />
      </main>
    </>
  );
};

export default Home;
