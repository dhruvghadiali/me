import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CalendarDaysIcon, GraduationCapIcon } from "lucide-react";

import _ from "lodash";

const AdmissionFormHistoryComponent = () => {
  const { admissionForms } = useSelector((state) => state.admissionForm);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(admissionForms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAdmissions = admissionForms.slice(startIndex, endIndex);

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-success/10 text-success border-success/30";
      case "pending":
        return "bg-warning/10 text-warning border-warning/30";
      case "rejected":
        return "bg-danger/10 text-danger border-danger/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusBadge = (status) => {
    const labels = {
      accepted: "Accepted",
      pending: "Pending",
      rejected: "Rejected",
    };
    return labels[status] || status;
  };

  return (
    <div className="lg:col-span-2">
      {/* Card: p-4 mobile | p-5 tablet | p-6 desktop | p-8 large */}
      <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl border border-border p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
        {/* Header: text-xl mobile | text-2xl tablet/desktop */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-foreground">
            Your Applications
          </h2>
          <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full w-fit">
            {admissionForms.length} Applications
          </span>
        </div>

        {admissionForms && _.size(admissionForms) === 0 ? (
          <div className="text-center py-8 sm:py-10 md:py-12">
            <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-lg text-center text-muted-foreground px-2">
              No applications found. Start applying to schools today!
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-5 md:mb-6">
              {currentAdmissions.map((admission) => (
                <div
                  key={admission.id}
                  className="group bg-background rounded-lg sm:rounded-xl border border-border p-3 sm:p-4 md:p-5 lg:p-6 hover:border-primary/50"
                >
                  {/* Mobile: flex-col | Tablet+: flex-row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-4">
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                      {/* School name: text-base mobile | text-lg tablet+ */}
                      <h3 className="text-base sm:text-lg md:text-lg font-semibold text-foreground mb-1 sm:mb-2 truncate">
                        {admission.schoolName}
                      </h3>
                      {/* Info: flex-col mobile | flex-row tablet+ */}
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-2 md:gap-3 text-xs sm:text-sm">
                        <span className="text-muted-foreground truncate">
                          <CalendarDaysIcon className="inline-block mr-1 w-4 h-4 text-primary" />{" "}
                          {new Date(admission.appliedDate).toLocaleDateString()}
                        </span>
                        <span className="text-muted-foreground truncate">
                          <GraduationCapIcon className="inline-block mr-1 w-4 h-4 text-primary" />{" "}
                          {admission.grade}
                        </span>
                      </div>
                    </div>

                    {/* Right Content - Status Badge */}
                    {/* Mobile: flex-col | Tablet+: flex-row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 md:gap-3 mt-2 sm:mt-0">
                      <span
                        className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-lg border font-semibold text-xs sm:text-sm whitespace-nowrap ${getStatusColor(
                          admission.status
                        )}`}
                      >
                        {getStatusBadge(admission.status)}
                      </span>
                      <button className="p-1 sm:p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary">
                        →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-border overflow-x-auto pb-2 sm:pb-0">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted text-xs sm:text-sm font-medium whitespace-nowrap"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg border font-semibold text-xs sm:text-sm whitespace-nowrap ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted text-xs sm:text-sm font-medium whitespace-nowrap"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdmissionFormHistoryComponent;
