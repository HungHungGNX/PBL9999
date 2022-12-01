import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutScreen = () => {
  return (
    <div>
      <Header />
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Read All cáe studies our products</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={require("../assets/img/about/a6.jpg")} alt=""></img>
        <div>
          <h2 className="who-we-are">Who We Are?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            quibusdam veniam eos rem provident possimus mollitia ullam, officia
            earum aliquid nesciunt sed, commodi et distinctio ea vitae, minus
            dignissimos nemo?
          </p>
          <abbr title="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius
            aspernatur nihil consequatur qui saepe{" "}
          </abbr>
          <br></br>
          <br></br>
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius
            aspernatur nihil consequatur qui saepe
          </marquee>
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Download Our <a href="">App</a>{" "}
        </h1>
        <div className="video">
          <video
            autoPlay
            muted
            loop
            src={require("../assets/img/about/1.mp4")}
          ></video>
        </div>
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

      <Footer />
    </div>
  );
};

export default AboutScreen;
