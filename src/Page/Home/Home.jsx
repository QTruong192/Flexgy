import React from "react";
import SlideShow from "../../component/SlideShow/SlideShow";
import products from "../../assets/dataTest/product";
import PaginatedList from "../components/PaginatedList/PaginatedList";
import "./Home.scss";
import Community from "../../component/Community/Community";

const Home = () => {
  const itemsPerPage = 5;

  const bestSellers = products.filter((product) => product.type === "polo");
  const saleProducts = [...products].sort((a, b) => b.price - a.price);
  const ravingProducts = [...products].sort((a, b) => b.rate - a.rate);

  return (
    <>
      <SlideShow />
      <div className="best_seller">
        <PaginatedList
          title="Best Sellers"
          productList={bestSellers}
          itemsPerPage={itemsPerPage}
        />
      </div>

      <div className="sale_off">
        <PaginatedList
          title="Sale Products"
          productList={saleProducts}
          itemsPerPage={itemsPerPage}
        />
      </div>
      <div className="categories">
        <div className="box_container cate_one">
          <img
            className="image_left"
            src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0707%2Fr877398_1296x729_16%2D9.jpg"
            alt=""
          />
          <button className="btn_left">New arival</button>
        </div>
        <div className="box_container cate_two">
          <img
            className="image_right"
            src="https://ss-images.saostar.vn/w1200/pc/1608619569329/eminem-review(1).jpg"
            alt=""
          />
          <button className="btn_right">Beanie</button>
        </div>
      </div>
      <div className="raving">
        <PaginatedList
          title="Our Crew is Rateving"
          productList={ravingProducts}
          itemsPerPage={itemsPerPage}
        />
      </div>
      <Community/>
    </>
  );
};

export default Home;
