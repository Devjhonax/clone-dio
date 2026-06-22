import Profile from "../Profile/index.js";
import perfil from "../../assets/perfil.jpeg"
import "./userInfor.css";

const userInfor = () => {
  return (
    <div className="user-infor">
      <Profile profile={perfil}/>

      <div className="porcent-progression">
        <h3>Jhonathas Jesus</h3>

        <div className="bar-progression"></div>
      </div>
    </div>
  );
};

export default userInfor;
