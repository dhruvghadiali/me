import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

const SchoolHighlightsComponent = () => {
  return (
    <Card className="border border-primary mb-5 shadow-lg shadow-primary/10 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="text-base sm:text-lg md:text-xl flex items-center gap-2">
          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
          School Highlights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-xs sm:text-sm md:text-base">
              Academic Excellence
            </h4>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <p className="w-fit line-clamp-3">Advanced Placement (AP)</p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <p className="w-fit line-clamp-3">Advanced Placement (AP)</p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <p className="w-fit line-clamp-3"> STEM Excellence Program </p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <p className="w-fit line-clamp-3"> Honor Roll Recognition </p>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-xs sm:text-sm md:text-base">
              Student Support
            </h4>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <p className="w-fit line-clamp-3">Academic Counseling Services</p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <p className="w-fit line-clamp-3">Career Guidance Programs</p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <p className="w-fit line-clamp-3">Mental Health Support</p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <p className="w-fit line-clamp-3">Scholarship Assistance</p>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolHighlightsComponent;
