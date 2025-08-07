import SchoolHighlightsComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview/schoolHighlightsComponent";
import SchoolDescriptionComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview/schoolDescriptionComponent";
import SchoolOrganizationComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview/schoolOrganizationComponent";
import SchoolKeyStatisticsComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview/schoolKeyStatisticsComponent";

const SchoolOverviewComponent = () => {
  return (
    <>
      <SchoolDescriptionComponent />
      <SchoolKeyStatisticsComponent />
      <SchoolHighlightsComponent />
      <SchoolOrganizationComponent />
    </>
  );
};

export default SchoolOverviewComponent;
