import React from "react";
import Title from "./header/Title";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Products from "./products/Products"
import Info from "./info/Info"

function App() {
    return (
        <div>
            <Title/>
            <Navbar/>
            <Footer/>
            <Products/>
            <Info/>
        </div>
    )
}

export default App;
