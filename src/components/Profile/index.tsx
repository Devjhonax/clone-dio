import "./profile.css"
import { IProfile } from "./types";

const Profile = ({profile}: IProfile) => {
    return (
        <img className="user-img" src={profile} alt="Perfil" />
    )
};

export default Profile;
