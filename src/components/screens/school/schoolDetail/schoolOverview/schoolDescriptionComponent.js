import { BookOpen } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

const SchoolDescriptionComponent = () => {
  return (
    <Card className="border border-dark mb-5 shadow-lg shadow-dark/10 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex items-center gap-2 transition-colors duration-300 hover:text-dark/80">
          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-dark transition-transform duration-300 hover:scale-110" />
          About Our School
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base transition-colors duration-300 hover:text-gray-900">
          Springfield High School is a premier educational institution
          established in 1985, committed to providing excellence in education
          and fostering holistic development of students. With state-of-the-art
          facilities and experienced faculty, we prepare students for success in
          their academic and professional endeavors.
        </p>
        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base transition-colors duration-300 hover:text-gray-900">
          Our mission is to create a nurturing environment where every student
          can discover their potential, develop critical thinking skills, and
          become responsible global citizens. We believe in the power of
          education to transform lives and communities.
        </p>
      </CardContent>
    </Card>
  );
};

export default SchoolDescriptionComponent;
