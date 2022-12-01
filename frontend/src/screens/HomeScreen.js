import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { listProducts } from "../actions/productActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const navigate = useNavigate();
  const redirectShop = () => {
    navigate("/shop");
  };
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <section id="hero">
        <h4>Trade in offer</h4>
        <h2>Super value deals</h2>

        <h1>On all products</h1>

        <p>Save more with coupons & upto 70% off!</p>

        <button onClick={redirectShop}>Shop now</button>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={require("../assets/img/features/f1.png")} alt=""></img>
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f2.png")} alt=""></img>
          <h6>Online order</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f3.png")} alt=""></img>
          <h6>Save money</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f4.png")} alt=""></img>
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f5.png")} alt=""></img>
          <h6>Happy sell</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f6.png")} alt=""></img>
          <h6>F24/7 support</h6>
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% Off</span> - All t-shirt & Acessories
        </h2>
        <button className="normal">Explore More</button>
      </section>

      <section id="product1" className="section-p1">
        <h2>Feature Product</h2>
        <p>Summer collection New Mordern Design</p>
        <div className="pro-container">
          {products.slice(0, 8).map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy deal</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The beest classNameic dess is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Spring/summer</h4>
          <h2>Upcoming season</h2>
          <span>The beest classNameic dess is on sale at cara</span>
          <button className="white">Collection</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection - 50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW FOOTWARE COLLECTION</h2>
          <h3>Winter Collection - 50% OFF</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>T-SHIRT</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomeScreen;
