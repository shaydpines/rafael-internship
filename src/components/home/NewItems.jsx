import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import NFTItem from "../UI/NFTItem";
import NFTSkeleton from "../UI/NFTSkeleton";

const NewItems = ({ sliderSettings }) => {
  const [newItems, setNewItems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
    );
    setNewItems(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...sliderSettings}>
            {loading
              ? new Array(2).fill(0).map((_, index) => (
                  <div key={index} className="px-1">
                    <NFTSkeleton />
                  </div>
                ))
              : newItems.map((item, index) => (
                  <div key={index} className="px-1">
                    <NFTItem item={item} />
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
