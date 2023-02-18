import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "BOTAK",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis culpa amet velit voluptatibus quae quam. Quas obcaecati perspiciatis ad reprehenderit corporis repellendus dignissimos exercitationem at? Quasi nihil cum voluptates magnam?",
  },
  {
    avatar: AVTR2,
    name: "Marcus Aurelius",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis culpa amet velit voluptatibus quae quam. Quas obcaecati perspiciatis ad reprehenderit corporis repellendus dignissimos exercitationem at? Quasi nihil cum voluptates magnam?",
  },
  {
    avatar: AVTR3,
    name: "Zeus",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis culpa amet velit voluptatibus quae quam. Quas obcaecati perspiciatis ad reprehenderit corporis repellendus dignissimos exercitationem at? Quasi nihil cum voluptates magnam?",
  },
  {
    avatar: AVTR4,
    name: "Poseidon",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis culpa amet velit voluptatibus quae quam. Quas obcaecati perspiciatis ad reprehenderit corporis repellendus dignissimos exercitationem at? Quasi nihil cum voluptates magnam?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
