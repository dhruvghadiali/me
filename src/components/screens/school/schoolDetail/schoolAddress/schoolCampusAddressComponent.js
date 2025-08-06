import { MapPin, Clock, Building, Compass } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

const SchoolCampusAddressComponent = ({ title }) => {
  return (
    <Card className="border border-dark mb-5 shadow-lg shadow-dark/10 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
          <Building className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
          <p className="line-clamp-1"> {title} </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-dark mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-dark line-clamp-1">
                  Address
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 mt-1 line-clamp-5">
                  123 Green Street Springfield, Illinois 62704 United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Compass className="h-4 w-4 sm:h-5 sm:w-5 text-dark mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-dark line-clamp-1">
                  Coordinates
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 mt-1 line-clamp-2">
                  Latitude: N/A <br />
                  Longitude: N/A
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-dark/5 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-sm sm:text-base text-dark mb-2 line-clamp-1">
                Campus Size
              </h4>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-gray-700 line-clamp-1">
                  Total Area: N/A
                </p>
                <p className="text-xs sm:text-sm text-gray-700 line-clamp-1">
                  Building Area: N/A
                </p>
                <p className="text-xs sm:text-sm text-gray-700 line-clamp-1">
                  Outdoor Facilities: N/A
                </p>
              </div>
            </div>
          </div>
        </div>

        <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
          <p className="line-clamp-1"> Operating Hours </p>
        </CardTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm sm:text-base text-dark line-clamp-1">
              Regular School Hours
            </h4>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 line-clamp-1">Monday - Friday:</span>
                <span className="text-dark font-medium line-clamp-1">N/A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 line-clamp-1">Saturday:</span>
                <span className="text-dark font-medium line-clamp-1">N/A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 line-clamp-1">Sunday:</span>
                <span className="text-dark font-medium line-clamp-1">N/A</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm sm:text-base text-dark line-clamp-1">
              Administrative Office Hours
            </h4>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 line-clamp-1">Monday - Friday:</span>
                <span className="text-dark font-medium line-clamp-1">N/A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 line-clamp-1">Saturday:</span>
                <span className="text-dark font-medium line-clamp-1">
                  N/A
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 line-clamp-1">Sunday:</span>
                <span className="text-dark font-medium line-clamp-1">N/A</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolCampusAddressComponent;
