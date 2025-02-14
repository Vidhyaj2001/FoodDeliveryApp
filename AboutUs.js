import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AboutUs.css';
import '../styles/global.css';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <section className="hero1">
                <h1>SAVOR THE MOMENTS, ONE BITE AT A TIME</h1>
                <p>Exceptional flavors, timeless experiences</p>
            </section>
            
            <section className="about-us">
                <div className="about-content">
                    <h2>Who We Are</h2>
                    <p>
                        Welcome to our Restaurant, where culinary passion meets innovation! Situated in the 
                        vibrant city of Bangalore, we take pride in curating an exquisite dining experience that 
                        blends authenticity with modern flair. Since our inception, we have been dedicated to 
                        crafting dishes that ignite the senses and create unforgettable memories.
                    </p>
                    
                    <h2>Our Journey</h2>
                    <p>
                        What started as a humble vision has transformed into a destination for food lovers seeking 
                        the perfect fusion of tradition and contemporary taste. Founded by a group of culinary 
                        enthusiasts,   this Restaurant is built on the principles of quality, creativity, and a 
                        relentless pursuit of flavor perfection. Our team of chefs passionately combines locally 
                        sourced ingredients with global influences to craft dishes that are both innovative and comforting.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};
export default AboutUs;