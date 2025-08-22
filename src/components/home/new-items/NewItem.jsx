import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function NewItem({ item }) {
  const [countdown, setCountdown] = useState()

  const calcCountdown = (expiration) => {
    const remainingTime = expiration - Date.now()
    setCountdown(remainingTime > 0 ? remainingTime : 0);
  }

  useEffect(() => {
    if (!item.expiryDate) return;
    calcCountdown(item.expiryDate)
    const intervalId = setInterval(() => {
        calcCountdown(item.expiryDate)
      }, 1000);

      return () => clearInterval(intervalId)
  }, [])

  const formatCountdown = (ms) => {
    if (ms === null) return "";

    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours}h ${minutes}m ${seconds}s`;
    };

  return (
    <div className="px-1">
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to={`/author/${item.authorId}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Creator: ${item.authorName}`}
          >
            <img className="lazy" src={item.authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        {item.expiryDate? <div className="de_countdown">{formatCountdown(countdown)}</div> : <></>}
        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <Link to="/item-details">
            <img
              src={item.nftImage}
              className="lazy nft__item_preview"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>{item.title}</h4>
          </Link>
          <div className="nft__item_price">{item.price} ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
