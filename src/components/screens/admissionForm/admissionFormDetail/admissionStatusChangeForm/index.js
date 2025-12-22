import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

import * as Yup from "yup";
import _, { set } from "lodash";

import { ME_BUTTON_COMPONENT_VARIANTS } from "@MEHelpers/enums";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@MEShadcnComponents/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@MEShadcnComponents/alert-dialog";

import MEButton from "@MECommonComponents/button/meButton";

// Validation Schema
const statusChangeValidationSchema = Yup.object().shape({
  newStatus: Yup.string()
    .required("Please select a new status")
    .min(1, "Status is required"),
});

const AdmissionChangeStatusFormComponent = () => {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const { admissionForm } = useSelector((state) => state.admissionForm);

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      newStatus: "",
    },
    validationSchema: statusChangeValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      setOpenConfirmDialog(true);
    },
  });

  const handleStatusChange = (value) => {
    formik.setFieldValue("newStatus", value);
  };

  const hasError = formik.touched.newStatus && formik.errors.newStatus;

  return (
    <>
      {admissionForm?.changeStatusDropdownOptions &&
        _.size(admissionForm.changeStatusDropdownOptions) > 0 && (
          <form onSubmit={formik.handleSubmit}>
            <div className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/8 via-card to-primary/5 border border-primary/25 shadow-sm">
              <div className="space-y-4 sm:space-y-5">
                {/* Change Status Header */}
                <div className="space-y-1.5">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-1 h-5 sm:h-6 bg-primary rounded-full" />
                    Update Application Status
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground ml-3.5 sm:ml-4">
                    Choose a new status and confirm the change
                  </p>
                </div>

                {/* Select and Button Container */}
                <div className="mt-4 space-y-2.5">
                  <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 lg:items-end">
                    <div className="w-full sm:w-full md:max-w-sm lg:max-w-xs">
                      <label className="text-xs sm:text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-2 block">
                        New Status
                      </label>
                      <Select
                        value={formik.values.newStatus}
                        onValueChange={handleStatusChange}
                        disabled={formik.isSubmitting}
                      >
                        <SelectTrigger
                          className={`w-full h-11 sm:h-12 md:h-13 border-2 transition-all duration-200 text-sm sm:text-base ${
                            hasError
                              ? "border-danger/60 bg-danger/5 hover:bg-danger/10 hover:border-danger/80 focus:border-danger"
                              : "border-primary/30 bg-card/50 hover:bg-card hover:border-primary/50 focus:border-primary/70"
                          }`}
                        >
                          <SelectValue placeholder="Select new status..." />
                        </SelectTrigger>
                        <SelectContent className="border-2 border-primary/20">
                          <SelectGroup>
                            <SelectLabel className="text-foreground">
                              Available Status
                            </SelectLabel>
                            {_.map(
                              admissionForm.changeStatusDropdownOptions,
                              (status) => (
                                <SelectItem
                                  key={status.value}
                                  value={status.value}
                                  className="text-sm sm:text-base"
                                >
                                  <span className="font-medium text-foreground">
                                    {_.startCase(status.label)}
                                  </span>
                                </SelectItem>
                              )
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <MEButton
                      type="submit"
                      name="submit"
                      meclassname="w-full lg:w-auto lg:px-8 h-11 sm:h-12 md:h-13 text-sm sm:text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      buttonVariant={ME_BUTTON_COMPONENT_VARIANTS.PRIMARY}
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      {"Confirm Status Change"}
                    </MEButton>
                  </div>

                  {/* Error Message - Outside flex container */}
                  {hasError && (
                    <div className="flex items-center gap-1.5 mt-1.5 ml-0">
                      <span className="text-xs text-danger font-medium">
                        {formik.errors.newStatus}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        )}

      <AlertDialog open={openConfirmDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-base sm:text-lg font-bold">
              Confirm Status Change
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-muted-foreground mt-2">
              Are you sure you want to change the application status to{" "}
              <span className="font-semibold text-foreground">
                {_.startCase(formik.values.newStatus)}
              </span>
              ? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2 sm:gap-3">
            <AlertDialogCancel
              onClick={() => {
                setOpenConfirmDialog(false);
                formik.resetForm();
              }}
              className="w-full sm:w-auto"
            >
              {"No"}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setOpenConfirmDialog(false);
              }}
              className="w-full sm:w-auto"
            >
              {"Yes"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AdmissionChangeStatusFormComponent;
