import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Gallery.css";
import "../styles/global.css";

import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import surprise from "../assets/images/surprise.jpg";
import anniversary from "../assets/images/aniversary.jpg";
import birthday from "../assets/images/birthday.jpg";

const GalleryItem = ({ image, altText }) => {
  return (
    <div className="gallery-item">
      <img src={image} alt={altText} />
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <Header />

      <section className="gallery-hero">
        <h1>Discover Our Culinary Art</h1>
        <p>Indulge in the exquisite flavors and stunning presentations from our kitchen.</p>
      </section>

      <div className="gallery-section">
        <h2 className="gallery-heading">Our Gallery</h2>
        <div className="gallery-grid">
          <GalleryItem image={image1} altText="Delicious Plated Dish" />
          <GalleryItem image={image2} altText="Gourmet Cuisine" />
          <GalleryItem image={image3} altText="Signature Dessert" />
          <GalleryItem image={image4} altText="Refreshing Beverages" />
        </div>
        <div className="gallery-grid">
          <GalleryItem image={surprise} altText="Surprise Celebration" />
          <GalleryItem image={image5} altText="Tasty Appetizers" />
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;