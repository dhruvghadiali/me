import { Users, GraduationCap, Award, Star } from "lucide-react";
import { Card, CardContent } from "@MEShadcnComponents/card";

const SchoolKeyStatisticsComponent = (props) => {
  const { studentsEnrolled, facultyMembers, graduationRate, schoolRating } =
    props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
      <Card className="border-primary/10 bg-gradient-to-br from-primary to-primary/90 text-background transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
        <CardContent className="p-3 sm:p-4 text-center">
          <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-background" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
            {studentsEnrolled || "-"}
          </h3>
          <p className="text-xs sm:text-sm text-background">
            Students Enrolled
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary/10 bg-gradient-to-br from-primary to-primary/90 text-background transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
        <CardContent className="p-3 sm:p-4 text-center">
          <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-background" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
            {facultyMembers || "-"}
          </h3>
          <p className="text-xs sm:text-sm text-background">Faculty Members</p>
        </CardContent>
      </Card>

      <Card className="border-primary/10 bg-gradient-to-br from-primary to-primary/90 text-background transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
        <CardContent className="p-3 sm:p-4 text-center">
          <Award className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-background" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
            {graduationRate || "-"}
          </h3>
          <p className="text-xs sm:text-sm text-background">Graduation Rate</p>
        </CardContent>
      </Card>

      <Card className="border-primary/10 bg-gradient-to-br from-primary to-primary/90 text-background transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.00] cursor-pointer">
        <CardContent className="p-3 sm:p-4 text-center">
          <Star className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-background" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
            {schoolRating || "-"}
          </h3>
          <p className="text-xs sm:text-sm text-background">School Rating</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolKeyStatisticsComponent;
