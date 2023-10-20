import "./Home.css";
import ItemList from "../../components/ItemList/ItemList";
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import CategoryCardContainer from "../../components/CategoryCardContainer/CategoryCardContainer";
function Home() {
  return (
    <div className="homeContainer">
      <div className="posterContainer">
        <img className="poster" src="/poster.png" alt="" />
      </div>
      <div className="main">
        {/* <ItemList></ItemList> */}

        <BannerCarousel />
        <CategoryCardContainer />
      </div>
    </div>
  );
}

export default Home;
