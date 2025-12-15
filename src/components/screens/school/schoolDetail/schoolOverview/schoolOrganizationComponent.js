import { MapPin, Phone, Mail, Building } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  organizationDetailsHeader,
  institutionInformation,
  organizationName,
  governmentRegistrationNumber,
  contactInformationHeader,
  organizationAddress,
  administrativeTeamHeader,
} from "@MELocalization/languages/en";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

import _ from "lodash";

const SchoolOrganizationComponent = ({ organization }) => {
  const { t } = useTranslation();
  const {
    name,
    governmentRegistrationNumber,
    addressLine1,
    addressLine2,
    email,
    phoneNumber,
    members,
  } = organization;

  return (
    <Card className="border border-primary mb-5 shadow-lg shadow-primary/10 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="text-base sm:text-lg md:text-xl flex items-center gap-2">
          <Building className="h-4 w-4 sm:h-5 sm:w-5" />
          {_.upperFirst(
            t("organizationDetailsHeader", {
              defaultValue: organizationDetailsHeader,
            })
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-2">
                {_.upperFirst(
                  t("institutionInformation", {
                    defaultValue: institutionInformation,
                  })
                )}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-primary/60">
                    {_.upperFirst(
                      t("organizationName", { defaultValue: organizationName })
                    )}
                  </span>
                  <span className="font-medium">{name ? name : "N/A"}</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-primary/60">
                    {_.upperFirst(
                      t("governmentRegistrationNumber", {
                        defaultValue: governmentRegistrationNumber,
                      })
                    )}
                  </span>
                  <span className="font-medium">
                    {governmentRegistrationNumber
                      ? governmentRegistrationNumber
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-2">
                Accreditation & Affiliations
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-primary/60">Accredited by:</span>
                  <span className="font-medium">WASC</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-primary/60">Member of:</span>
                  <span className="font-medium">NAIS</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-primary/60">Certification:</span>
                  <span className="font-medium">ISO 9001:2015</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-primary/60">Grade Levels:</span>
                  <span className="font-medium">9-12</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t text-primary pt-4">
          <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-3">
            {_.upperFirst(
              t("contactInformationHeader", {
                defaultValue: contactInformationHeader,
              })
            )}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs sm:text-sm">
                    {_.upperFirst(
                      t("organizationAddress", {
                        defaultValue: organizationAddress,
                      })
                    )}
                  </p>
                  <p className="text-xs sm:text-sm text-primary/60">
                    {addressLine1 ? addressLine1 : "N/A"}
                  </p>
                  <p className="text-xs sm:text-sm text-primary/60">
                    {addressLine2 ? addressLine2 : ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <div>
                  <p className="text-xs sm:text-sm">
                    {phoneNumber ? phoneNumber : "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <div>
                  <p className="text-xs sm:text-sm">{email ? email : "N/A"}</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-2">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                <div>
                  <p className="text-xs sm:text-sm">
                    www.springfieldhigh.edu
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t text-primary pt-4">
          <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-3">
            {_.upperFirst(
              t("administrativeTeamHeader", {
                defaultValue: administrativeTeamHeader,
              })
            )}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {members &&
              _.size(members) > 0 &&
              members.map((member, index) => (
                <div key={index} className="bg-muted p-3 rounded-lg">
                  <h5 className="font-medium text-xs sm:text-sm">
                    {member.position}
                  </h5>
                  <p className="text-xs text-primary/60">{member.name}</p>
                  <p className="text-xs mt-1 text-primary/60">
                    {`${member.email} | ${member.phoneNumber}`}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolOrganizationComponent;
