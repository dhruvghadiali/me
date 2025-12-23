import { useDispatch, useSelector } from "react-redux";

import { CircleXIcon } from "lucide-react";
import {
  toggleAdmissionFormCardVisibility,
  setAdmissionFormActiveIndex,
} from "@MERedux/admissionForm/admissionFormSlice";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";

const AdmissionFormDetailHeaderComponent = () => {
  const dispatch = useDispatch();
  const { admissionForm } = useSelector((state) => state.admissionForm);

  const onClose = () => {
    dispatch(toggleAdmissionFormCardVisibility({ status: false }));
    dispatch(setAdmissionFormActiveIndex(0));
  };

  return (
    <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
      <div className="min-w-0 flex-1">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground line-clamp-1">
          {_.upperCase(admissionForm?.schoolAcademicClass?.school?.name) ||
            "N/A"}
        </h1>
        <p className="text-xs sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1 md:mt-1.5 line-clamp-1">
          Application #{admissionForm?.applicationNumber || "N/A"}
        </p>
      </div>
      <MEButton
        size="icon"
        variant="ghost"
        className="hover:bg-dark/10 hover:text-dark transition-colors shrink-0 [&_svg]:!size-5 sm:[&_svg]:!size-5 md:[&_svg]:!size-6"
        onClick={onClose}
      >
        <CircleXIcon />
      </MEButton>
    </div>
  );
};

export default AdmissionFormDetailHeaderComponent;
