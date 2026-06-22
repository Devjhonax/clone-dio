import Profile from "../Profile/index.js"
import "./card.css"

import perfil from "../../assets/perfil.jpeg"
import banner from "../../assets/banner.png"

const Card = () => {
    return (
        <div className="card">
            <img className="img-banner" src={banner} alt="banner" />

            <div className="text-card">
                <div className="infor-user">
                    <Profile profile={perfil}/>
                    <div className="infor-acess">
                        <p>Jhonathas Jesus</p>
                        <span>Há 8 minutos</span>
                    </div>
                </div>

                <br />
                <h2>Projeto para curso de HTML e CSS</h2>
                <p>Projeto feito no curso de html e css no bootcamp da dio 
                    do Global avanade... <span>Ver Mais</span>
                </p>

                <br />
                <p>#HTML #CSS #javascript</p>
            </div>
        </div>
    )
}

export default Card