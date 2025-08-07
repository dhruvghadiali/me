import { MapPin, Phone, Mail, Globe, Building } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

const SchoolOrganizationComponent = () => {
  return (
    <Card className="border border-primary mb-5 shadow-lg shadow-primary/10 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="text-base sm:text-lg md:text-xl flex items-center gap-2">
          <Building className="h-4 w-4 sm:h-5 sm:w-5" />
          Organization Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-2">
                Institution Information
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-primary/60">Name:</span>
                  <span className="font-medium">
                    Bright Future Academy (BFA)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-primary/60">
                    Government Registration Number:
                  </span>
                  <span className="font-medium">1985</span>
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
            Contact Information
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs sm:text-sm">
                    Main Campus
                  </p>
                  <p className="text-xs sm:text-sm text-primary/60">
                    123 Green Street
                  </p>
                  <p className="text-xs sm:text-sm text-primary/60">
                    Springfield, IL 62704
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <div>
                  <p className="text-xs sm:text-sm">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <div>
                  <p className="text-xs sm:text-sm">
                    info@springfieldhigh.edu
                  </p>
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
            Administrative Team
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-muted p-3 rounded-lg">
              <h5 className="font-medium text-xs sm:text-sm">
                President
              </h5>
              <p className="text-xs text-primary/60">Dr. Sarah Johnson</p>
              <p className="text-xs mt-1 text-primary/60">
                {"sarah.johnson@shs.edu | +1 (555) 987-6543"}
              </p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <h5 className="font-medium text-xs sm:text-sm">
                President
              </h5>
              <p className="text-xs text-primary/60">Dr. Sarah Johnson</p>
              <p className="text-xs mt-1 text-primary/60">
                {"sarah.johnson@shs.edu | +1 (555) 987-6543"}
              </p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <h5 className="font-medium text-xs sm:text-sm">
                President
              </h5>
              <p className="text-xs text-primary/60">Dr. Sarah Johnson</p>
              <p className="text-xs mt-1 text-primary/60">
                {"sarah.johnson@shs.edu | +1 (555) 987-6543"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolOrganizationComponent;
