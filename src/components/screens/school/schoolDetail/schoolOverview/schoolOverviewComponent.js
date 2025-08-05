import {
  Users,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  Building,
  Star,
  TrendingUp,
  BookOpen,
  Heart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";

const SchoolOverviewComponent = () => {
  return (
    <ScrollArea className="h-[calc(100vh-350px)]">
      <div className="space-y-4 sm:space-y-6">
        {/* School Description */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              About Our School
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
              Springfield High School is a premier educational institution
              established in 1985, committed to providing excellence in
              education and fostering holistic development of students. With
              state-of-the-art facilities and experienced faculty, we prepare
              students for success in their academic and professional endeavors.
            </p>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
              Our mission is to create a nurturing environment where every
              student can discover their potential, develop critical thinking
              skills, and become responsible global citizens. We believe in the
              power of education to transform lives and communities.
            </p>
          </CardContent>
        </Card>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="border-dark/10 bg-gradient-to-br from-dark to-dark/90 text-white">
            <CardContent className="p-3 sm:p-4 text-center">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-white" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                1,200+
              </h3>
              <p className="text-xs sm:text-sm text-gray-200">
                Students Enrolled
              </p>
            </CardContent>
          </Card>

          <Card className="border-dark/10 bg-gradient-to-br from-dark to-dark/90 text-white">
            <CardContent className="p-3 sm:p-4 text-center">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-white" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">85+</h3>
              <p className="text-xs sm:text-sm text-gray-200">
                Faculty Members
              </p>
            </CardContent>
          </Card>

          <Card className="border-dark/10 bg-gradient-to-br from-dark to-dark/90 text-white">
            <CardContent className="p-3 sm:p-4 text-center">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-white" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">95%</h3>
              <p className="text-xs sm:text-sm text-gray-200">
                Graduation Rate
              </p>
            </CardContent>
          </Card>

          <Card className="border-dark/10 bg-gradient-to-br from-dark to-dark/90 text-white">
            <CardContent className="p-3 sm:p-4 text-center">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-white" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                4.8/5
              </h3>
              <p className="text-xs sm:text-sm text-gray-200">School Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* School Highlights */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              School Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-xs sm:text-sm md:text-base text-dark">
                  Academic Excellence
                </h4>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-dark rounded-full"></div>
                    Advanced Placement (AP) Courses
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-dark rounded-full"></div>
                    International Baccalaureate (IB) Program
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-dark rounded-full"></div>
                    STEM Excellence Program
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-dark rounded-full"></div>
                    Honor Roll Recognition
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-xs sm:text-sm md:text-base text-dark">
                  Student Support
                </h4>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-dark rounded-full"></div>
                    Academic Counseling Services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-dark rounded-full"></div>
                    Career Guidance Programs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-dark rounded-full"></div>
                    Mental Health Support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-dark rounded-full"></div>
                    Scholarship Assistance
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* School Organization Details */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2">
              <Building className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
              Organization Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Basic Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base text-dark mb-2">
                    Institution Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">School Code:</span>
                      <span className="font-medium text-dark">
                        SPH-2024-001
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Established:</span>
                      <span className="font-medium text-dark">1985</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">School Type:</span>
                      <span className="font-medium text-dark">
                        Public High School
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Education Board:</span>
                      <span className="font-medium text-dark">State Board</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base text-dark mb-2">
                    Accreditation & Affiliations
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Accredited by:</span>
                      <span className="font-medium text-dark">WASC</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Member of:</span>
                      <span className="font-medium text-dark">NAIS</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium text-dark">
                        ISO 9001:2015
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Grade Levels:</span>
                      <span className="font-medium text-dark">9-12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-xs sm:text-sm md:text-base text-dark mb-3">
                Contact Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-dark mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-xs sm:text-sm text-dark">
                        Main Campus
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        123 Green Street
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Springfield, IL 62704
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-dark" />
                    <div>
                      <p className="text-xs sm:text-sm text-dark">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-dark" />
                    <div>
                      <p className="text-xs sm:text-sm text-dark">
                        info@springfieldhigh.edu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-dark" />
                    <div>
                      <p className="text-xs sm:text-sm text-dark">
                        www.springfieldhigh.edu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Administrative Information */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-xs sm:text-sm md:text-base text-dark mb-3">
                Administrative Team
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-xs sm:text-sm text-dark">
                    Principal
                  </h5>
                  <p className="text-xs text-gray-600">Dr. Sarah Johnson</p>
                  <p className="text-xs text-gray-500">sarah.johnson@shs.edu</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-xs sm:text-sm text-dark">
                    Vice Principal
                  </h5>
                  <p className="text-xs text-gray-600">Mr. Michael Davis</p>
                  <p className="text-xs text-gray-500">michael.davis@shs.edu</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-xs sm:text-sm text-dark">
                    Academic Director
                  </h5>
                  <p className="text-xs text-gray-600">Dr. Emily Chen</p>
                  <p className="text-xs text-gray-500">emily.chen@shs.edu</p>
                </div>
              </div>
            </div>

            {/* School Values */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-xs sm:text-sm md:text-base text-dark mb-3 flex items-center gap-2">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-dark" />
                Our Values
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="text-center p-3 bg-dark/5 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark rounded-full flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <h5 className="font-medium text-xs sm:text-sm text-dark">
                    Excellence
                  </h5>
                  <p className="text-xs text-gray-600 mt-1">
                    Striving for the highest standards
                  </p>
                </div>
                <div className="text-center p-3 bg-dark/5 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <h5 className="font-medium text-xs sm:text-sm text-dark">
                    Community
                  </h5>
                  <p className="text-xs text-gray-600 mt-1">
                    Building strong relationships
                  </p>
                </div>
                <div className="text-center p-3 bg-dark/5 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <h5 className="font-medium text-xs sm:text-sm text-dark">
                    Growth
                  </h5>
                  <p className="text-xs text-gray-600 mt-1">
                    Continuous improvement
                  </p>
                </div>
                <div className="text-center p-3 bg-dark/5 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <h5 className="font-medium text-xs sm:text-sm text-dark">
                    Integrity
                  </h5>
                  <p className="text-xs text-gray-600 mt-1">
                    Honest and ethical practices
                  </p>
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

export default SchoolOverviewComponent;
