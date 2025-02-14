import React from "react";
import "../styles/menu.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import biryaniImg from "../assets/images/biryanirice.png";
import gobiImg from "../assets/images/gobi.png";
import pastaImg from "../assets/images/Pasta.jpg";
import sweetImg from "../assets/images/sweet.png";
import iceCreamImg from "../assets/images/icecream.png";
import mocktailImg from "../assets/images/Mocktail.jpg";

const Menu = () => {
  const menuItems = [
    { name: "Classic Gulab Jamun", price: "₹199", imgSrc: sweetImg },
    { name: "Crispy Gobi Manchurian", price: "₹349", imgSrc: gobiImg },
    { name: "Creamy Italian Pasta", price: "₹599", imgSrc: pastaImg },
    { name: "Signature Chicken Biryani", price: "₹499", imgSrc:biryaniImg  },
    { name: "Exotic Ice Cream Delight", price: "₹149", imgSrc: iceCreamImg },
    { name: "Refreshing Mocktail", price: "₹399", imgSrc: mocktailImg },
  ];

  return (
    <>
      <Header />
      <main className="menu-section">
        <div className="menu-header">
          <h1>Indulge in Our Exquisite Menu</h1>
          <p>Experience flavors crafted with passion and perfection.</p>
        </div>

        <div className="menu-list">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.imgSrc} alt={item.name} className="menu-img" />
              <div className="menu-details">
                <h2>{item.name}</h2>
                <p className="menu-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Menu;