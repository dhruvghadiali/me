import { UserIcon, Lock } from "lucide-react";
import _ from "lodash";

import {
  settingsAccordionItemsTitleForUpdatePassword,
  settingsAccordionItemsTitleForUpdateUsername,
  settingsAccordionItemsSubtitleForUpdatePassword,
  settingsAccordionItemsSubtitleForUpdateUsername,
} from "@MELocalization/languages/en";

import UpdateUsernameComponent from "@MEScreenComponents/settings/updateUsername";
import UpdatePasswordComponent from "@MEScreenComponents/settings/updatePassword";

const getSettingsAccordionItems = (t) => [
  {
    id: "changeUsername",
    title: _.startCase(
      t("settingsAccordionItemsTitleForUpdateUsername", {
        defaultValue: settingsAccordionItemsTitleForUpdateUsername,
      })
    ),
    sub: _.upperFirst(
      t("settingsAccordionItemsSubtitleForUpdateUsername", {
        defaultValue: settingsAccordionItemsSubtitleForUpdateUsername,
      })
    ),
    icon: <UserIcon className="w-5 h-5" />,
    content: <UpdateUsernameComponent />,
  },
  {
    id: "changePassword",
    title: _.startCase(
      t("settingsAccordionItemsTitleForUpdatePassword", {
        defaultValue: settingsAccordionItemsTitleForUpdatePassword,
      })
    ),
    sub: _.upperFirst(
      t("settingsAccordionItemsSubtitleForUpdatePassword", {
        defaultValue: settingsAccordionItemsSubtitleForUpdatePassword,
      })
    ),
    icon: <Lock className="w-5 h-5" />,
    content: <UpdatePasswordComponent />,
  },
];

export { getSettingsAccordionItems };
