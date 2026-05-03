import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/testimonial';
import ArrowIcon from "@layouts/svg-icons/Arrow";

const TestimonialSlider = () => {
  return (
    <>
      {/* reviews */}
      <section className="mil-soft-bg">
          <div className="container mil-p-120-120">

              <div className="row">
                  <div className="col-lg-10">
                      <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                  </div>
              </div>

              <h2 className="mil-center mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />

              <div className="mil-revi-pagination mil-up mil-mb-60" />

              <div className="row mil-relative justify-content-center">
                  <div className="col-lg-8">

                      <div className="mil-slider-nav mil-soft mil-reviews-nav mil-up">
                          <div className="mil-slider-arrow mil-prev mil-revi-prev mil-arrow-place">
                            <ArrowIcon />
                          </div>
                          <div className="mil-slider-arrow mil-revi-next mil-arrow-place">
                            <ArrowIcon />
                          </div>
                      </div>

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="mil-quote-icon mil-up">
                          <path d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z" fill="#000000" />
                      </svg>

                      <Swiper
                        {...SliderProps.milReviewsSlider}
                        className="swiper-container mil-reviews-slider"
                      >
                        {Data.items.map((item, key) => (
                        <SwiperSlide className="swiper-slide" key={`testimonial-slider-item-${key}`}>
                          <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                              <h5 className="mil-up mil-mb-10">{item.name}</h5>
                              <p className="mil-mb-5 mil-upper mil-up mil-mb-30">{item.role}</p>
                              <p className="mil-text-xl mil-up">{item.text}</p>
                          </div>
                        </SwiperSlide>
                        ))}
                      </Swiper>

                  </div>
              </div>

          </div>
      </section>
      {/* reviews end */}
    </>
  );
};
export default TestimonialSlider;
