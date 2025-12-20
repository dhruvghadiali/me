import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CalendarDaysIcon, GraduationCapIcon } from "lucide-react";

import { ME_BUTTON_COMPONENT_VARIANTS } from "@MEHelpers/enums";

import _ from "lodash";
import moment from "moment";

import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import MEButton from "@MECommonComponents/button/meButton";

const AdmissionFormHistoryComponent = () => {
  const { admissionForms, admissionFormsLoader } = useSelector(
    (state) => state.admissionForm
  );

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(admissionForms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAdmissions = admissionForms.slice(startIndex, endIndex);

  return (
    <div className="lg:col-span-2">
      {/* Card: p-3 mobile | p-4 tablet | p-6 desktop | p-8 large | p-10 xl */}
      <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl border border-border p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 shadow-lg">
        {/* Header: text-lg mobile | text-xl tablet | text-2xl desktop | text-3xl large */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
            Your Applications
          </h2>
          <span className="text-xs sm:text-sm md:text-base font-semibold text-primary bg-primary/10 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full w-fit">
            {admissionForms.length} Applications
          </span>
        </div>

        {admissionFormsLoader ? (
          <div className="flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-24">
            <MELoaderIcon />
          </div>
        ) : admissionForms && _.size(admissionForms) === 0 ? (
          <div className="text-center py-12 sm:py-16 md:py-20 lg:py-24">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-muted-foreground px-4 sm:px-6">
              No applications found. Start applying to schools today!
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              {currentAdmissions.map((admission) => (
                <div
                  key={admission.id}
                  className="group bg-background rounded-lg sm:rounded-xl md:rounded-2xl border border-border p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 hover:border-primary/50 transition-colors duration-200"
                >
                  {/* Mobile: flex-col | Tablet+: flex-row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-4">
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                      {/* School name: text-sm mobile | text-base tablet | text-lg desktop+ */}
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3 truncate">
                        {_.upperCase(
                          admission?.schoolAcademicClass?.school?.name
                        ) || "(School Name) N/A"}
                      </h3>
                      {/* Info: flex-col mobile | flex-row tablet+ */}
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 text-xs sm:text-sm md:text-base">
                        <span className="inline-flex items-center gap-1 text-muted-foreground truncate">
                          <CalendarDaysIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          {moment(admission.createdAt).isValid()
                            ? moment(admission.createdAt).format("DD MMMM YYYY")
                            : "N/A"}
                        </span>
                        <span className="inline-flex items-center gap-1 text-muted-foreground truncate">
                          <GraduationCapIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          {_.upperCase(
                            admission?.schoolAcademicClass?.academicClass
                              ?.academicClass
                          ) || "N/A"}
                        </span>
                      </div>
                    </div>

                    <MEButton
                      buttonVariant={ME_BUTTON_COMPONENT_VARIANTS.PRIMARY}
                    >
                      {_.upperFirst(admission?.status) || "Draft"}
                    </MEButton>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-border overflow-x-auto pb-2 sm:pb-0">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted text-xs sm:text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-150"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-lg border font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors duration-150 ${
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
                className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted text-xs sm:text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-150"
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
