import { GraduationCapIcon } from "lucide-react";

const NewAdmissionFormHeaderComponent = () => {
  return (
    <div className="text-center mb-4 sm:mb-5 md:mb-6">
      <div className="flex justify-center mb-3 sm:mb-4">
        <GraduationCapIcon className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
        Apply to New School
      </h3>
      <p className="text-xs sm:text-sm text-muted-foreground px-1">
        Start your admission journey with a new school
      </p>
    </div>
  );
};

export default NewAdmissionFormHeaderComponent;
