import { useState, useEffect } from "react";

import MEHeader from "@MECommonComponents/header/meHeader";
import SchoolListComponent from "@MEScreenComponents/school/schoolList";
import SchoolDetailComponent from "@MEScreenComponents/school/schoolDetail";

const SchoolPage = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [isHideMainContent, setIsHideMainContent] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 1024) {
        setIsFullScreen(false);
        setIsHideMainContent(false);
      } else {
        setIsFullScreen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  window.onpopstate = function () {
    window.history.go(1);
  };

  const handleCardClick = () => {
    if (isFullScreen) {
      console.log(`Right now you are in full screen mode`);
    } else {
      setIsHideMainContent(!isHideMainContent);
      console.log(`Right now you are in normal mode`);
    }
  };

  return (
    <>
      <MEHeader />
      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        <div
          className={`lg:w-1/3 w-full ${
            isFullScreen ? "" : isHideMainContent ? "hidden" : "block"
          }`}
        >
          <SchoolListComponent handleCardClick={() => handleCardClick()} />
        </div>

        <div
          className={`w-full lg:w-4/5 mx-2 ${
            isFullScreen ? "" : isHideMainContent ? "block " : "hidden"
          }`}
        >
          <SchoolDetailComponent
            handleCardClick={() => handleCardClick()}
            showCloseIcon={!isFullScreen}
          />
        </div>
      </div>
    </>
  );
};

export default SchoolPage;
