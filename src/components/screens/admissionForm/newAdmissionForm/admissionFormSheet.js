import { AlertCircle } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import { ME_BUTTON_COMPONENT_VARIANTS } from "@MEHelpers/enums";
import { handleSheetOpenChange } from "@MERedux/admissionForm/admissionFormSlice";
import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@MEShadcnComponents/sheet";

import MEButton from "@MECommonComponents/button/meButton";
import AdmissionFormComponent from "@MEScreenComponents/admissionForm/newAdmissionForm/admissionForm";

const AdmissionFormSheetComponent = () => {
  const dispatch = useDispatch();
  const { admissionFormLoader, isAdmissionFormSheetOpen, admissionFormError } =
    useSelector((state) => state.admissionForm);

  return (
    <Sheet
      open={isAdmissionFormSheetOpen}
      onOpenChange={() =>
        admissionFormLoader
          ? null
          : dispatch(handleSheetOpenChange(!isAdmissionFormSheetOpen))
      }
    >
      <SheetTrigger asChild>
        <MEButton
          type="button"
          meclassname="w-full flex "
          buttonVariant={ME_BUTTON_COMPONENT_VARIANTS.PRIMARY}
          disabled={isAdmissionFormSheetOpen || admissionFormLoader}
        >
          {"Start New Application"}
        </MEButton>
      </SheetTrigger>
      <SheetContent
        onInteractOutside={(e) => admissionFormLoader && e.preventDefault()}
        onEscapeKeyDown={(e) => admissionFormLoader && e.preventDefault()}
        className="w-full sm:max-w-md overflow-y-auto"
      >
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left">{"Admission Form"}</SheetTitle>
          <SheetDescription className="text-left">
            {
              "Start a new admission application by filling out the necessary details."
            }
          </SheetDescription>
        </SheetHeader>
        {admissionFormError && (
          <div className="mb-5 p-3 sm:p-4 bg-danger/50 border border-danger/200 rounded-md flex gap-3 items-center">
            <AlertCircle className="w-5 h-5 text-danger/600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-danger/800">{"Error"}</p>
              <p className="text-sm text-danger/700 mt-1">
                {admissionFormError}
              </p>
            </div>
          </div>
        )}
        <div>
          <AdmissionFormComponent />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AdmissionFormSheetComponent;
