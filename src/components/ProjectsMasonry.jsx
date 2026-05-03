import React from "react";
import Link from "next/link";
import LinesIcon from "@layouts/svg-icons/Lines";

const ProjectsMasonry = ({ projects }) => {
    const projectRows = [];

    for (var i = 0; i < projects.length; i += 2 ) {
        projectRows.push(projects.slice(i, 2 + i));
    }
    
    return (
      <>
        {/* portfolio */}
        <section id="portfolio">
            <div className="container mil-portfolio mil-p-120-60">

                <div className="mil-lines-place"><LinesIcon /></div>
                <div className="mil-lines-place mil-lines-long"><LinesIcon /></div>

                <div className="row justify-content-between align-items-center">
                    {projectRows.map((row, row_key) => (
                    <React.Fragment key={`projects-item-${row_key}`}>
                        {row.map((item, key) => (
                        <div className={row_key%2==0 ? key%2 == 0 ? "col-lg-5" : "col-lg-6" : key%2 == 0 ? "col-lg-6" : "col-lg-5"} key={`projects-item-${row_key}-${key}`}>

                            <Link href={`/projects/${item.id}`} className={row_key%2==0 ? key%2 == 0 ? "mil-portfolio-item mil-more mil-mb-60" : "mil-portfolio-item mil-more mil-parallax mil-mb-60" : key%2 == 0 ? "mil-portfolio-item mil-more mil-parallax mil-mb-60" : "mil-portfolio-item mil-more mil-mb-60"} data-value-1="60" data-value-2="-60">
                                <div className={row_key%2==0 ? key%2 == 0 ? "mil-cover-frame mil-vert mil-up" : "mil-cover-frame mil-hori mil-up" : key%2 == 0 ? "mil-cover-frame mil-hori mil-up" : "mil-cover-frame mil-vert mil-up"}>
                                    <div className="mil-cover">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">{item.category}</div>
                                        <div className="mil-label mil-upper">{item.date}</div>
                                    </div>
                                    <h4 className="mil-up">{item.title}</h4>
                                </div>
                            </Link>

                        </div>
                        ))}
                    </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
        {/* portfolio end */}
      </>
    );
};
export default ProjectsMasonry;
  