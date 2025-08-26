import React from "react";
import Skeleton from "../UI/Skeleton";

export default function ItemDetailsSkeleton() {
    return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <Skeleton width="100%" height="400px" borderRadius="10px" />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <Skeleton
                    width="70%"
                    height="28px"
                    borderRadius="6px"
                    style={{ marginBottom: "16px" }}
                  />
                  <div className="item_info_counts" style={{ marginBottom: "20px" }}>
                    <Skeleton
                      width="60px"
                      height="16px"
                      borderRadius="4px"
                      style={{ marginRight: "12px" }}
                    />
                    <Skeleton width="40px" height="16px" borderRadius="4px" />
                  </div>
                  <Skeleton
                    width="100%"
                    height="14px"
                    borderRadius="4px"
                    style={{ marginBottom: "8px" }}
                  />
                  <Skeleton
                    width="90%"
                    height="14px"
                    borderRadius="4px"
                    style={{ marginBottom: "8px" }}
                  />
                  <Skeleton
                    width="80%"
                    height="14px"
                    borderRadius="4px"
                    style={{ marginBottom: "20px" }}
                  />
                  <div className="d-flex flex-row mb-4">
                    <div className="mr40">
                      <Skeleton
                        width="100px"
                        height="16px"
                        borderRadius="4px"
                        style={{ marginBottom: "10px" }}
                      />
                      <div className="item_author d-flex align-items-center">
                        <Skeleton
                          width="50px"
                          height="50px"
                          borderRadius="50%"
                          style={{ marginRight: "10px" }}
                        />
                        <Skeleton width="80px" height="16px" borderRadius="4px" />
                      </div>
                    </div>
                  </div>
                  <h6>Creator</h6>
                  <div className="item_author d-flex align-items-center mb-4">
                    <Skeleton
                      width="50px"
                      height="50px"
                      borderRadius="50%"
                      style={{ marginRight: "10px" }}
                    />
                    <Skeleton width="80px" height="16px" borderRadius="4px" />
                  </div>
                  <h6>Price</h6>
                  <div className="nft-item-price d-flex align-items-center">
                    <Skeleton
                      width="24px"
                      height="24px"
                      borderRadius="4px"
                      style={{ marginRight: "10px" }}
                    />
                    <Skeleton width="60px" height="20px" borderRadius="4px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    );
};