import { useTranslation } from "react-i18next";

import _ from "lodash";

import ScreenHeaderComponent from "@MECommonComponents/typography/screenHeader";
import ScreenSubtitleComponent from "@MECommonComponents/typography/screenSubtitle";

import {
  settingsScreenTitle,
  settingsScreenSubtitle,
} from "@MELocalization/languages/en";

const SettingHeaderComponent = () => {
  return (
    <>
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
        <ScreenHeaderComponent
          headerText={_.startCase(
            t("settingsScreenTitle", { defaultValue: settingsScreenTitle })
          )}
          className="text-left"
        />
        <ScreenSubtitleComponent
          subTitleText={_.startCase(
            t("settingsScreenSubtitle", {
              defaultValue: settingsScreenSubtitle,
            })
          )}
          className="text-left"
        />
      </div>
    </>
  );
};
export default SettingHeaderComponent;
