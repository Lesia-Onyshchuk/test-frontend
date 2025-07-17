import data from "../../feedbacks.json";
import FeedbackItem from "../FeedbackItem/FeedbackItem.jsx";
import css from "./FeedbackList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeedbackList = () => {
  return (
    <div className={css.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <FeedbackItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackList;
