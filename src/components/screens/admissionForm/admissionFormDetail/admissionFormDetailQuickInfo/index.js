import { useSelector } from "react-redux";

import _ from "lodash";
import moment from "moment";

const AdmissionFormDetailQuickInfoComponent = () => {
  const { admissionForm } = useSelector((state) => state.admissionForm);
  return (
    <div className="bg-gradient-to-br from-card to-card/95 rounded-lg sm:rounded-xl md:rounded-2xl border border-primary/30 p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6 pb-4 sm:pb-5 md:pb-6 border-b border-primary/30">
        <div>
          <p className="text-xs md:text-sm text-muted-foreground mb-1.5 sm:mb-2 font-semibold uppercase tracking-wide">
            Status
          </p>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-lg border border-primary/50 font-semibold text-xs sm:text-sm transition-all">
            {_.upperCase(admissionForm?.status) || "N/A"}
          </span>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-xs md:text-sm text-muted-foreground mb-1.5 sm:mb-2 font-semibold uppercase tracking-wide">
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
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
            Board
          </p>
          <p className="text-xs sm:text-sm font-bold text-foreground truncate">
            {_.upperCase(
              admissionForm?.schoolAcademicClass?.educationBoard?.educationBoard
            ) || "N/A"}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
            Class
          </p>
          <p className="text-xs sm:text-sm font-bold text-foreground truncate">
            {_.upperCase(
              admissionForm?.schoolAcademicClass?.academicClass?.academicClass
            ) || "N/A"}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
            Payment
          </p>
          <p className="text-xs sm:text-sm font-bold text-foreground">
            {_.upperCase(admissionForm?.paymentMethod) || "N/A"}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
            Created
          </p>
          <p className="text-xs sm:text-sm font-bold text-foreground">
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
