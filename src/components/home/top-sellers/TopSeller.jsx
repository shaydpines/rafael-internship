import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

export default function TopSeller({ topSeller }) {
  return (
    <li>
      <div className="author_list_pp">
        <Link to={`/author/${topSeller.authorId}`}>
          <img
            data-aos="flip-up"
            data-aos-duration="200"
            data-aos-easing="ease-in-out"
            className="lazy pp-author"
            src={topSeller.authorImage}
            alt=""
          />
          <FaCheck className="author_checkmark" />
        </Link>
      </div>
      <div className="author_list_info">
        <Link to={`/author/${topSeller.authorId}`}>{topSeller.authorName}</Link>
        <span>{topSeller.price} ETH</span>
      </div>
    </li>
  );
}
