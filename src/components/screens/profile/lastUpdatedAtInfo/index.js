import { useTranslation } from "react-i18next";

import _ from "lodash";
import moment from "moment";

import { profileScreenLastUpdatedAtInfoTitle } from "@MELocalization/languages/en";

const LastUpdatedAtInfoComponent = ({ updatedAt }) => {
  const { t } = useTranslation();

  return (
    updatedAt &&
    moment(updatedAt).isValid() && (
      <p className="text-sm text-primary/500 font-medium">
        {_.upperFirst(
          t("profileScreenLastUpdatedAtInfoTitle", {
            defaultValue: profileScreenLastUpdatedAtInfoTitle,
          })
        )}
        <span className="text-primary/700 ml-1">
          {moment(updatedAt).format("DD MMMM YYYY, hh:mm A")}
        </span>
      </p>
    )
  );
};

export default LastUpdatedAtInfoComponent;
