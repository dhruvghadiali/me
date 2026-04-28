import { useTranslation } from "react-i18next";
import { MapPin, Clock, Phone, Mail, Building, Compass } from "lucide-react";

import {
  schoolLatitude,
  schoolTotalArea,
  schoolLongitude,
  schoolCampusSize,
  schoolOutdoorArea,
  schoolCoordinates,
  schoolBuildingArea,
  schoolQuickContact,
  schoolCampusLocation,
  schoolPhysicalAddress,
  schoolPhoneNotProvided,
  schoolEmailNotProvided,
  schoolMainCampusLocation,
  schoolOpeningHours,
  schoolHours,
  schoolAdministrativeStaff,
} from "@MELocalization/languages/en";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

import SchoolAddressesNotProvided from "@MEScreenComponents/school/schoolDetail/schoolAddress/schoolAddressesNotProvided";
import SchoolAddressWeekHoursComponent from "@MEScreenComponents/school/schoolDetail/schoolAddress/weekHours";

import _ from "lodash";

const SchoolAddressComponent = ({ school }) => {
  const { t } = useTranslation();

  const addresses = _.get(school, "addresses", []);
  if (!_.size(addresses)) {
    return <SchoolAddressesNotProvided />;
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {_.map(addresses, (address, index) => (
        <Card key={address?.id || index} className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Building className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              {index === 0
                ? _.upperFirst(
                    t("schoolMainCampusLocation", {
                      defaultValue: schoolMainCampusLocation,
                    }),
                  )
                : _.upperFirst(
                    t("schoolCampusLocation", {
                      defaultValue: schoolCampusLocation,
                    }),
                  )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Physical Address */}
              <div className="bg-dark/5 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-dark mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">
                      {_.upperFirst(
                        t("schoolPhysicalAddress", {
                          defaultValue: schoolPhysicalAddress,
                        }),
                      )}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      {address?.addressLine1 || "N/A"}
                    </p>
                    {address?.addressLine2 && (
                      <p className="text-xs sm:text-sm text-gray-700 mt-1">
                        {address.addressLine2}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Coordinates */}
              <div className="bg-dark/5 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Compass className="h-4 w-4 sm:h-5 sm:w-5 text-dark mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">
                      {_.upperFirst(
                        t("schoolCoordinates", {
                          defaultValue: schoolCoordinates,
                        }),
                      )}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      {_.upperFirst(
                        t("schoolLatitude", {
                          defaultValue: schoolLatitude,
                        }),
                      )}
                      {address?.latitude || "N/A"}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1">
                      {_.upperFirst(
                        t("schoolLongitude", {
                          defaultValue: schoolLongitude,
                        }),
                      )}
                      {address?.longitude || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-dark/5 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-dark mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">
                      {_.upperFirst(
                        t("schoolQuickContact", {
                          defaultValue: schoolQuickContact,
                        }),
                      )}
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-dark flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-dark ">
                          {school?.phoneNumber
                            ? `+91 ${school.phoneNumber}`
                            : _.upperFirst(
                                t("schoolPhoneNotProvided", {
                                  defaultValue: schoolPhoneNotProvided,
                                }),
                              )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-dark flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-dark">
                          {school?.email ||
                            _.upperFirst(
                              t("schoolEmailNotProvided", {
                                defaultValue: schoolEmailNotProvided,
                              }),
                            )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Size */}
              <div className="bg-dark/5 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Building className="h-4 w-4 sm:h-5 sm:w-5 text-dark mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">
                      {_.upperFirst(
                        t("schoolCampusSize", {
                          defaultValue: schoolCampusSize,
                        }),
                      )}
                    </h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">
                          {_.upperFirst(
                            t("schoolTotalArea", {
                              defaultValue: schoolTotalArea,
                            }),
                          )}
                        </span>
                        <span className="text-xs sm:text-sm text-dark font-medium">
                          {address?.campusArea || "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">
                          {_.upperFirst(
                            t("schoolBuildingArea", {
                              defaultValue: schoolBuildingArea,
                            }),
                          )}
                        </span>
                        <span className="text-xs sm:text-sm text-dark font-medium">
                          {address?.buildingArea || "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">
                          {_.upperFirst(
                            t("schoolOutdoorArea", {
                              defaultValue: schoolOutdoorArea,
                            }),
                          )}
                        </span>
                        <span className="text-xs sm:text-sm text-dark font-medium">
                          {address?.outdoorArea || "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="pt-2 sm:pt-3 border-t border-dark/10">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
                <h4 className="font-semibold text-sm sm:text-base text-dark">
                  {_.upperFirst(
                    t("schoolOpeningHours", {
                      defaultValue: schoolOpeningHours,
                    }),
                  )}
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm text-dark">
                    {_.upperFirst(
                      t("schoolRegularHours", {
                        defaultValue: schoolHours,
                      }),
                    )}
                  </h5>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <SchoolAddressWeekHoursComponent
                      week={_.get(address, "schoolHours", null)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm text-dark">
                    {_.upperFirst(
                      t("schoolAdministrativeOffice", {
                        defaultValue: schoolAdministrativeStaff,
                      }),
                    )}
                  </h5>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <SchoolAddressWeekHoursComponent
                      week={_.get(address, "administrativeHours", null)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SchoolAddressComponent;
