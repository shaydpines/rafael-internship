import React from "react";
import HotCollection from "./hot-collections/HotCollection";
import HotCollectionsSkeleton from "./hot-collections/HotCollectionSkeleton";
import ReusableSwiper from "../UI/ReusableSwiper";

const HotCollections = () => {
  return (
    <ReusableSwiper
      title="Hot Collections"
      endpoint="https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
      ItemComponent={HotCollection}
      SkeletonComponent={HotCollectionsSkeleton}
    />
  );
};

export default HotCollections;
