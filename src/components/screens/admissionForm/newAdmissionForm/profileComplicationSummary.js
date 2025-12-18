import React, { useState } from "react";
import {User, Users, MapPin, Siren, Venus, Mars, Check, TriangleAlert} from "lucide-react";

const profileComplicationSummaryComponent = () => {
  const [profileCompletion, setProfileCompletion] = useState({
    studentProfile: true,
    fatherProfile: true,
    motherProfile: false,
    siblingsProfile: true,
    address: false,
    emergencyContact: true,
  });

  const profileSections = [
    { key: "studentProfile", label: "Student Profile", icon: <User/>},
    { key: "fatherProfile", label: "Father Profile", icon: <Mars/> },
    { key: "motherProfile", label: "Mother Profile", icon:  <Venus/> },
    { key: "siblingsProfile", label: "Siblings Profile", icon: <Users/> },
    { key: "address", label: "Address", icon: <MapPin/> },
    { key: "emergencyContact", label: "Emergency Contact", icon: <Siren/> },
  ];

  const completedCount =
    Object.values(profileCompletion).filter(Boolean).length;
  const totalCount = Object.keys(profileCompletion).length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);
  return (
    <div className="mb-5 sm:mb-6 md:mb-7 pb-5 sm:pb-6 md:pb-7 border-b border-border">
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <h4 className="text-xs sm:text-sm font-semibold text-foreground">
          Profile Completion
        </h4>
        <span className="text-xs sm:text-sm font-bold text-primary">
          {completionPercentage}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-2 sm:h-2.5 overflow-hidden mb-3 sm:mb-4">
        <div
          className="bg-primary h-full rounded-full transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>

      {/* Profile Items */}
      <div className="space-y-2 sm:space-y-2.5">
        {profileSections.map((section) => (
          <div
            key={section.key}
            className="flex items-center justify-between p-2 sm:p-2.5 bg-background rounded-lg border border-border/50 hover:border-primary/30 cursor-pointer transition-colors"
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
              {profileCompletion[section.key] ? (
                <span className="text-success text-lg sm:text-xl"><Check/></span>
              ) : (
                <span className="text-warning text-lg sm:text-xl">
                  <TriangleAlert/>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Completion Status */}
      <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground text-center">
        {completedCount} of {totalCount} sections completed
      </div>
    </div>
  );
};
export default profileComplicationSummaryComponent;
