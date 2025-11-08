import { BookOpen } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

const SchoolDescriptionComponent = ({ aboutSection1, aboutSection2 }) => {
  return (
    <Card className="border border-primary mb-5 shadow-lg shadow-primary/10 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="text-base sm:text-lg md:text-xl flex items-center gap-2 transition-colors duration-300 hover:text-primary/80">
          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5  transition-transform duration-300 hover:scale-110" />
          About Our School
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <p className="text-primary/75 leading-relaxed text-xs sm:text-sm md:text-base transition-colors duration-300 hover:text-primary/90">
          {aboutSection1 ||
            "Once the management updates their profile, you’ll be able to learn more about their vision and facilities."}
        </p>
        <p className="text-primary/75 leading-relaxed text-xs sm:text-sm md:text-base transition-colors duration-300 hover:text-primary/90">
          {aboutSection2 || ""}
        </p>
      </CardContent>
    </Card>
  );
};

export default SchoolDescriptionComponent;
