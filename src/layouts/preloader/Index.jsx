const PreloaderModule = () => {
    return (
        <>
        {/* preloader */}
        <div className="mil-preloader">
            <div className="mil-preloader-animation">
                <div className="mil-pos-abs mil-animation-1">
                    <p className="mil-h3 mil-muted mil-thin">Pioneering</p>
                    <p className="mil-h3 mil-muted">Creative</p>
                    <p className="mil-h3 mil-muted mil-thin">Excellence</p>
                </div>
                <div className="mil-pos-abs mil-animation-2">
                    <div className="mil-reveal-frame">
                        <p className="mil-reveal-box" />
                        <p className="mil-h3 mil-muted mil-thin">mwakidenis.com</p>
                    </div>
                </div>
            </div>
        </div>
        {/* preloader end */}
        </>
    );
};
export default PreloaderModule;