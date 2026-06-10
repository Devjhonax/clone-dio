import "./profile.css"

const Profile = ({profile}) => {
    return (
        <img className="user-img" src={profile} alt="Perfil" />
    )
};

export default Profile;
