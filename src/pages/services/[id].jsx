import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";

import { useEffect } from "react";

import { Accordion } from "../../common/utilits";

import Link from "next/link";

import { getAllServicesIds, getServiceData, getRelatedServices } from "@library/services";

import PricingSection from "@components/sections/Pricing";
import RelatedServices from "@components/sections/RelatedServices";

const ServiceDetail = ( { data, related } ) => {
  const postData = data;

  useEffect(() => {
    Accordion();
  }, []);

  return (
    <Layouts>
      <PageBanner pageTitle={postData.introTitle} breadTitle={postData.title} anchorLabel={"About service"} anchorLink={"#service"} />

      {/* service */}
      <section id="service">
          <div className="container mil-p-120-90">
              <div className="row justify-content-between">
                  <div className="col-lg-4 mil-relative mil-mb-90">

                      <h4 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : postData.description.title}} />
                      <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : postData.description.content}} />
                      <div className="mil-up">
                          <Link href={postData.description.button.link} className="mil-link mil-dark mil-arrow-place">
                              <span>{postData.description.button.label}</span>
                          </Link>
                      </div>

                  </div>
                  <div className="col-lg-6">
                  {postData.list != undefined &&
                  <>
                      {postData.list.items.map((item, key) => (
                      <div className="mil-accordion-group mil-up" key={`service-list-${key}`}>
                          <div className="mil-accordion-menu">

                              <p className="mil-accordion-head">{item.label}</p>

                              <div className="mil-symbol mil-h3">
                                  <div className="mil-plus">+</div>
                                  <div className="mil-minus">-</div>
                              </div>

                          </div>
                          <div className="mil-accordion-content mil-text" dangerouslySetInnerHTML={{__html : item.value}} />
                      </div>
                      ))}
                  </>
                  }
                  </div>
              </div>
          </div>
      </section>
      {/* service end */}
      
      <PricingSection />

      <RelatedServices services={related} />
      
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
    const paths = getAllServicesIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getServiceData(params.id)
    const relatedServices = await getRelatedServices(params.id)

    return {
      props: {
        data: postData,
        related: relatedServices
      }
    }
}