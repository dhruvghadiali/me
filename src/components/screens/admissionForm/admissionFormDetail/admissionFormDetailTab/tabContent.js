import { useSelector } from "react-redux";

import OverviewTabComponent from "@MEScreenComponents/admissionForm/admissionFormDetail/admissionFormDetailTab/overviewTab";
import NoInformationFoundTabComponent from "@MEScreenComponents/admissionForm/admissionFormDetail/admissionFormDetailTab/noInformationFoundTab";

const TabContentComponent = () => {
  const { admissionFormActiveIndex } = useSelector(
    (state) => state.admissionForm
  );

  const setTabContent = () => {
    switch (admissionFormActiveIndex) {
      case 0:
        return <OverviewTabComponent />;
      case 1:
        return <div>Status History Content</div>;
      case 2:
        return <div>Documents Content</div>;
      case 3:
        return <div>Appointments Content</div>;
      case 4:
        return <div>Payments Content</div>;
      default:
        return <NoInformationFoundTabComponent />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-card to-card/95 rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl border border-t-0 border-border/60 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 shadow-sm">
      {setTabContent()}
    </div>
  );
};

export default TabContentComponent;
