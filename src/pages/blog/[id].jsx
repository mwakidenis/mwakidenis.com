import Layouts from "@layouts/Layouts";
import { getAllPostsIds, getPostData, getRelatedPosts } from "@library/posts";
import Date from '@library/date';
import PageBanner from "@components/PageBanner";
import RelatedPostsSection from "@components/sections/RelatedPosts";

const PostsDetail = ( props ) => {
  
  const postData = props.data;

  return (
    <Layouts>
      <PageBanner pageTitle={postData.introTitle} breadTitle={postData.title} align={"center"} headingSize={2} />
      
      {/* publication */}
      <section id="blog">
          <div className="container mil-p-120-90">
              <div className="row justify-content-center">
                  <div className="col-lg-12">

                      <div className="mil-image-frame mil-horizontal mil-up">
                          <img src={postData.image} alt={postData.title} className="mil-scale" data-value-1=".90" data-value-2="1.15" />
                      </div>
                      <div className="mil-info mil-up mil-mb-90">
                          <div>Category: &nbsp;<span className="mil-dark">{postData.category}</span></div>
                          <div>Date: &nbsp;<span className="mil-dark"><Date dateString={postData.date} /></span></div>
                          <div>Author: &nbsp;<span className="mil-dark">{postData.author.name}</span></div>
                      </div>

                  </div>
                  <div className="col-lg-8">

                      <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
                      
                      {typeof postData.gallery != "undefined" &&
                      <>
                        {postData.gallery.enabled == 1 &&
                        <>
                          <div className="row">
                              {postData.gallery.items.map((item, key) => (
                              <div className="col-lg-6" key={`gallery-item-${key}`}>

                                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-30">
                                      <img src={item.image} alt={item.alt} />
                                  </div>

                              </div>
                              ))}
                          </div>
                        </>
                        }
                      </>
                      }

                      {typeof postData.additional != "undefined" &&
                        <>
                          {postData.additional.enabled == 1 &&
                          <div className="mil-text mil-up" dangerouslySetInnerHTML={{__html : postData.additional.content}} />
                          }
                        </>
                      }
                      
                  </div>
              </div>
          </div>
      </section>
      {/* publication end */}

      <RelatedPostsSection items={props.related} />
    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const relatedPosts = await getRelatedPosts(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}