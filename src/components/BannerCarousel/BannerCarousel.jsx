import Carousel from "../Carousel/Carousel";
import "./BannerCarousel.css";

function BannerCarousel() {
  return (
    <div className="bannerContainer">
      <div className="bannerInfo">
        <h2 className="bannerTitle">NeoFuture Collection</h2>
        <p className="bannerParrafo">
          “In the present, we weave the fabric of the future, threading
          innovation into every stitch. Our futuristic fashion store is not just
          about clothing, it’s about envisioning tomorrow’s world today. With
          android-inspired designs and cyberpunk aesthetics, we’re not just
          creating a wardrobe for the future - we’re tailoring a new reality.”
        </p>
      </div>
      <Carousel />
    </div>
  );
}

export default BannerCarousel;
