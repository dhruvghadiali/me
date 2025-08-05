import { 
  Building2, 
  BookOpen, 
  FlaskConical, 
  Dumbbell,
  Utensils,
  Car,
  Trees,
  Wifi,
  Shield,
  Camera,
  Zap,
  Droplets,
  Wind,
  Users,
  Monitor,
  Microscope,
  Theater,
  Music,
  Palette,
  Heart,
  MapPin,
  Clock
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";

const SchoolFacilitiesComponent = () => {
  const mainBuildings = [
    {
      name: "Main Academic Building",
      icon: Building2,
      area: "85,000 sq ft",
      floors: 3,
      rooms: 48,
      features: ["40 Classrooms", "Administrative Offices", "Teacher Lounge", "Student Services", "Main Auditorium"],
      yearBuilt: "1985",
      lastRenovated: "2020"
    },
    {
      name: "Science & Technology Center",
      icon: FlaskConical,
      area: "35,000 sq ft",
      floors: 2,
      rooms: 22,
      features: ["8 Science Labs", "4 Computer Labs", "Engineering Workshop", "Robotics Lab", "Research Library"],
      yearBuilt: "2010",
      lastRenovated: "2022"
    },
    {
      name: "Arts & Performance Wing",
      icon: Theater,
      area: "25,000 sq ft",
      floors: 2,
      rooms: 18,
      features: ["Theater (500 seats)", "Music Rooms", "Art Studios", "Dance Studio", "Recording Studio"],
      yearBuilt: "2015",
      lastRenovated: "2023"
    },
    {
      name: "Athletic Complex",
      icon: Dumbbell,
      area: "45,000 sq ft",
      floors: 2,
      rooms: 15,
      features: ["Gymnasium", "Fitness Center", "Locker Rooms", "Equipment Storage", "Training Room"],
      yearBuilt: "2008",
      lastRenovated: "2021"
    }
  ];

  const specializedFacilities = [
    {
      category: "Laboratories",
      icon: Microscope,
      facilities: [
        { name: "Biology Lab", capacity: "30 students", equipment: "Microscopes, Specimen Collection, Dissection Tools" },
        { name: "Chemistry Lab", capacity: "28 students", equipment: "Fume Hoods, Analytical Equipment, Safety Systems" },
        { name: "Physics Lab", capacity: "32 students", equipment: "Measurement Tools, Electronics, Motion Sensors" },
        { name: "Computer Science Lab", capacity: "35 students", equipment: "High-end PCs, Programming Software, Servers" }
      ]
    },
    {
      category: "Athletics",
      icon: Dumbbell,
      facilities: [
        { name: "Main Gymnasium", capacity: "800 spectators", equipment: "Basketball Courts, Volleyball Nets, Scoreboard" },
        { name: "Fitness Center", capacity: "50 students", equipment: "Cardio Machines, Weight Training, Free Weights" },
        { name: "Swimming Pool", capacity: "Olympic size", equipment: "8 Lanes, Diving Board, Electronic Timing" },
        { name: "Track & Field", capacity: "400m track", equipment: "All-weather Surface, Field Events, Bleachers" }
      ]
    },
    {
      category: "Arts & Media",
      icon: Palette,
      facilities: [
        { name: "Art Studio", capacity: "25 students", equipment: "Easels, Kilns, Digital Tablets, Storage" },
        { name: "Music Room", capacity: "40 students", equipment: "Piano, Instruments, Sound System, Recording" },
        { name: "Drama Theater", capacity: "500 seats", equipment: "Stage Lighting, Sound System, Costume Storage" },
        { name: "Media Center", capacity: "20 students", equipment: "Video Equipment, Editing Software, Green Screen" }
      ]
    }
  ];

  const supportFacilities = [
    {
      name: "Library & Media Center",
      icon: BookOpen,
      details: {
        area: "8,000 sq ft",
        capacity: "150 students",
        collections: "25,000+ books, Digital databases, Multimedia resources",
        technology: "50 computers, Study pods, Presentation areas"
      }
    },
    {
      name: "Cafeteria & Kitchen",
      icon: Utensils,
      details: {
        area: "6,500 sq ft",
        capacity: "400 students",
        features: "Full commercial kitchen, Multiple serving lines, Outdoor seating",
        meals: "Breakfast, Lunch, Snacks served daily"
      }
    },
    {
      name: "Health & Wellness Center",
      icon: Heart,
      details: {
        area: "1,200 sq ft",
        capacity: "Full-time nurse",
        features: "Exam rooms, Rest area, Medical equipment, First aid supplies",
        services: "Health screenings, Emergency care, Medication management"
      }
    },
    {
      name: "Student Commons",
      icon: Users,
      details: {
        area: "4,000 sq ft",
        capacity: "200 students",
        features: "Lounge areas, Study spaces, Vending machines, Information kiosks",
        hours: "7:00 AM - 4:00 PM daily"
      }
    }
  ];

  const outdoorFacilities = [
    {
      name: "Football Stadium",
      capacity: "2,500 spectators",
      features: ["Artificial turf field", "Press box", "Concession stands", "Stadium lighting"],
      size: "120 yards"
    },
    {
      name: "Tennis Courts",
      capacity: "6 courts",
      features: ["All-weather surface", "Night lighting", "Spectator seating", "Equipment storage"],
      size: "Standard regulation"
    },
    {
      name: "Baseball/Softball Complex",
      capacity: "2 fields",
      features: ["Dugouts", "Batting cages", "Scoreboard", "Concession area"],
      size: "Regulation size"
    },
    {
      name: "Outdoor Learning Spaces",
      capacity: "Various sizes",
      features: ["Amphitheater", "Garden areas", "Picnic tables", "Weather protection"],
      size: "3 acres"
    }
  ];

  const technologyInfrastructure = [
    {
      category: "Network & Connectivity",
      details: [
        "High-speed fiber optic internet (1GB)",
        "Campus-wide WiFi coverage",
        "Student device program (1:1 tablets)",
        "Network security and filtering"
      ]
    },
    {
      category: "Classroom Technology",
      details: [
        "Interactive whiteboards in every classroom",
        "Document cameras and projectors",
        "Sound enhancement systems",
        "Video conferencing capabilities"
      ]
    },
    {
      category: "Security Systems",
      details: [
        "Campus-wide security cameras",
        "Access control systems",
        "Emergency communication system",
        "Visitor management system"
      ]
    }
  ];

  const maintenanceFeatures = [
    {
      system: "HVAC",
      details: "Energy-efficient climate control, Air filtration systems, Zone temperature control"
    },
    {
      system: "Electrical",
      details: "LED lighting throughout, Emergency backup power, Solar panel system"
    },
    {
      system: "Plumbing",
      details: "Water-efficient fixtures, Backflow prevention, Hot water systems"
    },
    {
      system: "Safety",
      details: "Fire suppression systems, Emergency exits, ADA compliance"
    }
  ];

  return (
    <ScrollArea className="h-[calc(100vh-350px)]">
      <div className="space-y-4 sm:space-y-6">
        {/* Campus Overview */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Campus Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Campus Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-dark">45</div>
                <div className="text-xs sm:text-sm text-gray-600">Total Acres</div>
              </div>
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-dark">4</div>
                <div className="text-xs sm:text-sm text-gray-600">Main Buildings</div>
              </div>
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-dark">190,000</div>
                <div className="text-xs sm:text-sm text-gray-600">Sq Ft Total</div>
              </div>
              <div className="bg-dark/5 p-3 rounded-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-dark">103</div>
                <div className="text-xs sm:text-sm text-gray-600">Total Rooms</div>
              </div>
            </div>

            {/* Facility Hours */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-sm sm:text-base text-dark mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-dark" />
                Facility Access Hours
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div>
                  <div className="font-medium text-dark">Academic Buildings</div>
                  <div className="text-gray-600">7:00 AM - 5:00 PM</div>
                </div>
                <div>
                  <div className="font-medium text-dark">Athletic Facilities</div>
                  <div className="text-gray-600">6:00 AM - 9:00 PM</div>
                </div>
                <div>
                  <div className="font-medium text-dark">Library</div>
                  <div className="text-gray-600">7:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Buildings */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Main Buildings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {mainBuildings.map((building, index) => (
                <div key={index} className="border border-dark/10 rounded-lg p-4 bg-dark/5">
                  <div className="flex items-start gap-3 mb-3">
                    <building.icon className="h-5 w-5 sm:h-6 sm:w-6 text-dark mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm sm:text-base text-dark">{building.name}</h4>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-xs sm:text-sm">
                        <div>
                          <span className="text-gray-600">Area: </span>
                          <span className="text-dark font-medium">{building.area}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Floors: </span>
                          <span className="text-dark font-medium">{building.floors}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Rooms: </span>
                          <span className="text-dark font-medium">{building.rooms}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Built: </span>
                          <span className="text-dark font-medium">{building.yearBuilt}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {building.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-white px-2 py-1 rounded border text-gray-600">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-2 text-xs text-gray-600">
                    Last Renovated: {building.lastRenovated}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Specialized Facilities */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <FlaskConical className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Specialized Facilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {specializedFacilities.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-dark flex items-center gap-2">
                  <category.icon className="h-4 w-4 text-dark" />
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {category.facilities.map((facility, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <h5 className="font-medium text-xs sm:text-sm text-dark">{facility.name}</h5>
                      <div className="mt-2 space-y-1">
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">Capacity: </span>{facility.capacity}
                        </div>
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">Equipment: </span>{facility.equipment}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Support Facilities */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Support Facilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {supportFacilities.map((facility, index) => (
                <div key={index} className="bg-dark/5 border border-dark/10 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <facility.icon className="h-5 w-5 text-dark mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-dark">{facility.name}</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs sm:text-sm">
                    {Object.entries(facility.details).map(([key, value], idx) => (
                      <div key={idx}>
                        <span className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Outdoor Facilities */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Trees className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Outdoor Facilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {outdoorFacilities.map((facility, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-sm sm:text-base text-dark">{facility.name}</h4>
                    <div className="text-xs text-gray-600">
                      {facility.capacity}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm">
                      <span className="font-medium text-gray-700">Size: </span>
                      <span className="text-gray-600">{facility.size}</span>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-1">Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {facility.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded border text-gray-600">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technology Infrastructure */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Monitor className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Technology Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {technologyInfrastructure.map((tech, index) => (
              <div key={index} className="bg-dark/5 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">{tech.category}</h4>
                <ul className="space-y-1">
                  {tech.details.map((detail, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-dark rounded-full flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Building Systems & Maintenance */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Building Systems & Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {maintenanceFeatures.map((system, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-dark mb-2 flex items-center gap-2">
                    {system.system === "HVAC" && <Wind className="h-4 w-4 text-dark" />}
                    {system.system === "Electrical" && <Zap className="h-4 w-4 text-dark" />}
                    {system.system === "Plumbing" && <Droplets className="h-4 w-4 text-dark" />}
                    {system.system === "Safety" && <Shield className="h-4 w-4 text-dark" />}
                    {system.system}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700">{system.details}</p>
                </div>
              ))}
            </div>
            
            {/* Maintenance Schedule */}
            <div className="mt-4 bg-dark/5 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-sm sm:text-base text-dark mb-2">Maintenance Schedule</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div>
                  <div className="font-medium text-dark">Daily</div>
                  <div className="text-gray-600">Cleaning, Basic inspections</div>
                </div>
                <div>
                  <div className="font-medium text-dark">Weekly</div>
                  <div className="text-gray-600">Equipment checks, Grounds maintenance</div>
                </div>
                <div>
                  <div className="font-medium text-dark">Seasonal</div>
                  <div className="text-gray-600">Deep cleaning, System servicing</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Accessibility & Safety Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-dark">Accessibility</h4>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                    <li>• ADA compliant ramps and doorways</li>
                    <li>• Elevator access to all floors</li>
                    <li>• Accessible restrooms on every floor</li>
                    <li>• Braille signage throughout campus</li>
                    <li>• Audio/visual fire alarm systems</li>
                    <li>• Designated parking spaces</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm sm:text-base text-dark">Safety & Security</h4>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                    <li>• 24/7 security monitoring</li>
                    <li>• Controlled access entry points</li>
                    <li>• Emergency communication system</li>
                    <li>• Fire suppression in all buildings</li>
                    <li>• Emergency evacuation plans</li>
                    <li>• On-site security personnel</li>
                  </ul>
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

export default SchoolFacilitiesComponent;
