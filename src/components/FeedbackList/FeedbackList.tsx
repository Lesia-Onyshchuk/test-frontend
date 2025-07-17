import data from "../../feedbacks.json";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import css from "./FeedbackList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Feedback {
  id: string;
  logo: string;
  width?: string;
  content: string;
  photo: string;
  name: string;
  role: string;
}

const typedData: Feedback[] = data;

const FeedbackList = () => {
  return (
    <div className={css.sliderWrapper}>
      <div className={css.sliderMask}>
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
          {typedData.map((item) => (
            <SwiperSlide key={item.id}>
              <FeedbackItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedbackList;
