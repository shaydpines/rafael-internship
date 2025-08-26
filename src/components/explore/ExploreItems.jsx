import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NFTItem from "../UI/NFTItem";
import NFTSkeleton from "../UI/NFTSkeleton";

const ExploreItems = () => {
  const [exploreItems, setExploreItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState();

  async function getData(value) {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=` +
        value
    );
    setExploreItems(data);
    setLoading(false);
  }

  useEffect(() => {
    renderData("")
  }, []);

  function renderData(value) {
    setDisplayCount(8);
    setLoading(true);
    getData(value);
  }

  function loadMore() {
    setDisplayCount(displayCount + 4);
  }

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={(event) => renderData(event.target.value)}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading
        ? new Array(8).fill(0).map((_, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <NFTSkeleton />
            </div>
          ))
        : exploreItems.slice(0, displayCount).map((item, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <NFTItem item={item} />
            </div>
          ))}
      {displayCount >= exploreItems.length ? (
        <></>
      ) : (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={loadMore}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
