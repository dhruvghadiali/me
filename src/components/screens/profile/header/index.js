import ScreenHeaderComponent from "@MECommonComponents/typography/screenHeader";
import ScreenSubtitleComponent from "@MECommonComponents/typography/screenSubtitle";

const ProfileHeaderComponent = () => {
  return (
    <>
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
        <ScreenHeaderComponent
          headerText="Student Profile"
          className="text-left"
        />
        <ScreenSubtitleComponent
          subTitleText="Complete information about you and your family"
          className="text-left"
        />
      </div>
    </>
  );
};
export default ProfileHeaderComponent;
