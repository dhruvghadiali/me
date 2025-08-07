import { 
  MapPin, 
  Navigation, 
  Clock, 
  Car, 
  Bus, 
  Bike,
  Phone,
  Mail,
  Building,
  Users,
  Compass,
  Route
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";

const SchoolAddressComponent = () => {
  return (
    <ScrollArea className="h-[calc(100vh-350px)]">
    <div className="space-y-4 sm:space-y-6">
      {/* Main Campus Address */}
      <Card className="border-dark/10">
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
            <Building className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
            Main Campus Location
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Address Details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-dark mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-dark">Physical Address</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    123 Green Street<br />
                    Springfield, Illinois 62704<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-dark mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-dark">Mailing Address</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    P.O. Box 12345<br />
                    Springfield, IL 62704-2345<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="h-4 w-4 sm:h-5 sm:w-5 text-dark mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-dark">Coordinates</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    Latitude: 39.7817° N<br />
                    Longitude: 89.6501° W
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-3">
              <div className="bg-dark/5 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">Quick Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-dark" />
                    <span className="text-xs sm:text-sm text-dark">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-dark" />
                    <span className="text-xs sm:text-sm text-dark">info@springfieldhigh.edu</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark/5 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">Campus Size</h4>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-gray-700">Total Area: 45 acres</p>
                  <p className="text-xs sm:text-sm text-gray-700">Building Area: 180,000 sq ft</p>
                  <p className="text-xs sm:text-sm text-gray-700">Outdoor Facilities: 25 acres</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Operating Hours */}
      <Card className="border-dark/10">
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
            Operating Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm sm:text-base text-dark">Regular School Hours</h4>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-dark font-medium">7:30 AM - 3:30 PM</span>
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
              <h4 className="font-semibold text-sm sm:text-base text-dark">Administrative Office</h4>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-dark font-medium">7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-dark font-medium">8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-dark font-medium">Closed</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm sm:text-base text-dark">Special Events</h4>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Evening Events:</span>
                  <span className="text-dark font-medium">Until 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weekend Sports:</span>
                  <span className="text-dark font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Summer Hours:</span>
                  <span className="text-dark font-medium">8:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transportation & Accessibility */}
      <Card className="border-dark/10">
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
            <Route className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
            Transportation & Accessibility
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Transportation Options */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-dark mb-3">Transportation Options</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <Bus className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-dark" />
                <h5 className="font-medium text-xs sm:text-sm text-dark">School Bus</h5>
                <p className="text-xs text-gray-600 mt-1">15 routes available</p>
                <p className="text-xs text-gray-600">Covers 25-mile radius</p>
              </div>
              
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <Car className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-dark" />
                <h5 className="font-medium text-xs sm:text-sm text-dark">Parking</h5>
                <p className="text-xs text-gray-600 mt-1">500 student spaces</p>
                <p className="text-xs text-gray-600">50 visitor spaces</p>
              </div>

              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <Bus className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-dark" />
                <h5 className="font-medium text-xs sm:text-sm text-dark">Public Transit</h5>
                <p className="text-xs text-gray-600 mt-1">Routes 15, 22, 31</p>
                <p className="text-xs text-gray-600">Bus stop 0.2 miles</p>
              </div>

              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <Bike className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-dark" />
                <h5 className="font-medium text-xs sm:text-sm text-dark">Bike Facilities</h5>
                <p className="text-xs text-gray-600 mt-1">Secure bike racks</p>
                <p className="text-xs text-gray-600">Repair station</p>
              </div>
            </div>
          </div>

          {/* Detailed Transportation Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base text-dark">School Bus Information</h4>
              <div className="bg-gray-50 p-3 rounded-lg">
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>• Free transportation for students living 2+ miles from school</li>
                  <li>• Air-conditioned buses with GPS tracking</li>
                  <li>• Trained, licensed drivers with safety certifications</li>
                  <li>• Special needs transportation available</li>
                  <li>• Morning pickup: 6:30 AM - 7:15 AM</li>
                  <li>• Afternoon drop-off: 3:45 PM - 4:30 PM</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm sm:text-base text-dark">Accessibility Features</h4>
              <div className="bg-gray-50 p-3 rounded-lg">
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>• ADA compliant building with ramps and elevators</li>
                  <li>• Designated parking spaces for disabled visitors</li>
                  <li>• Accessible restrooms on every floor</li>
                  <li>• Braille signage and audio announcements</li>
                  <li>• Special transportation for students with disabilities</li>
                  <li>• Support staff trained in accessibility assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nearby Landmarks & Directions */}
      <Card className="border-dark/10">
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
            <Navigation className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
            Nearby Landmarks & Directions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Landmarks */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-dark mb-3">Nearby Landmarks</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-4 w-4 text-dark flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs sm:text-sm text-dark">Springfield Mall</p>
                  <p className="text-xs text-gray-600">0.8 miles north</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-4 w-4 text-dark flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs sm:text-sm text-dark">City Library</p>
                  <p className="text-xs text-gray-600">1.2 miles east</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-4 w-4 text-dark flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs sm:text-sm text-dark">Memorial Hospital</p>
                  <p className="text-xs text-gray-600">2.1 miles south</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-4 w-4 text-dark flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs sm:text-sm text-dark">Green Park</p>
                  <p className="text-xs text-gray-600">0.5 miles west</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-4 w-4 text-dark flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs sm:text-sm text-dark">Fire Station #3</p>
                  <p className="text-xs text-gray-600">0.3 miles southeast</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-4 w-4 text-dark flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs sm:text-sm text-dark">Community Center</p>
                  <p className="text-xs text-gray-600">1.0 mile northwest</p>
                </div>
              </div>
            </div>
          </div>

          {/* Driving Directions */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-dark mb-3">Driving Directions</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-dark/5 p-3 sm:p-4 rounded-lg">
                <h5 className="font-medium text-xs sm:text-sm text-dark mb-2">From Downtown Springfield</h5>
                <ol className="text-xs sm:text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Head north on Main Street for 2.5 miles</li>
                  <li>Turn right onto Green Street</li>
                  <li>Continue for 0.8 miles</li>
                  <li>School will be on your left at 123 Green Street</li>
                </ol>
                <p className="text-xs text-gray-600 mt-2">Estimated time: 8-12 minutes</p>
              </div>

              <div className="bg-dark/5 p-3 sm:p-4 rounded-lg">
                <h5 className="font-medium text-xs sm:text-sm text-dark mb-2">From Interstate 55</h5>
                <ol className="text-xs sm:text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Take Exit 98 toward Springfield</li>
                  <li>Merge onto Veterans Parkway</li>
                  <li>Turn left onto Wabash Avenue</li>
                  <li>Turn right onto Green Street</li>
                  <li>School will be on your right</li>
                </ol>
                <p className="text-xs text-gray-600 mt-2">Estimated time: 15-20 minutes</p>
              </div>
            </div>
          </div>

          {/* Emergency Information */}
          <div className="bg-red-50 border border-red-200 p-3 sm:p-4 rounded-lg">
            <h4 className="font-semibold text-sm sm:text-base text-red-800 mb-2">Emergency Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div>
                <p className="text-red-700"><strong>Emergency Contact:</strong> (555) 123-4567</p>
                <p className="text-red-700"><strong>After Hours:</strong> (555) 123-9999</p>
              </div>
              <div>
                <p className="text-red-700"><strong>Nearest Hospital:</strong> Memorial Hospital (2.1 miles)</p>
                <p className="text-red-700"><strong>Police Station:</strong> 5th District (1.5 miles)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    <ScrollBar orientation="vertical" className="bg-dark" />
    </ScrollArea>
  );
};

export default SchoolAddressComponent;
