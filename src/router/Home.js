import React from "react";
import HeroSection from "../section/HeroSection";
import Services from "../component/Services";
import Trusted from "../component/Trusted";
import ProductList from "../product/ProductList";

const Home = () => {
    return (
        <div style={{ marginTop: 80 }}>
            <HeroSection title={{name: 'Shoping Store'}} />
            <ProductList />
            <Services />
            <Trusted />
            
        </div>
    )
};

export default Home;