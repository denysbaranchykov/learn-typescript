import React, {useEffect} from 'react';
import './App.css';
import Product from "./Product";
import "./loading.gif";
import {Route, Routes} from "react-router-dom";
import ProductsPages from "./pages/ProductsPages";
import AboutProducts from "./pages/AboutProducts";
import Navigation from "./Navigation";


function App() {

    return (
        <>
        <Navigation />
        <Routes>
            <Route
                path='/'
                element={<ProductsPages />}
            />
            <Route
                path='/about'
                element={<AboutProducts />}
            />
        </Routes>
        </>
    )
}

export default App;
