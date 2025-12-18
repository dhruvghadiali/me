import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Building2, RefreshCw } from "lucide-react";

import { getSchools } from "@MERedux/school/schoolAction";
import {
  schoolsNotFoundHeader,
  schoolsNotFoundMessage,
  schoolsNotFoundRefreshButton,
} from "@MELocalization/languages/en";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";

const SchoolsNotFound = ({callPublicAPI}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(getSchools({ callPublicAPI: callPublicAPI || false }));
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-24 h-24 bg-muted rounded-full">
            <Building2 className="w-12 h-12 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            {_.upperFirst(
              t("schoolsNotFoundHeader", {
                defaultValue: schoolsNotFoundHeader,
              })
            )}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {_.upperFirst(
              t("schoolsNotFoundMessage", {
                defaultValue: schoolsNotFoundMessage,
              })
            )}
          </p>
        </div>

        <MEButton
          onClick={handleRefresh}
          className="gap-2 mx-auto"
          variant="outline"
        >
          <RefreshCw className="w-4 h-4" />
          {_.upperFirst(
            t("schoolsNotFoundRefreshButton", {
              defaultValue: schoolsNotFoundRefreshButton,
            })
          )}
        </MEButton>
      </div>
    </div>
  );
};

export default SchoolsNotFound;
