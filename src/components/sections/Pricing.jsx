import React from "react";
import Data from "@data/sections/pricing.json";
import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";

const PricingSection = () => {
    
    return (
        <>
        {/* prices */}
        <section className="mil-dark-bg">
            <div className="mi-invert-fix">
                <div className="container mil-p-120-120">
                    <div className="mil-center">
                        <h2 className="mil-muted mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                        <p className="mil-light-soft mil-up mil-mb-120" dangerouslySetInnerHTML={{__html : Data.description}} />
                    </div>

                    {Data.items.map((item, key) => (
                    <Link href={item.link} className="mil-price-card mil-choose mil-accent-cursor mil-up" key={`pricing-item-${key}`}>
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="mil-price-number mil-mb-30">
                                    <span className="mil-muted mil-thin">{item.price.symbol}</span>
                                    <span className="mil-accent">{item.price.value}</span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{__html : item.title}} />
                            </div>
                            <div className="col-lg-4">
                                <p className="mil-light-soft mil-mb-30" dangerouslySetInnerHTML={{__html : item.text}} />
                            </div>
                            <div className="col-lg-2">
                                <div className="mil-adaptive-right mil-mb-30">
                                    <div className="mil-button mil-icon-button-sm mil-arrow-place">
                                        <ArrowIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}

                    <div className="mil-center mil-mt-60">
                        <Link href={Data.button.link} className="mil-button  mil-arrow-place">
                            <span>{Data.button.label}</span>
                            <ArrowIcon />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
        {/* prices end */}
        </>
    );
};

export default PricingSection;