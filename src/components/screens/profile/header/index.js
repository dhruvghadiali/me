import { useTranslation } from "react-i18next";

import _ from "lodash";

import ScreenHeaderComponent from "@MECommonComponents/typography/screenHeader";
import ScreenSubtitleComponent from "@MECommonComponents/typography/screenSubtitle";

import {
  profileScreenTitle,
  profileScreenSubtitle,
} from "@MELocalization/languages/en";

const ProfileHeaderComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
        <ScreenHeaderComponent
          headerText={_.startCase(
            t("profileScreenTitle", { defaultValue: profileScreenTitle })
          )}
          className="text-left"
        />
        <ScreenSubtitleComponent
          subTitleText={_.upperFirst(
            t("profileScreenSubtitle", { defaultValue: profileScreenSubtitle })
          )}
          className="text-left"
        />
      </div>
    </>
  );
};
export default ProfileHeaderComponent;
