import React from "react";
import Link from "next/link";
import LinesIcon from "@layouts/svg-icons/Lines";

const ProjectsGrid = ({ projects, columns }) => {
    const projectRows = [];

    for (var i = 0; i < projects.length; i += 3 ) {
        projectRows.push(projects.slice(i, 3 + i));
    }
    
    const renderProjectColumnClass = (row_key, key, element) => {
        let classNameValue = [];

        if ( row_key%2 == 0 ) {
            if ( key%2 == 0 ) {
                if( (key+1)%3 == 0) {
                    classNameValue['column'] = "col-lg-12";
                    classNameValue['item'] = "mil-portfolio-item mil-more mil-mb-60";
                    classNameValue['image'] = "mil-cover";
                } else {
                    classNameValue['column'] = "col-lg-6";
                    classNameValue['item'] = "mil-portfolio-item mil-more mil-mb-60";
                    classNameValue['image'] = "mil-cover mil-scale";
                }
            } else {
                classNameValue['column'] = "col-lg-5";
                classNameValue['item'] = "mil-portfolio-item mil-more mil-parallax mil-mb-60";
                classNameValue['image'] = "mil-cover";
            }
        } else {
            if ( key%2 == 0 ) {
                if( (key+1)%3 == 0) {
                    classNameValue['column'] = "col-lg-12";
                    classNameValue['item'] = "mil-portfolio-item mil-more mil-mb-60";
                    classNameValue['image'] = "mil-cover";
                } else {
                    classNameValue['column'] = "col-lg-5";
                    classNameValue['item'] = "mil-portfolio-item mil-more mil-parallax mil-mb-60";
                    classNameValue['image'] = "mil-cover";
                }
            } else {
                classNameValue['column'] = "col-lg-6";
                classNameValue['item'] = "mil-portfolio-item mil-more mil-mb-60";
                classNameValue['image'] = "mil-cover mil-scale";
            }
        }

        if ( element == 'image' ) {
            return classNameValue['image'];
        } else if ( element == 'item' ) {
            return classNameValue['item'];
        } else {
            return classNameValue['column'];
        }
    }

    return (
      <>
        {/* portfolio */}
        <section id="portfolio">
            <div className="container mil-portfolio mil-p-120-60">

                <div className="mil-lines-place"><LinesIcon /></div>
                <div className="mil-lines-place mil-lines-long"><LinesIcon /></div>

                <div className="row justify-content-between align-items-end">
                    {projectRows.map((row, row_key) => (
                    <React.Fragment key={`projects-row-${row_key}`}>
                    {row.map((item, key) => (
                    <div className={renderProjectColumnClass(row_key, key, 'column')} key={`projects-item-${key}`}>

                        <Link href={`/projects/${item.id}`} className={renderProjectColumnClass(row_key, key, 'item')} data-value-1="-30" data-value-2="0">
                            <div className="mil-cover-frame mil-hori mil-up">
                                <div className={renderProjectColumnClass(row_key, key, 'image')} data-value-1="1.2" data-value-2="1">
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
export default ProjectsGrid;
  