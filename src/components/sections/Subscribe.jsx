import Data from "@data/sections/subscribe.json";
import AppData from "@data/app.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const SubscribeSection = () => {
  return (
    <>
        {/* call to action */}
        <section className="mil-soft-bg">
            <div className="container mil-p-120-120">
                <div className="row">
                    <div className="col-lg-10">
                        <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                    </div>
                </div>
                <div className="mil-center">
                    <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} /> 
                    <div className="row justify-content-center mil-up">
                        <div className="col-lg-4">
                            <form action={AppData.settings.mailchimp.url} method="post" target="_blank" className="mil-subscribe-form mil-subscribe-form-2 mil-up">
                                <input type="email" placeholder="Enter our email" name="EMAIL" required />
                                <input type="hidden" name={AppData.settings.mailchimp.key} />
                                <button type="submit" className="mil-button mil-icon-button-sm mil-arrow-place">
                                    <ArrowIcon />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action end */}
    </>
  );
};

export default SubscribeSection;