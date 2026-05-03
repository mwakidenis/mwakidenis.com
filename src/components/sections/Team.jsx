import Data from "@data/sections/team.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import LinesIcon from "@layouts/svg-icons/Lines";

const TeamSection = () => {
  return (
    <>
        {/* team */}
        <section>
            <div className="container mil-p-120-30">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 col-xl-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />
                            
                            <div className="mil-up"><Link href={Data.button.link} className="mil-button mil-arrow-place mil-mb-60"><span>{Data.button.label}</span><ArrowIcon /></Link></div>

                            <h4 className="mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                        </div>

                    </div>
                    <div className="col-lg-6">

                        <div className="mil-team-list">
                            <div className="mil-lines-place">
                                <LinesIcon />
                            </div>

                            <div className="row mil-mb-60">
                                <div className="col-sm-6">
                                    
                                    {Data.col1_items.map((item, key) => (

                                    <div key={`services1-item-${key}`} className="mil-team-card mil-up mil-mb-30">
                                        <img src={item.image} alt={item.name} />
                                        <div className="mil-description">
                                            <div className="mil-secrc-text">
                                                <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                                <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                                <ul className="mil-social-icons mil-center">
                                                    {item.social.map((social, key2) => (
                                                    <li key={`services1-item${key}-social-${key2}`}><a href={social.link} target="_blank" className="social-icon" title={social.title}> <i className={social.icon} /></a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    ))}

                                </div>
                                <div className="col-sm-6">

                                    <p className="mil-mobile-hidden mil-text-sm mil-mb-30" style={{"height": "30px"}} dangerouslySetInnerHTML={{__html : Data.note}} />
                                    
                                    {Data.col2_items.map((item, key) => (
                                    
                                    <div key={`services2-item-${key}`} className="mil-team-card mil-up mil-mb-30">
                                        <img src={item.image} alt={item.name} />
                                        <div className="mil-description">
                                            <div className="mil-secrc-text">
                                                <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                                <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                                <ul className="mil-social-icons mil-center">
                                                    {item.social.map((social, key2) => (
                                                    <li key={`services2-item${key}-social-${key2}`}><a href={social.link} target="_blank" className="social-icon" title={social.title}> <i className={social.icon} /></a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    ))}

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
        {/* team end */}
    </>
  );
};

export default TeamSection;