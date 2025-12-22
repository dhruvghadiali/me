import { useSelector, useDispatch } from "react-redux";
import {
  CalendarDaysIcon,
  FileTextIcon,
  ClipboardListIcon,
  FileCheckIcon,
  IndianRupeeIcon,
} from "lucide-react";

import { setAdmissionFormActiveIndex } from "@MERedux/admissionForm/admissionFormSlice";

const AdmissionFormDetailTabComponent = () => {
  const { admissionFormActiveIndex } = useSelector(
    (state) => state.admissionForm
  );
  const dispatch = useDispatch();

  const tabs = [
    { id: "overview", label: "Overview", icon: ClipboardListIcon },
    { id: "history", label: "Status History", icon: FileTextIcon },
    { id: "documents", label: "Documents", icon: FileCheckIcon },
    { id: "appointments", label: "Appointments", icon: CalendarDaysIcon },
    { id: "payments", label: "Payments", icon: IndianRupeeIcon },
  ];

  return (
    <div className="border-b border-border/60 bg-card/50 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl overflow-x-auto">
      <div className="flex gap-0 px-2 sm:px-3 md:px-4 lg:px-6">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <button
              key={index}
              onClick={() => dispatch(setAdmissionFormActiveIndex(index))}
              className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border-b-2 transition-all duration-200 whitespace-nowrap text-xs sm:text-sm font-medium ${
                admissionFormActiveIndex === index
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
  );
};

export default AdmissionFormDetailTabComponent;
