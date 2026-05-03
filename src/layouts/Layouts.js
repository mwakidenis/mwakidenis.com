import { useEffect } from "react";
import { ScrollAnimation } from "../common/scrollAnims";
//import { PreloaderAnimation } from "../common/preloader";
import { CursorAnimation } from "../common/cursor";
import { AnchorSscroll } from "../common/utilits";
import { CurrentPageLabel } from "../common/utilits";

import Footer from "./footers/Index";
import Header from "./headers/Index";
//import Preloader from "./preloader/Index";
import Cursor from "./cursor/Index";
import ScrollbarProgress from "./scrollbar-progress/Index";

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  extraClass,
}) => {
  useEffect(() => {
    //PreloaderAnimation();
    ScrollAnimation();
    CursorAnimation();
    AnchorSscroll();
    CurrentPageLabel();
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      <Cursor />

      {/* <Preloader /> */}

      <ScrollbarProgress />

      {!noHeader && (
        <Header
          layout={header}
          extraclassName={extraClass}
        />
      )}

      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          {children}

          {!noFooter && <Footer layout={footer} />}          
        </div>
      </div>
    </div>
  );
};
export default Layouts;
