import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CalendarDaysIcon,
  GraduationCapIcon,
  FileTextIcon,
  BookOpenIcon,
} from "lucide-react";

import { ME_BUTTON_COMPONENT_VARIANTS } from "@MEHelpers/enums";
import { toggleAdmissionFormCardVisibility } from "@MERedux/admissionForm/admissionFormSlice";

import _ from "lodash";
import moment from "moment";

import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import MEButton from "@MECommonComponents/button/meButton";

const AdmissionFormHistoryComponent = () => {
  const dispatch = useDispatch();
  const { admissionForms, admissionFormsLoader } = useSelector(
    (state) => state.admissionForm
  );

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(admissionForms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAdmissions = admissionForms.slice(startIndex, endIndex);

  const onClick = (admissionId) => {
    if (!admissionId) return;
    dispatch(
      toggleAdmissionFormCardVisibility({
        status: true,
        admissionForm: admissionForms.find(
          (admission) => admission.id === admissionId
        ),
      })
    );
  };
  return (
    <div className="lg:col-span-2">
      {/* Card: p-3 mobile | p-4 tablet | p-5 desktop | p-6 large | p-7 xl */}
      <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl border border-border p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 shadow-lg">
        {/* Header: text-lg mobile | text-lg tablet | text-xl desktop | text-2xl large */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground">
            Your Applications
          </h2>
          <span className="text-xs sm:text-xs md:text-sm lg:text-base font-semibold text-primary bg-primary/10 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full w-fit">
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
            <div className="space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-4 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              {currentAdmissions.map((admission) => (
                <div
                  key={admission.id}
                  className="group bg-background rounded-lg sm:rounded-xl md:rounded-2xl border border-border p-2 sm:p-3 md:p-3 lg:p-3 hover:border-primary/50 transition-colors duration-200"
                >
                  {/* Mobile: flex-col | Tablet+: flex-row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                      {/* School name: text-sm mobile | text-sm tablet | text-base desktop+ */}
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 truncate">
                        {_.upperCase(
                          admission?.schoolAcademicClass?.school?.name
                        ) || "(School Name) N/A"}
                      </h3>
                      {/* Info: flex-col mobile | flex-row tablet+ */}
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 text-xs sm:text-xs md:text-sm lg:text-base">
                        <span className="inline-flex items-center gap-1 text-muted-foreground truncate">
                          <FileTextIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          {admission?.applicationNumber || "N/A"}
                        </span>
                        <span className="inline-flex items-center gap-1 text-muted-foreground truncate">
                          <BookOpenIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          {_.upperCase(
                            admission?.schoolAcademicClass?.educationBoard
                              ?.educationBoard
                          ) || "N/A"}
                        </span>
                        <span className="inline-flex items-center gap-1 text-muted-foreground truncate">
                          <CalendarDaysIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          {moment(admission.createdAt).isValid()
                            ? moment(admission.createdAt).format("DD MMMM YYYY")
                            : "N/A"}
                        </span>
                        <span className="inline-flex items-center gap-1 text-muted-foreground truncate">
                          <GraduationCapIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          {_.upperCase(
                            admission?.schoolAcademicClass?.academicClass
                              ?.academicClass
                          ) || "N/A"}
                        </span>
                      </div>
                    </div>

                    <MEButton
                      buttonVariant={ME_BUTTON_COMPONENT_VARIANTS.PRIMARY}
                      onClick={() => onClick(admission?.id || "")}
                    >
                      {_.upperFirst(admission?.status) || "Draft"}
                    </MEButton>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 mt-4 sm:mt-5 md:mt-6 lg:mt-7 pt-3 sm:pt-4 md:pt-5 border-t border-border">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-2 sm:px-2.5 md:px-3 lg:px-3.5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-md border border-border bg-background text-foreground font-medium text-xs sm:text-xs md:text-xs lg:text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 whitespace-nowrap flex items-center gap-1"
              >
                <span>←</span>
                <span className="hidden sm:inline">Prev</span>
              </button>

              <div className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 text-foreground font-medium text-xs sm:text-xs md:text-xs lg:text-sm whitespace-nowrap">
                <span>Page</span>
                <span className="text-primary font-bold text-xs sm:text-xs md:text-sm lg:text-base">{currentPage}</span>
                <span>of</span>
                <span className="text-primary font-bold text-xs sm:text-xs md:text-sm lg:text-base">{totalPages}</span>
              </div>

              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-2 sm:px-2.5 md:px-3 lg:px-3.5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-md border border-border bg-background text-foreground font-medium text-xs sm:text-xs md:text-xs lg:text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 whitespace-nowrap flex items-center gap-1"
              >
                <span className="hidden sm:inline">Next</span>
                <span>→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdmissionFormHistoryComponent;
