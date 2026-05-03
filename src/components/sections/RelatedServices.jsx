import Data from "@data/sections/related-services.json";
import Link from "next/link";

const RelatedServicesSection = ( { services } ) => {

    return (
        <>
            {/* related services */}
            <section>
                <div className="container mil-p-120-90">
                    <div className="row align-items-center mil-mb-30">
                        <div className="col-lg-6 mil-mb-30">
                            <h3 className="mil-up">{Data.title}</h3>
                        </div>
                        <div className="col-lg-6 mil-mb-30">
                            <div className="mil-adaptive-right mil-up">
                                <a href={Data.button.link} className="mil-link mil-dark mil-arrow-place">
                                    <span>{Data.button.label}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {services.slice(0, Data.numOfItems).map((item, key) => (
                        <div className="col-lg-4" key={`services-${key}`}>

                            <Link href={`/services/${item.id}`} className="mil-service-card-lg mil-other-card mil-more mil-mb-30">
                                <h4 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : item.preview_title}} />
                                <p className="mil-descr mil-up mil-mb-30">{item.short}</p>
                                <ul className="mil-service-list mil-dark mil-mb-30">
                                    {item.list.items.map((list_item, list_key) => (
                                    <li className="mil-up" key={`services-${key}-list-${list_key}`}>{list_item.label}</li>
                                    ))}
                                </ul>
                                <div className="mil-link mil-dark mil-arrow-place mil-up">
                                    <span>Read more</span>
                                </div>
                            </Link>

                        </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* related services end */}
        </>
    );
};

export default RelatedServicesSection;