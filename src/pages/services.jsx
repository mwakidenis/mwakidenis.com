import PageBannerDark from "@components/PageBannerDark";
import Layouts from "@layouts/Layouts";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";

import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";
import LinesIcon from "@layouts/svg-icons/Lines";

const Services = (props) => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-dark-bg">
          <PageBannerDark pageTitle={"This is <span className=\"mil-thin\">what</span><br> we do <span className=\"mil-thin\">best</span>"} breadTitle={"Services"} anchorLabel={"Our services"} anchorLink={"#services"} />

          {/* services */}
          <section id="services">
              <div className="mi-invert-fix">
                  <div className="container mil-p-120-60">
                      <div className="row">
                          <div className="col-lg-5">

                              <div className="mil-lines-place mil-light">
                                <LinesIcon />
                              </div>

                          </div>
                          <div className="col-lg-7">
                              <div className="row">
                                  {props.services.map((item, key) => (
                                  <div className="col-md-6 col-lg-6" key={`services-item-${key}`}>
                                      <Link href={`/services/${item.id}`} className={key%2 == 0 ? "mil-service-card-lg mil-more mil-accent-cursor mil-offset" : "mil-service-card-lg mil-more mil-accent-cursor"}>
                                          <h4 className="mil-muted mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : item.preview_title}} />
                                          <p className="mil-descr mil-light-soft mil-up mil-mb-30">{item.short}</p>
                                          <ul className="mil-service-list mil-light mil-mb-30">
                                            {item.list.items.slice(0, 4).map((list_item, list_key) => (
                                            <li className="mil-up" key={`services-item-${key}-list-${list_key}`}>{list_item.label}</li>
                                            ))}
                                          </ul>
                                          <div className="mil-link mil-accent mil-arrow-place mil-up">
                                              <span>Read more</span>
                                              <ArrowIcon />
                                          </div>
                                      </Link>
                                  </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
      {/* services end */}

      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}