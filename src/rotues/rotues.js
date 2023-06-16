import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Home from '../components/home/home';
import Categories from '../components/Categories/Categories';
import ProductList from '../components/ProductList';
import Users from '../components/users/users';
import "../../src/App.css";
    
    const NotFound = () => {
      return <h1>Not Found</h1>;
    };

    function Ankit() {
        return (
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/categories" element={<Categories/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/productlist" element={<ProductList/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </div>
          </Router>
        );
      }
    
export default Ankit;
