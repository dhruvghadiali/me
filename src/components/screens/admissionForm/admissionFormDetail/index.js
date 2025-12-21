import { useSelector } from "react-redux";
import {
  CalendarDaysIcon,
  GraduationCapIcon,
  FileTextIcon,
  ClipboardListIcon,
  DollarSignIcon,
  FileCheckIcon,
  UserIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  XIcon,
  IndianRupeeIcon,
} from "lucide-react";
import _ from "lodash";
import moment from "moment";

import AdmissionFormDetailHeaderComponent from "@MEScreenComponents/admissionForm/admissionFormDetail/admissionFormDetailHeader";
import AdmissionFormDetailQuickInfoComponent from "@MEScreenComponents/admissionForm/admissionFormDetail/admissionFormDetailQuickInfo";

const AdmissionFormDetailComponent = () => {
  const { admissionForm } = useSelector((state) => state.admissionForm);
  const tabs = [
    { id: "overview", label: "Overview", icon: ClipboardListIcon },
    { id: "history", label: "Status History", icon: FileTextIcon },
    { id: "documents", label: "Documents", icon: FileCheckIcon },
    { id: "appointments", label: "Appointments", icon: CalendarDaysIcon },
    { id: "payments", label: "Payments", icon: IndianRupeeIcon },
  ];

  return (
    <div className="w-full">
      <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl border border-border p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
        <AdmissionFormDetailHeaderComponent />
        <AdmissionFormDetailQuickInfoComponent />
        {/* Tabs */}
        {/* <div className="mt-4 sm:mt-5 md:mt-6 border-b border-primary/30 bg-card/50 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl overflow-x-auto -mx-3 sm:-mx-4 md:-mx-5 lg:-mx-6">
          <div className="flex gap-0 px-3 sm:px-4 md:px-5 lg:px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {}}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border-b-2 transition-all duration-200 whitespace-nowrap text-xs sm:text-sm md:text-sm font-medium flex-shrink-0 ${
                    0 === tab.id
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 flex-shrink-0" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdmissionFormDetailComponent;
