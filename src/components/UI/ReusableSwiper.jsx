import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import SwiperNavButton from "./SwiperNavButton";



const ReusableSwiper = ({
  title,
  endpoint,
  ItemComponent,
  SkeletonComponent,
  slidesPerView = { 0: 1, 480: 2, 768: 3, 1024: 4 },
  skeletonCount = 8,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  async function getData() {
    try {
      const { data } = await axios.get(endpoint);
      setData(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, [endpoint]);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return (
    <section className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>{title}</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="swiper-container relative">
            <Swiper
              modules={[Navigation]}
              loop={data.length > 4}
              spaceBetween={24}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={Object.fromEntries(
                Object.entries(slidesPerView).map(([bp, spv]) => [
                  bp,
                  { slidesPerView: spv },
                ])
              )}
            >
              {loading
                ? new Array(skeletonCount).fill(0).map((_, i) => (
                    <SwiperSlide key={`skeleton-${i}`}>
                      <SkeletonComponent />
                    </SwiperSlide>
                  ))
                : data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ItemComponent item={item} />
                    </SwiperSlide>
                  ))}
            </Swiper>
            <SwiperNavButton ref={prevRef} direction="left" />
            <SwiperNavButton ref={nextRef} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableSwiper;
