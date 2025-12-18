import ScreenHeaderComponent from "@MECommonComponents/header/screenHeader";
import ScreenSubTitleComponent from "@MECommonComponents/subTitle/screenSubTitle";

const AdmissionFormHeaderComponent = () => {
  return (
    <>
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
        <ScreenHeaderComponent
          headerText="Admission Management"
          className="text-left"
        />
        <ScreenSubTitleComponent
          subTitleText="View your application history and apply to new schools"
          className="text-left"
        />
      </div>
    </>
  );
};
export default AdmissionFormHeaderComponent;
