import "./Home.css";
import ItemList from "../../components/ItemList/ItemList";
function Home() {
  return (
    <div className="homeContainer">
      <div className="posterContainer">
        <img className="poster" src="/poster.png" alt="" />
      </div>
      <div className="main">
        <ItemList></ItemList>
      </div>
    </div>
  );
}

export default Home;
