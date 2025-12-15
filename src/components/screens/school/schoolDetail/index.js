import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Mail, Phone, XCircleIcon } from "lucide-react";

import { Button } from "@MEShadcnComponents/button";
import { getSchoolDetailTabs } from "@MEScreenComponents/school/schoolDetailTab/schoolDetailTabs";
import {
  schoolType,
  schoolEstablished,
  schoolEducationBoard,
  schoolAffiliateNumber,
} from "@MELocalization/languages/en";

import _ from "lodash";

import SchoolDetailTabComponent from "@MEScreenComponents/school/schoolDetailTab/schoolDetailTabComponent";

const SchoolDetailComponent = ({ handleCardClick, showCloseIcon }) => {
  const { t } = useTranslation();
  const { school } = useSelector((state) => state.school);

  return (
    <>
      <div className="mx-5 space-y-4">
        <div className="flex items-center justify-between mr-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
            {_.upperCase(school.name)}
          </h1>
          {showCloseIcon && (
            <Button variant="ghost" onClick={() => handleCardClick()}>
              <XCircleIcon />
            </Button>
          )}
        </div>
        <div className="bg-muted border border-primary rounded-lg p-3 sm:p-4 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary/75">
                {_.upperFirst(
                  t("schoolAffiliateNumber", {
                    defaultValue: schoolAffiliateNumber,
                  })
                )}
              </span>
              <span>{school.affiliateNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary/75">
                {_.upperFirst(
                  t("schoolEstablished", {
                    defaultValue: schoolEstablished,
                  })
                )}
              </span>
              <span>{school.establishedYear}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary/75">
                {_.upperFirst(
                  t("schoolType", {
                    defaultValue: schoolType,
                  })
                )}
              </span>
              <span>{school.schoolType}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary/75">
                {_.upperFirst(
                  t("schoolEducationBoard", {
                    defaultValue: schoolEducationBoard,
                  })
                )}
              </span>
              <span>{school.educationBoards}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary/75" />
              <span className="text-xs sm:text-sm">{school.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary/75" />
              <span>{`+91 ${school.phoneNumber}`}</span>
            </div>
          </div>
        </div>
      </div>

      <SchoolDetailTabComponent tabData={getSchoolDetailTabs(school, t)} />
    </>
  );
};

export default SchoolDetailComponent;
