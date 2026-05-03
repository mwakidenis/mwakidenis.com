import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect } from "react";

import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const ProjectsSlider = ( { projects } ) => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

  return (
    <>
        {/* portfolio */}
        <section className="mil-portfolio-slider-frame">
            <div className="mil-animation-frame">
                <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="1" data-value-2="2" style={{"top": "-60px", "right": "-4px"}}>
                    <Pentagon />
                </div>
            </div>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-9">
                        <Swiper
                            {...SliderProps.milPortfolioSlider}
                            className="swiper-container mil-portfolio-slider mil-up"
                        >
                            {projects.map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={`projects-item-${key}`}>
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">{item.category}</div>
                                            <div className="mil-label mil-upper">{item.date}</div>
                                        </div>
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`/projects/${item.id}`} className="mil-button mil-arrow-place">
                                            <span>View Project</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-lg-3 mil-relative">
                        <div className="mil-portfolio-nav">
                            <div className="mil-portfolio-btns-frame">
                                <div className="swiper-portfolio-pagination" />
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-arrow mil-prev mil-portfolio-prev mil-arrow-place">
                                        <ArrowIcon />
                                    </div>
                                    <div className="mil-slider-arrow mil-portfolio-next mil-arrow-place">
                                        <ArrowIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* portfolio end */}
    </>
  );
};
export default ProjectsSlider;
