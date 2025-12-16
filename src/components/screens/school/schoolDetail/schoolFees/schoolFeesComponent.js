import { GraduationCap, IndianRupeeIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";
import { setSelectedEducationBoardForSchoolFeesTab } from "@MERedux/school/schoolSlice";
import {
  schoolFeesOverviewHeader,
  schoolAcademicClasses,
  schoolFeesAreNotSelectedMessage,
  schoolFeesEducationBoardIsNotSelectedMessage,
  schoolAcademicClassTotalStudents,
  monthlyFee, 
  quarterlyFee,
  halfYearlyFee,
  yearlyFee,
  selectEducationBoardPlaceholder,
} from "@MELocalization/languages/en";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@MEShadcnComponents/select";

import _ from "lodash";

const SchoolFeesComponent = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { selectedEducationBoardForSchoolFeesTab, school } = useSelector(
    (state) => state.school
  );

  return (
    <ScrollArea className="h-[calc(100vh-350px)]">
      <div className="space-y-4 sm:space-y-6">
        {/* Academic Overview */}
        <Card className="border-dark/10">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg md:text-xl text-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-dark" />
                {_.upperFirst(
                  t("schoolFeesOverviewHeader", {
                    defaultValue: schoolFeesOverviewHeader,
                  })
                )}
              </div>
              <div className="w-full sm:w-[200px]">
                <Select
                  onValueChange={(value) =>
                    dispatch(setSelectedEducationBoardForSchoolFeesTab(value))
                  }
                >
                  <SelectTrigger className="w-full bg-dark/5 border border-dark/20 text-dark">
                    <SelectValue
                      placeholder={_.upperFirst(
                        t("selectEducationBoardPlaceholder", {
                          defaultValue: selectEducationBoardPlaceholder,
                        })
                      )}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {school.educationBoardsDropdown &&
                        school.educationBoardsDropdown.length > 0 &&
                        _.map(
                          school.educationBoardsDropdown,
                          (board, index) => (
                            <SelectItem key={index} value={board.value}>
                              {_.upperFirst(board.label)}
                            </SelectItem>
                          )
                        )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Grade Level Enrollment */}
            <div>
              {!selectedEducationBoardForSchoolFeesTab ? (
                <div className="flex items-center justify-center py-8 sm:py-12">
                  <div className="text-center">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {_.upperFirst(
                        t("schoolFeesEducationBoardIsNotSelectedMessage", {
                          defaultValue:
                            schoolFeesEducationBoardIsNotSelectedMessage,
                        })
                      )}
                    </p>
                  </div>
                </div>
              ) : (
                (() => {
                  const filteredFees = _.filter(
                    school.fees,
                    {
                      educationBoard: selectedEducationBoardForSchoolFeesTab,
                    }
                  );

                  return filteredFees.length === 0 ? (
                    <div className="flex items-center justify-center py-8 sm:py-12">
                      <div className="text-center">
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {_.upperFirst(
                            t("schoolFeesAreNotSelectedMessage", {
                              defaultValue:
                                schoolFeesAreNotSelectedMessage,
                            })
                          )}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-dark mb-3">
                        {_.upperFirst(
                          t("schoolAcademicClasses", {
                            defaultValue: schoolAcademicClasses,
                          })
                        )}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {_.map(
                          filteredFees,
                          (fees, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg text-center bg-gray-50 border border-dark/10"
                            >
                              <h5 className="font-semibold text-sm text-dark text-left">
                                {_.upperFirst(fees?.academicClass) ||
                                  "N/A"}
                              </h5>
                              <div className="mt-2 space-y-1">
                                <div className="flex justify-between items-center text-xs">
                                  <span className="text-gray-600">
                                    {_.upperFirst(
                                      t("monthlyFee", {
                                        defaultValue:
                                          monthlyFee,
                                      })
                                    )}
                                  </span>
                                  <span className="text-dark font-medium">
                                    <IndianRupeeIcon className="inline-block w-3 h-3 mr-1" />
                                    {fees?.totalMonthlyFee || "N/A"}
                                  </span>
                                </div>
                              </div>
                              <div className="mt-2 space-y-1">
                                <div className="flex justify-between items-center text-xs">
                                  <span className="text-gray-600">
                                    {_.upperFirst(
                                      t("quarterlyFee", {
                                        defaultValue:
                                          quarterlyFee,
                                      })
                                    )}
                                  </span>
                                  <span className="text-dark font-medium">
                                    <IndianRupeeIcon className="inline-block w-3 h-3 mr-1" />
                                    {fees?.totalQuarterlyFee || "N/A"}
                                  </span>
                                </div>
                              </div>
                              <div className="mt-2 space-y-1">
                                <div className="flex justify-between items-center text-xs">
                                  <span className="text-gray-600">
                                    {_.upperFirst(
                                      t("halfYearlyFee", {
                                        defaultValue:
                                          halfYearlyFee,
                                      })
                                    )}
                                  </span>
                                  <span className="text-dark font-medium">
                                    <IndianRupeeIcon className="inline-block w-3 h-3 mr-1" />
                                    {fees?.totalHalfYearlyFee || "N/A"}
                                  </span>
                                </div>
                              </div>
                              <div className="mt-2 space-y-1">
                                <div className="flex justify-between items-center text-xs">
                                  <span className="text-gray-600">
                                    {_.upperFirst(
                                      t("yearlyFee", {
                                        defaultValue:
                                          yearlyFee,
                                      })
                                    )}
                                  </span>
                                  <span className="text-dark font-medium">
                                    <IndianRupeeIcon className="inline-block w-3 h-3 mr-1" />
                                    {fees?.totalYearlyFee || "N/A"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  );
                })()
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <ScrollBar orientation="vertical" className="bg-dark" />
    </ScrollArea>
  );
};

export default SchoolFeesComponent;
