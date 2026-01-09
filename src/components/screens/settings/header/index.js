import ScreenHeaderComponent from "@MECommonComponents/typography/screenHeader";
import ScreenSubtitleComponent from "@MECommonComponents/typography/screenSubtitle";

const SettingHeaderComponent = () => {
  return (
    <>
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
        <ScreenHeaderComponent
          headerText="Settings"
          className="text-left"
        />
        <ScreenSubtitleComponent
          subTitleText="Manage your account settings"
          className="text-left"
        />
      </div>
    </>
  );
};
export default SettingHeaderComponent;
