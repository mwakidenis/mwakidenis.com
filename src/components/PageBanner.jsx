import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
import AppData from "@data/app.json";

import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const PageBanner = ({ pageTitle, breadTitle, anchorLabel, anchorLink = 0, paddingBottom, align, headingSize = 1 }) => {
  const { asPath } = useRouter();
  let clearBreadTitle;

  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  const headTitle = `${AppData.settings.siteName} - ${clearBreadTitle}`;
  
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      
      {/* banner */}
      <div className={paddingBottom ? "mil-inner-banner mil-p-0-120" : "mil-inner-banner"}>
        <div className={align == "center" ? "mil-banner-content mil-center mil-up" : "mil-banner-content mil-up"}>
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"><Pentagon /></div>
          </div>
          <div className="container">
            <ul className={align == "center" ? "mil-breadcrumbs mil-center mil-mb-60" : "mil-breadcrumbs mil-mb-60"}>
              <li><Link href="/">Homepage</Link></li>
              {asPath.indexOf('/blog/') != -1 &&
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              }
              {asPath.indexOf('/projects/') != -1 &&
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              }
              {asPath.indexOf('/services/') != -1 &&
              <li>
                <Link href="/services">Services</Link>
              </li>
              }
              <li><a dangerouslySetInnerHTML={{__html : clearBreadTitle}} /></li>
            </ul>
            {headingSize == 1 &&
            <h1 className="mil-mb-60" dangerouslySetInnerHTML={{__html : pageTitle}} />
            }
            {headingSize == 2 &&
            <h2 className={anchorLink != 0 ? "mil-mb-60" : ""} dangerouslySetInnerHTML={{__html : pageTitle}} />
            }
            {anchorLink != 0 &&
            <a href={anchorLink} className="mil-link mil-dark mil-arrow-place mil-down-arrow">
                <span>{anchorLabel}</span>
                <ArrowIcon />
            </a>
            }
          </div>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
