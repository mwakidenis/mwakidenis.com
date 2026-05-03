import Link from "next/link";
import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageView from "@components/ImageView";

const ProjectInner4 = ({ postData, prev, next }) => {
    return (
        <>
        {/* project */}
        <section id="project">
            <div className="container mil-p-120-120">
                {typeof postData.gallery != "undefined" &&
                <>
                    {postData.gallery.enabled == 1 &&
                    <Swiper
                        {...SliderProps.milTwoSlider}
                        className="swiper-container mil-2-slider mil-up"
                    >
                        {postData.gallery.items.map((item, key) => (
                        <SwiperSlide className="swiper-slide" key={`projects-item-${key}`}>

                            <div className="mil-image-frame mil-vertical mil-drag">
                                <img src={item.image} alt={item.alt} />
                                <a data-fancybox="gallery" data-no-swup href={item.image} className="mil-zoom-btn">
                                    <img src="/img/icons/zoom.svg" alt="zoom" />
                                </a>
                            </div>

                        </SwiperSlide>
                        ))}
                    </Swiper>
                    }
                </>
                }
                {typeof postData.details != "undefined" &&
                <div className="mil-info mil-up">
                    {postData.details.map((item, key) => (
                    <div key={`project-details-item-${key}`}>{item.label} &nbsp;<span className="mil-dark">{item.value}</span></div>
                    ))}
                </div>
                }
                {typeof postData.description != "undefined" &&
                <>
                    {postData.description.enabled == 1 &&
                    <div className="row justify-content-center mil-center mil-p-120-120">
                        <div className="col-lg-8">
                            <h3 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : postData.description.title}} />
                            <div className="mil-text-lg mil-text mil-up" dangerouslySetInnerHTML={{__html : postData.description.content}} />
                        </div>
                    </div>
                    }
                </>
                }
                {typeof postData.gallery2 != "undefined" &&
                <>
                    {postData.gallery2.enabled == 1 &&
                    <>
                        {postData.gallery2.items.map((item, key) => (
                        <div className="mil-image-frame mil-horizontal mil-up mil-mb-120" key={`gallery2-item-${key}`}>
                            <img src={item.image} alt={item.alt} />
                            <a data-fancybox="gallery" data-no-swup href={item.image} className="mil-zoom-btn">
                                <img src="/img/icons/zoom.svg" alt="zoom" />
                            </a>
                        </div>
                        ))}
                    </>
                    }
                </>
                }
                <div className="mil-works-nav mil-up">
                    <Link href={(prev.id != 0 && prev.id != undefined) ? `/projects/${prev.id}` : ""} className={(prev.id != 0 && prev.id != undefined) ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled"}>
                        <span>Prev project</span>
                    </Link>
                    <Link href="/projects" className="mil-link mil-dark">
                        <span>All projects</span>
                    </Link>
                    <Link href={(next.id != 0 && next.id != undefined) ? `/projects/${next.id}` : ""} className={(next.id != 0 && next.id != undefined) ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled"}>
                        <span>Next project</span>
                    </Link>
                </div>
            </div>

            <ImageView />
        </section>
        {/* project end */}
        </>
    );
};
export default ProjectInner4;