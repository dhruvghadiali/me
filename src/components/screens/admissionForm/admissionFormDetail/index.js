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
    <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl border border-border p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 shadow-lg">
      <AdmissionFormDetailHeaderComponent />
      <AdmissionFormDetailQuickInfoComponent />
      {/* Tabs */}
        <div className=" mt-5 border-b border-primary/30 bg-card/50 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl overflow-x-auto">
          <div className="flex gap-0 px-2 sm:px-3 md:px-4 lg:px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {}}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border-b-2 transition-all duration-200 whitespace-nowrap text-xs sm:text-sm font-medium ${
                    0 === tab.id
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
    </div>
  );
};

export default AdmissionFormDetailComponent;
