import React, { forwardRef } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const SwiperNavButton = forwardRef(({ direction = "left" }, ref) => {
  const isLeft = direction === "left";

  return (
    <button
      ref={ref}
      className={`custom-swiper-btn ${isLeft ? "left-swiper" : "right-swiper"}`}
    >
      {isLeft ? <GrFormPrevious size={24} /> : <GrFormNext size={24} />}
    </button>
  );
});

export default SwiperNavButton;
