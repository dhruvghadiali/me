import { useState, useEffect } from "react";
import MEHoc from "@MECommonComponents/hoc/meHoc";
import MEHeader from "@MECommonComponents/header/meHeader";
import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@MEShadcnComponents/tabs";

import SchoolListComponent from "@MEScreenComponents/school/schoolList/schoolListComponent";
import SchoolDetailComponent from "@MEScreenComponents/school/schoolDetail/schoolDetailComponent";

const SchoolScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [isHideMainContent, setIsHideMainContent] = useState(true);

  // Screen size detection and event listener
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
      <MEHoc>
        <MEHeader />
      </MEHoc>
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

export default SchoolScreen;
