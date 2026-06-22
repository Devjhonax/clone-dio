import "./feed.css";
import Header from "../../components/Header/index.js";
import Card from "../../components/Card/index.js";
import UserInfor from "../../components/UserInfor/index.js";

const Feed = () => {
  return (
    <>
      <Header authenticate={true}/>

      <main className="main-feed">
        <div className="div-feeds">
          <h2>Feed</h2>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div>
          <h2>#RANKING 5 TOP DA SEMANA </h2>
          <br />
          <div className="user-ranking">
            <UserInfor />
            <UserInfor />
            <UserInfor />
            <UserInfor />
            <UserInfor />
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;
