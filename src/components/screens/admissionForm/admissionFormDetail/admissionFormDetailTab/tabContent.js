import { useSelector } from "react-redux";

import HistoryTabComponent from "@MEScreenComponents/admissionForm/admissionFormDetail/admissionFormDetailTab/historyTab";
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
        return <HistoryTabComponent />;
      case 2:
        return <NoInformationFoundTabComponent />;
      case 3:
        return <NoInformationFoundTabComponent />;
      case 4:
        return <NoInformationFoundTabComponent />;
      default:
        return <NoInformationFoundTabComponent />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-card to-card/95 rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl border  border-primary/60 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 shadow-sm">
      {setTabContent()}
    </div>
  );
};

export default TabContentComponent;
