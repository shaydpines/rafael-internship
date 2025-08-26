import React from "react";
import NFTItem from "../UI/NFTItem";
import NFTSkeleton from "../UI/NFTSkeleton";

const AuthorItems = ({ collection, loading }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading
            ? new Array(8).fill(0).map((_, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <NFTSkeleton />
                </div>
              ))
            : collection.map((item, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <NFTItem item={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
