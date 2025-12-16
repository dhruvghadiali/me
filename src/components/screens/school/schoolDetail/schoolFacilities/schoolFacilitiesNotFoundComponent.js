import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

import { noFacilitiesAvailableMessage } from "@MELocalization/languages/en";

import _ from "lodash";

const SchoolFacilitiesNotFoundComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center py-12 sm:py-16">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary/60" />
            </div>
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
          {_.upperFirst(
            t("noFacilitiesAvailableMessage", {
              defaultValue: noFacilitiesAvailableMessage,
            })
          )}
        </h3>
      </div>
    </div>
  );
};

export default SchoolFacilitiesNotFoundComponent;
