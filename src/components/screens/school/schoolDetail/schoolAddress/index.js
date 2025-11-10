import { MapPin, Clock, Phone, Mail, Building, Compass } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import _ from "lodash";

const SchoolAddressComponent = ({ school }) => {
  const addresses = _.get(school, "addresses", []);
  if (!_.size(addresses)) {
    return (
      <div className="text-sm text-gray-500">
        No address information available.
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {_.map(addresses, (address, index) => (
        <Card key={address?.id || index} className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Building className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              {index === 0 ? "Main " : ""}Campus Location
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
                      Physical Address
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
                      Coordinates
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Latitude: {address?.latitude || "N/A"}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1">
                      Longitude: {address?.longitude || "N/A"}
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
                      Quick Contact
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-dark flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-dark ">
                          {address?.phoneNumber
                            ? `+91 ${address.phoneNumber}`
                            : "Not Available"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-dark flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-dark">
                          {address?.email || "Not Available"}
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
                      Campus Size
                    </h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">
                          Total Area:
                        </span>
                        <span className="text-xs sm:text-sm text-dark font-medium">
                          {address?.totalArea || "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">
                          Building Area:
                        </span>
                        <span className="text-xs sm:text-sm text-dark font-medium">
                          {address?.buildingArea || "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">
                          Outdoor:
                        </span>
                        <span className="text-xs sm:text-sm text-dark font-medium">
                          {address?.outdoorFacilities || "N/A"}
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
                  Operating Hours
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm text-dark">
                    Regular School Hours
                  </h5>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="text-dark font-medium">
                        7:30 AM - 3:30 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="text-dark font-medium">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="text-dark font-medium">Closed</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm text-dark">
                    Administrative Office
                  </h5>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="text-dark font-medium">
                        7:00 AM - 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="text-dark font-medium">
                        8:00 AM - 12:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="text-dark font-medium">Closed</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm text-dark">
                    Special Events
                  </h5>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Evening Events:</span>
                      <span className="text-dark font-medium">
                        Until 9:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekend Sports:</span>
                      <span className="text-dark font-medium">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Summer Hours:</span>
                      <span className="text-dark font-medium">
                        8:00 AM - 2:00 PM
                      </span>
                    </div>
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
