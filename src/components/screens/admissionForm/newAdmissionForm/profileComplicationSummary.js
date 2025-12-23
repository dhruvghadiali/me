import { useSelector } from "react-redux";
import {
  User,
  Users,
  MapPin,
  Siren,
  Venus,
  Mars,
  Check,
  TriangleAlert,
} from "lucide-react";

import { PROFILE_COMPLETION_SUMMARY } from "@MEHelpers/enums";

const profileComplicationSummaryComponent = () => {
  const { profileComplicationSummary } = useSelector(
    (state) => state.admissionForm
  );

  const profileSections = [
    {
      key: PROFILE_COMPLETION_SUMMARY.STUDENT_PROFILE,
      label: "Student Profile",
      icon: <User />,
    },
    {
      key: PROFILE_COMPLETION_SUMMARY.FATHER_PROFILE,
      label: "Father Profile",
      icon: <Mars />,
    },
    {
      key: PROFILE_COMPLETION_SUMMARY.MOTHER_PROFILE,
      label: "Mother Profile",
      icon: <Venus />,
    },
    {
      key: PROFILE_COMPLETION_SUMMARY.SIBLINGS_PROFILE,
      label: "Siblings Profile",
      icon: <Users />,
    },
    {
      key: PROFILE_COMPLETION_SUMMARY.ADDRESS,
      label: "Address",
      icon: <MapPin />,
    },
    {
      key: PROFILE_COMPLETION_SUMMARY.EMERGENCY_CONTACT,
      label: "Emergency Contact",
      icon: <Siren />,
    },
  ];

  const completedCount =
    Object.values(profileComplicationSummary)?.filter(Boolean)?.length || 0;
  const totalCount = Object.keys(profileComplicationSummary)?.length || 0;
  const completionPercentage =
    Math.round((completedCount / totalCount) * 100) || 0;


  return (
    <div className="mb-6 pb-7 border-b border-border">
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <h4 className="text-xs sm:text-sm font-semibold text-foreground">
          Profile Completion
        </h4>
        <span className="text-xs sm:text-sm font-bold text-primary">
          {completionPercentage}%
        </span>
      </div>

      <div className="w-full bg-muted rounded-full h-2 sm:h-2.5 overflow-hidden mb-3 sm:mb-4">
        <div
          className="bg-primary h-full rounded-full transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>

      <div className="space-y-2 sm:space-y-2.5">
        {profileSections.map((section) => (
          <div
            key={section.key}
            className="flex items-center justify-between p-2 sm:p-2.5 bg-background rounded-lg border border-primary/50 hover:border-primary/30 cursor-pointer transition-colors"
            onClick={() =>
              setProfileCompletion((prev) => ({
                ...prev,
                [section.key]: !prev[section.key],
              }))
            }
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <span className="text-base sm:text-lg flex-shrink-0">
                {section.icon}
              </span>
              <span className="text-xs sm:text-sm text-foreground truncate">
                {section.label}
              </span>
            </div>
            <div className="flex-shrink-0 ml-2">
              {profileComplicationSummary?.[section.key] ? (
                <span className="text-success text-lg sm:text-xl">
                  <Check />
                </span>
              ) : (
                <span className="text-warning text-lg sm:text-xl">
                  <TriangleAlert />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-xs sm:text-sm text-muted-foreground text-center">
        {completedCount} of {totalCount} sections completed
      </div>
    </div>
  );
};
export default profileComplicationSummaryComponent;
