import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Shield, ArrowBigRightDashIcon } from "lucide-react";

import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";
import { facilitiesTabTitle } from "@MELocalization/languages/en";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

import _ from "lodash";

import SchoolFacilitiesNotFoundComponent from "@MEScreenComponents/school/schoolDetail/schoolFacilities/schoolFacilitiesNotFoundComponent";

const SchoolFacilitiesComponent = () => {
  const { t } = useTranslation();
  const { school } = useSelector((state) => state.school);

  return (
    <ScrollArea className="h-[calc(100vh-350px)]">
      <div className="space-y-4 sm:space-y-6">
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-dark " />
              {_.upperFirst(
                t("facilitiesTabTitle", { defaultValue: facilitiesTabTitle })
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {school && school.facilities && _.isEmpty(school.facilities) ? (
              <SchoolFacilitiesNotFoundComponent />
            ) : (
              _.map(school.facilities, (facility, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-sm sm:text-base text-dark flex items-center gap-2 ">
                    <ArrowBigRightDashIcon className="h-4 w-4 text-dark " />
                    {_.upperCase(facility.facilityType)}
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {facility.facility &&
                      !_.isEmpty(facility.facility) &&
                      _.map(
                        facility.facility,
                        (facilityInfo, facilityInfoIndex) => (
                          <div
                            key={facilityInfoIndex}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
                          >
                            <h5 className="font-medium text-xs sm:text-sm text-dark">
                              {_.upperFirst(facilityInfo.facilityName || "N/A")}
                            </h5>
                          </div>
                        )
                      )}
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
      <ScrollBar orientation="vertical" className="bg-dark" />
    </ScrollArea>
  );
};

export default SchoolFacilitiesComponent;
