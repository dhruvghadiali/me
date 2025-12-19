import { useState } from "react";

import { ME_BUTTON_COMPONENT_VARIANTS } from "@MEHelpers/enums";
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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSheetOpenChange = (open) => {
    setIsSheetOpen(open);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
      <SheetTrigger className="w-full flex">
        <MEButton
          type="submit"
          meclassname="w-full flex "
          buttonVariant={ME_BUTTON_COMPONENT_VARIANTS.PRIMARY}
          disabled={false}
        >
          {"Start New Application"}
        </MEButton>
      </SheetTrigger>
      <SheetContent
      // onInteractOutside={(e) => e.preventDefault()}
      // onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle>{"Admission Form"}</SheetTitle>
          <SheetDescription>
            {
              "Start a new admission application by filling out the necessary details."
            }
          </SheetDescription>
          <AdmissionFormComponent/>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AdmissionFormSheetComponent;
