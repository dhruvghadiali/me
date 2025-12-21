import { useDispatch, useSelector } from "react-redux";

import { CircleXIcon } from "lucide-react";
import { toggleAdmissionFormCardVisibility } from "@MERedux/admissionForm/admissionFormSlice";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";

const AdmissionFormDetailHeaderComponent = () => {
  const dispatch = useDispatch();
  const { admissionForm } = useSelector((state) => state.admissionForm);

  return (
    <div className="flex justify-between items-start gap-4">
      <div className="min-w-0 flex-1">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground line-clamp-1">
          {_.upperCase(admissionForm?.schoolAcademicClass?.school?.name) ||
            "N/A"}
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
          Application #{admissionForm?.applicationNumber || "N/A"}
        </p>
      </div>
      <MEButton
        size="icon"
        variant="ghost"
        className="hover:bg-dark/10 hover:text-dark transition-colors shrink-0 [&_svg]:!size-6"
        onClick={() => dispatch(toggleAdmissionFormCardVisibility(false))}
      >
        <CircleXIcon />
      </MEButton>
    </div>
  );
};

export default AdmissionFormDetailHeaderComponent;
