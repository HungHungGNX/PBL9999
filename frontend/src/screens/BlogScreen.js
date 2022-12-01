import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BlogScreen = () => {
  return (
    <div>
      <Header />

      <section id="page-header" className="blog-header">
        <h2>#ReadMore</h2>
        <p>Read All cáe studies our products</p>
      </section>
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={require("../assets/img/blog/b1.jpg")} alt=""></img>
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-up Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              omnis officia numquam sequi praesentium reiciendis ad atque,
              inventore, cumque soluta odio rerum architecto nisi expedita
              mollitia quod dolorem earum qui.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={require("../assets/img/blog/b1.jpg")} alt=""></img>
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-up Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              omnis officia numquam sequi praesentium reiciendis ad atque,
              inventore, cumque soluta odio rerum architecto nisi expedita
              mollitia quod dolorem earum qui.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={require("../assets/img/blog/b1.jpg")} alt=""></img>
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-up Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              omnis officia numquam sequi praesentium reiciendis ad atque,
              inventore, cumque soluta odio rerum architecto nisi expedita
              mollitia quod dolorem earum qui.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
      </section>
      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default BlogScreen;
