import Layouts from "@layouts/Layouts";
import { getCategoryPosts } from "@library/posts";
import { getAllCategoriesIds, getCategoryData, getSortedCategoriesData } from "@library/categories";
import Date from '@library/date';
import Link from "next/link";
import PageBanner from "@components/PageBanner";
import SubscribeSection from "@components/sections/Subscribe";

const PostsDetail = ( props ) => {
  
  const postData = props.data;
  const categories = props.categories;
  const posts = props.posts;

  return (
    <Layouts>
      
      <PageBanner pageTitle={postData.introTitle} breadTitle={postData.title} anchorLabel={"Publications"} anchorLink={"#blog"} paddingBottom={1} />
      
      {/* blog */}
      <section id="blog">
          <div className="container mil-p-120-120">
              <div className="row align-items-center mil-mb-30">
                  <div className="col-lg-4 mil-mb-30">
                      <h3 className="mil-up">Other categories:</h3>
                  </div>
                  <div className="col-lg-8 mil-mb-30">
                      <div className="mil-adaptive-right mil-up">

                          <ul className="mil-category-list">
                              {categories.map((item, key) => (
                              <li key={`categories-item-${key}`}><Link href={`/blog/category/${item.id}`} className={ item.id == props.id ? "mil-active" : ""}>{item.title}</Link></li>
                              ))}
                              <li key={`categories-item-0`}><Link href="/blog">All categories</Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="row">
                  {posts.map((item, key) => (              
                  <div className="col-lg-12" key={`posts-item-${key}`}>

                      <a href={`/blog/${item.id}`} className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
                          <div className="mil-cover-frame mil-up">
                              <img src={item.image} alt={item.title} />
                          </div>
                          <div className="mil-post-descr">
                              <div className="mil-labels mil-up mil-mb-30">
                                  <div className="mil-label mil-upper mil-accent">{item.category}</div>
                                  <div className="mil-label mil-upper"><Date dateString={item.date} /></div>
                              </div>
                              <h4 className="mil-up mil-mb-30">{item.title}</h4>
                              <p className="mil-post-text mil-up mil-mb-30">{item.short}</p>
                              <div className="mil-link mil-dark mil-arrow-place mil-up">
                                  <span>Read more</span>
                              </div>
                          </div>
                      </a>

                  </div>
                  ))}
              </div>
          </div>
      </section>
      {/* blog end */}

      <SubscribeSection />

    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
    const paths = getAllCategoriesIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const categoryData = await getCategoryData(params.id)
    const categoriesData = await getSortedCategoriesData()
    const categoryPosts = await getCategoryPosts(params.id)

    return {
      props: {
        data: categoryData,
        categories: categoriesData,
        id: params.id,
        posts: categoryPosts
      }
    }
}