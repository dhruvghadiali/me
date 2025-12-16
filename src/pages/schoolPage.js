import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSchools, getSchool } from "@MERedux/school/schoolAction";

import _ from "lodash";

import MEHeader from "@MECommonComponents/header/meHeader";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import SchoolListComponent from "@MEScreenComponents/school/schoolList";
import SchoolsNotFound from "@MEScreenComponents/school/schoolsNotFound";
import SchoolDetailComponent from "@MEScreenComponents/school/schoolDetail";

const SchoolPage = () => {
  const dispatch = useDispatch();

  const { schoolSummaryLoader, schoolDetailLoader, school, schools } =
    useSelector((state) => state.school);

  const [isFullScreen, setIsFullScreen] = useState(true);
  const [isHideMainContent, setIsHideMainContent] = useState(true);

  useEffect(() => {
    dispatch(getSchools({ callPublicAPI: true }));
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

  // window.onpopstate = function () {
  //   window.history.go(1);
  // };

  const handleCardClick = (schoolId) => {
    dispatch(getSchool({ schoolId, callPublicAPI: true }));
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
      {schoolSummaryLoader ? (
        <div className="flex items-center justify-center min-h-[calc(100vh)]">
          <MELoaderIcon />
        </div>
      ) : _.isEmpty(schools) ? (
        <SchoolsNotFound />
      ) : (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
          <div
            className={`lg:w-1/3 w-full ${
              isFullScreen ? "" : isHideMainContent ? "hidden" : "block"
            }`}
          >
            <SchoolListComponent
              handleCardClick={(schoolId) => handleCardClick(schoolId)}
            />
          </div>

          <div
            className={`w-full lg:w-4/5 ${
              isFullScreen ? "" : isHideMainContent ? "block" : "hidden"
            }`}
          >
            {schoolDetailLoader ? (
              <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
                <MELoaderIcon />
              </div>
            ) : _.isEmpty(school) ? (
              <div />
            ) : (
              <SchoolDetailComponent
                handleCardClick={() => handleCardClick()}
                showCloseIcon={!isFullScreen}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SchoolPage;
