import { useSelector } from "react-redux";

import _ from "lodash";
import moment from "moment";

const AdmissionFormDetailQuickInfoComponent = () => {
  const { admissionForm } = useSelector((state) => state.admissionForm);
  return (
    <div className="bg-gradient-to-br from-card to-card/95 rounded-lg sm:rounded-xl md:rounded-2xl border border-primary/30 p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6 pb-4 sm:pb-5 md:pb-6 border-b border-primary/30">
        <div className="flex-1 w-full sm:w-auto">
          <p className="text-xs sm:text-xs md:text-sm text-muted-foreground mb-2 sm:mb-2.5 md:mb-3 font-semibold uppercase tracking-wide">
            Status
          </p>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-lg border border-primary/60 bg-primary/5 font-semibold text-xs sm:text-sm md:text-sm text-primary transition-all">
            {_.upperCase(admissionForm?.status) || "N/A"}
          </span>
        </div>
        <div className="flex-1 sm:text-right">
          <p className="text-xs sm:text-xs md:text-sm text-muted-foreground mb-1 sm:mb-1.5 md:mb-2 font-semibold uppercase tracking-wide">
            Academic Session
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary">
            {admissionForm?.academicSession || "N/A"}
          </p>
        </div>
      </div>

      {/* Quick Info Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        <div className="space-y-1">
          <p className="text-xs sm:text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wide line-clamp-1">
            Board
          </p>
          <p className="text-xs sm:text-sm md:text-sm font-bold text-foreground truncate">
            {_.upperCase(
              admissionForm?.schoolAcademicClass?.educationBoard?.educationBoard
            ) || "N/A"}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs sm:text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wide line-clamp-1">
            Class
          </p>
          <p className="text-xs sm:text-sm md:text-sm font-bold text-foreground truncate">
            {_.upperCase(
              admissionForm?.schoolAcademicClass?.academicClass?.academicClass
            ) || "N/A"}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs sm:text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wide line-clamp-1">
            Payment
          </p>
          <p className="text-xs sm:text-sm md:text-sm font-bold text-foreground truncate">
            {_.upperCase(admissionForm?.paymentMethod) || "N/A"}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs sm:text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wide line-clamp-1">
            Created
          </p>
          <p className="text-xs sm:text-sm md:text-sm font-bold text-foreground">
            {moment(admissionForm?.createdAt).isValid()
              ? moment(admissionForm?.createdAt).format("DD MMMM YYYY")
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormDetailQuickInfoComponent;
