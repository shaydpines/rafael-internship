import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import NFTItem from "../UI/NFTItem";

const AuthorItems = ({ collection, author }) => {

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {collection.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <NFTItem item={item} author={author} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
