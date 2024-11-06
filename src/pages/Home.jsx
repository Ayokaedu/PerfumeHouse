import React from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import AllPerfumes from "../components/AllPerfumes";
const Home = () => {
  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8">
            <AllPerfumes />
          </div>
          <div className="col-lg-3">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
