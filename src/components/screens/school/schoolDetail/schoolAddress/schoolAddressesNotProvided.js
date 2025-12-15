import { MapPin, Building } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  schoolAddressesNotProvided,
  schoolMainCampusLocation,
} from "@MELocalization/languages/en";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

import _ from "lodash";

const SchoolAddressesNotProvided = () => {
  const { t } = useTranslation();

  return (
    <Card className="border border-primary mb-5 shadow-lg shadow-primary/10 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
          <Building className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
          {_.upperFirst(
            t("schoolMainCampusLocation", {
              defaultValue: schoolMainCampusLocation,
            })
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center py-8 sm:py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-primary/60" />
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-primary/70">
              {_.upperFirst(
                t("schoolAddressesNotProvided", {
                  defaultValue: schoolAddressesNotProvided,
                })
              )}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolAddressesNotProvided;
