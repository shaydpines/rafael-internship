import React from "react";
import NFTItem from "../UI/NFTItem";
import NFTSkeleton from "../UI/NFTSkeleton";
import ReusableSwiper from "../UI/ReusableSwiper";

const NewItems = () => {
  return (
    <ReusableSwiper
      title="New Items"
      endpoint="https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
      ItemComponent={NFTItem}
      SkeletonComponent={NFTSkeleton}
    />
  );
};

export default NewItems;
