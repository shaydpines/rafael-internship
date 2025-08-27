import React, { useEffect, useState } from "react";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  let params = useParams();
  const [author, setAuthor] = useState([]);
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [following, setFollowing] = useState(false);

  async function getData() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${params.authorId}`
    );
    setAuthor(data);
    setCollection(data.nftCollection);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage={`url(${collection[0]?.nftImage}) top`}
          style={{ background: `url(${collection[0]?.nftImage}) top` }}
        >
          {loading && (
            <Skeleton width="100%" height="250px" borderRadius="0px" />
          )}
        </section>
        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      {loading ? (
                        <Skeleton
                          width="100px"
                          height="100px"
                          borderRadius="50%"
                          style={{ marginBottom: "12px" }}
                        />
                      ) : (
                        <img src={author.authorImage} alt="" />
                      )}
                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        {loading ? (
                          <>
                            <Skeleton
                              width="180px"
                              height="20px"
                              borderRadius="4px"
                              style={{ marginBottom: "8px" }}
                            />
                            <Skeleton
                              width="120px"
                              height="16px"
                              borderRadius="4px"
                              style={{ marginBottom: "6px" }}
                            />
                            <Skeleton
                              width="200px"
                              height="16px"
                              borderRadius="4px"
                              style={{ marginBottom: "10px" }}
                            />
                          </>
                        ) : (
                          <>
                            <h4>
                              {author.authorName}
                              <span className="profile_username">
                                @{author.tag}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {author.address}
                              </span>
                              <button id="btn_copy" title="Copy Text">
                                Copy
                              </button>
                            </h4>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    {following ? (
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          {author.followers + 1} followers
                        </div>
                        <Link
                          to="#"
                          className="btn-main"
                          onClick={() => setFollowing(false)}
                        >
                          Unfollow
                        </Link>
                      </div>
                    ) : loading ? (
                      <>
                        <Skeleton
                          width="100px"
                          height="16px"
                          borderRadius="4px"
                          style={{ marginBottom: "10px" }}
                        />
                        <Skeleton
                          width="80px"
                          height="30px"
                          borderRadius="6px"
                        />
                      </>
                    ) : (
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          {author.followers} followers
                        </div>
                        <Link
                          to="#"
                          className="btn-main"
                          onClick={() => setFollowing(true)}
                        >
                          Follow
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems
                    author={author}
                    collection={collection}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
