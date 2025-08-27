import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";

export default function NFTItem({ item, author }) {
  return (
    <div className="nft__item">
      <div className="author_list_pp">
        <Link
          to={`/author/${item.authorId}`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={`Author: ${author && author.authorName}`}
        >
          <img
            data-aos="flip-up"
            data-aos-duration="200"
            data-aos-easing="ease-in-out"
            className="lazy"
            src={author ? author.authorImage : item.authorImage}
            alt=""
          />
          <FaCheck className="author_checkmark" />
        </Link>
      </div>
      {item.expiryDate ? <Countdown expiration={item.expiryDate} /> : <></>}
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

        <Link to={`/item-details/${item.nftId}`}>
          <img
            src={item.nftImage}
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            className="lazy nft__item_preview"
            alt=""
          />
        </Link>
      </div>
      <div className="nft__item_info">
        <Link to={`/item-details/${item.nftId}`}>
          <h4
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="200"
            data-aos-easing="ease-in-out"
            data-aos-offset="60"
          >
            {item.title}
          </h4>
        </Link>
        <div
          className="nft__item_price"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="200"
          data-aos-easing="ease-in-out"
          data-aos-offset="60"
        >
          {item.price} ETH
        </div>
        <div
          className="nft__item_like"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          data-aos-offset="60"
        >
          <i className="fa fa-heart"></i>
          <span>{item.likes}</span>
        </div>
      </div>
    </div>
  );
}
