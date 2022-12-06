import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";
import Categories from './CategoriesList/Categories';
import ContactUs from './OtherComponents/ContactUs';
import About from './OtherComponents/About';
import MilkProducts from './MilkProducts/MilkProducts';
import MeatProducts from './MeatProducts/MeatProducts';
import Fishes from './FishesProducts/Fishes';
import Pastries from './PastriesProducts/Pastries';
import HomePage from './OtherComponents/HomePage'
import MyCart from './MyCart/MyCart'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} >
                    <Route path="/HomePage" element={<HomePage/>} />
                    <Route path="/Categories" element={<Categories/>} />
                    <Route path="/ContactUs" element={<ContactUs/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/Milk_products" element={<MilkProducts/>} />
                    <Route path="/Meat_products" element={<MeatProducts/>} />
                    <Route path="/Fishes" element={<Fishes/>} />
                    <Route path="/Pastries" element={<Pastries/>} />
                    <Route path="/MyCart" element={<MyCart/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>);