import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import _ from "lodash";

import { Mail, MapPin, Phone } from "lucide-react";
import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";
import {
  schoolEmailNotProvided,
  schoolAddressNotProvided,
  schoolPhoneNotProvided,
} from "@MELocalization/languages/en";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

const SchoolListComponent = ({ handleCardClick }) => {
  const { schools } = useSelector((state) => state.school);
  const { t } = useTranslation();

  return (
    <div className="h-full">
      <ScrollArea className="h-full">
        {schools.map((school, index) => (
          <Card
            key={index}
            className={`rounded-2xl drop-shadow-sm shadow-dark mb-2 mr-5 ml-2 p-0 border border-dark cursor-pointer hover:scale-[1.01] transition-all duration-200 hover:border-dark ${
              index === 0 ? "mt-2" : ""
            }`}
            onClick={() => handleCardClick(school.id)}
          >
            <CardHeader className="p-5">
              <CardTitle className="text-xl font-semibold text-dark">
                {_.upperCase(school.name)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-3 w-3 mt-1 text-dark" />
                <span className="flex-1 line-clamp-2">
                  {_.upperFirst(
                    school.address ||
                      t("schoolAddressNotProvided", {
                        defaultValue: schoolAddressNotProvided,
                      })
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 text-dark" />
                <span className="flex-1 line-clamp-1">
                  {`+91 ${school.phoneNumber}` ||
                    _.upperFirst(
                      t("schoolPhoneNotProvided", {
                        defaultValue: schoolPhoneNotProvided,
                      })
                    )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 text-dark" />
                <span className="flex-1 line-clamp-1">
                  {school.email ||
                    _.upperFirst(
                      t("schoolEmailNotProvided", {
                        defaultValue: schoolEmailNotProvided,
                      })
                    )}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
        <ScrollBar orientation="vertical" className="bg-primary" />
      </ScrollArea>
    </div>
  );
};

export default SchoolListComponent;
