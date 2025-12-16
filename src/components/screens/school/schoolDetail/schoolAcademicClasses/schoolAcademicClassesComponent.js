import { GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";
import { setSelectedEducationBoardForAcademicClassesTab } from "@MERedux/school/schoolSlice";
import {
  schoolAcademicClassesOverviewHeader,
  schoolAcademicClasses,
  schoolEducationBoardIsNotSelectedMessage,
  schoolAcademicClassesAreNotAvailableMessage,
  schoolAcademicClassTotalStudents,
  schoolAcademicClassTotalClasses,
  schoolAcademicClassAvgSize,
  schoolAcademicClassCampusName,
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

const SchoolAcademicClassesComponent = ({ school }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { selectedEducationBoardForAcademicClassesTab } = useSelector(
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
                  t("schoolAcademicClassesOverviewHeader", {
                    defaultValue: schoolAcademicClassesOverviewHeader,
                  })
                )}
              </div>
              <div className="w-full sm:w-[200px]">
                <Select
                  onValueChange={(value) =>
                    dispatch(
                      setSelectedEducationBoardForAcademicClassesTab(value)
                    )
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
              {!selectedEducationBoardForAcademicClassesTab ? (
                <div className="flex items-center justify-center py-8 sm:py-12">
                  <div className="text-center">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {_.upperFirst(
                        t("schoolEducationBoardIsNotSelectedMessage", {
                          defaultValue:
                            schoolEducationBoardIsNotSelectedMessage,
                        })
                      )}
                    </p>
                  </div>
                </div>
              ) : (
                (() => {
                  const filteredAcademicClasses = _.filter(
                    school.academicClasses,
                    {
                      educationBoard:
                        selectedEducationBoardForAcademicClassesTab,
                    }
                  );

                  return filteredAcademicClasses.length === 0 ? (
                    <div className="flex items-center justify-center py-8 sm:py-12">
                      <div className="text-center">
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {_.upperFirst(
                            t("schoolAcademicClassesAreNotAvailableMessage", {
                              defaultValue:
                                schoolAcademicClassesAreNotAvailableMessage,
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
                          filteredAcademicClasses,
                          (academicClass, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg text-center bg-gray-50 border border-dark/10"
                            >
                              <h5 className="font-semibold text-sm text-dark text-left">
                                {_.upperFirst(academicClass?.academicClass) ||
                                  "N/A"}
                              </h5>
                              <div className="mt-2 space-y-1">
                                <div className="flex justify-between items-center text-xs">
                                  <span className="text-gray-600">
                                    {_.upperFirst(
                                      t("schoolAcademicClassTotalStudents", {
                                        defaultValue:
                                          schoolAcademicClassTotalStudents,
                                      })
                                    )}
                                  </span>
                                  <span className="text-dark font-medium">
                                    {academicClass?.students || "N/A"}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                  <span className="text-gray-600">
                                    {_.upperFirst(
                                      t("schoolAcademicClassTotalClasses", {
                                        defaultValue:
                                          schoolAcademicClassTotalClasses,
                                      })
                                    )}
                                  </span>
                                  <span className="text-dark font-medium">
                                    {academicClass?.classes || "N/A"}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                  <span className="text-gray-600">
                                    {_.upperFirst(
                                      t("schoolAcademicClassAvgSize", {
                                        defaultValue:
                                          schoolAcademicClassAvgSize,
                                      })
                                    )}
                                  </span>
                                  <span className="text-dark font-medium">
                                    {academicClass?.avgSize || "N/A"}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                  <span className="text-gray-600">
                                    {_.upperFirst(
                                      t("schoolAcademicClassCampusName", {
                                        defaultValue:
                                          schoolAcademicClassCampusName,
                                      })
                                    )}
                                  </span>
                                  <span className="text-dark font-medium">
                                    {academicClass?.campusName || "N/A"}
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

export default SchoolAcademicClassesComponent;
