import SchoolHighlightsComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview/schoolHighlightsComponent";
import SchoolDescriptionComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview/schoolDescriptionComponent";
import SchoolOrganizationComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview/schoolOrganizationComponent";
import SchoolKeyStatisticsComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview/schoolKeyStatisticsComponent";

const SchoolOverviewComponent = ({ school }) => {
  const overview = school && school.overview ? school.overview : {};
  const organization = school && school.organization ? school.organization : {};
  return (
    <>
      <SchoolDescriptionComponent
        aboutSection1={
          overview && overview.aboutSection1 ? overview.aboutSection1 : ""
        }
        aboutSection2={
          overview && overview.aboutSection2 ? overview.aboutSection2 : ""
        }
      />
      <SchoolKeyStatisticsComponent
        studentsEnrolled={overview && overview.studentsEnrolled}
        facultyMembers={overview && overview.facultyMembers}
        graduationRate={overview && overview.graduationRate}
        schoolRating={overview && overview.schoolRating}
      />
      {/* <SchoolHighlightsComponent /> */}
      <SchoolOrganizationComponent organization={organization} />
    </>
  );
};

export default SchoolOverviewComponent;
