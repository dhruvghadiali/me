import React, { useState } from "react";
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import {
  Edit2,
  Check,
  X,
  Calendar as CalendarIcon,
  ChevronDownIcon,
} from "lucide-react";
import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import { Calendar } from "@MEShadcnComponents/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@MEShadcnComponents/popover";
import { Button } from "@MEShadcnComponents/button";
import { RadioGroup, RadioGroupItem } from "@MEShadcnComponents/radio-group";
import { Label } from "@MEShadcnComponents/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@MEShadcnComponents/select";
import { format } from "date-fns";

import MEDatePicker from "@MECommonComponents/form/meDatePicker";

const allergiesList = [
  "Peanuts",
  "Tree Nuts",
  "Fish",
  "Shellfish",
  "Milk",
  "Eggs",
  "Wheat",
  "Soy",
  "Sesame",
];

const StudentProfileComponent = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    setIsEditMode(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Formik
        initialValues={{
          firstName: "John",
          lastName: "Doe",
          dateOfBirth: new Date("2010-01-15"),
          gender: "male",
          bloodGroup: "O+",
          aadhaarNumber: "123456789012",
          nationality: "Indian",
          medicalInfo: {
            hasHearingIssue: false,
            hearingIssueDetails: "",
            hasVisionIssue: false,
            visionIssueDetails: "",
            hasPhysicalIssue: false,
            physicalIssueDetails: "",
            hasMentalIssue: false,
            mentalIssueDetails: "",
            hasAllergies: false,
            allergies: [],
          },
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue, isValid }) => (
          <FormikForm>
            <div>
              {/* Header with Edit Button */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-primary">
                  Student Profile
                </h2>
                <button
                  type="button"
                  onClick={() => setIsEditMode(!isEditMode)}
                  className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                  title={isEditMode ? "Cancel" : "Edit"}
                >
                  {isEditMode ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Edit2 className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Basic Information Section */}
              <div className="mt-3">
                <h3 className="text-base font-semibold mb-4 text-primary">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Field
                      as={MEInput}
                      name="firstName"
                      placeholder="Enter first name"
                      disabled={!isEditMode}
                      value={values.firstName}
                    />
                    <ErrorMessage name="firstName">
                      {(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Field
                      as={MEInput}
                      name="lastName"
                      placeholder="Enter last name"
                      disabled={!isEditMode}
                      value={values.lastName}
                    />
                    <ErrorMessage name="lastName">
                      {(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Date of Birth */}
                  {/* <div>
                    <label className="block text-sm font-medium mb-2">
                      Date of Birth
                    </label>
                    <Popover>
                      <PopoverTrigger asChild disabled={!isEditMode}>
                        <div className="relative">
                          <input
                            type="text"
                            value={
                              values.dateOfBirth
                                ? format(values.dateOfBirth, "PPP")
                                : ""
                            }
                            placeholder="Pick a date"
                            readOnly
                            disabled={!isEditMode}
                            className="w-full px-3 py-2 rounded-md text-sm text-foreground bg-background border border-input hover:border-input/80 focus:border-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors pr-10 cursor-pointer"
                          />
                          <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto bg-background border border-input rounded-lg shadow-lg z-50 p-0">
                        <div className="p-3 w-full">
                          <Calendar
                            mode="single"
                            selected={values.dateOfBirth}
                            onSelect={(date) => {
                              setFieldValue("dateOfBirth", date);
                            }}
                            initialFocus
                            disabled={!isEditMode}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    <ErrorMessage name="dateOfBirth">
                      {(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div> */}

                  <MEDatePicker
                    label={""}
                    placeholder={"Select date"}
                    // todayClassName="bg-danger/20 text-danger ring-1 ring-danger rounded-full"
                    selectedDate={values.dateOfBirth}
                    onSelect={(date) =>
                      setFieldValue("dateOfBirth", date)
                    }
                  />
                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Gender
                    </label>
                    <RadioGroup
                      value={values.gender}
                      onValueChange={(value) => setFieldValue("gender", value)}
                      disabled={!isEditMode}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="male"
                          id="gender-male"
                          disabled={!isEditMode}
                        />
                        <Label htmlFor="gender-male" className="cursor-pointer">
                          Male
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="female"
                          id="gender-female"
                          disabled={!isEditMode}
                        />
                        <Label
                          htmlFor="gender-female"
                          className="cursor-pointer"
                        >
                          Female
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="other"
                          id="gender-other"
                          disabled={!isEditMode}
                        />
                        <Label
                          htmlFor="gender-other"
                          className="cursor-pointer"
                        >
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                    <ErrorMessage name="gender">
                      {(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Blood Group */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Blood Group
                    </label>
                    <Select
                      value={values.bloodGroup}
                      onValueChange={(value) =>
                        setFieldValue("bloodGroup", value)
                      }
                      disabled={!isEditMode}
                    >
                      <SelectTrigger disabled={!isEditMode}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                      </SelectContent>
                    </Select>
                    <ErrorMessage name="bloodGroup">
                      {(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Aadhaar Number */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Aadhaar Number
                    </label>
                    <Field
                      as={MEInput}
                      name="aadhaarNumber"
                      placeholder="Enter 12-digit Aadhaar"
                      disabled={!isEditMode}
                      value={values.aadhaarNumber}
                    />
                    <ErrorMessage name="aadhaarNumber">
                      {(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nationality
                    </label>
                    <Field
                      as={MEInput}
                      name="nationality"
                      placeholder="Enter nationality"
                      disabled={!isEditMode}
                      value={values.nationality}
                    />
                    <ErrorMessage name="nationality">
                      {(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>

              {/* Medical Information Section */}
              <div className="mt-3">
                <h3 className="text-base font-semibold mb-4 text-primary">
                  Medical Information
                </h3>

                {/* Hearing Issue */}
                <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-primary/60">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-primary">
                      Hearing Issue
                    </label>
                    <RadioGroup
                      value={values.medicalInfo.hasHearingIssue ? "yes" : "no"}
                      onValueChange={(value) =>
                        setFieldValue(
                          "medicalInfo.hasHearingIssue",
                          value === "yes"
                        )
                      }
                      disabled={!isEditMode}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="yes"
                          id="hearing-yes"
                          disabled={!isEditMode}
                        />
                        <Label htmlFor="hearing-yes" className="cursor-pointer">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="no"
                          id="hearing-no"
                          disabled={!isEditMode}
                        />
                        <Label htmlFor="hearing-no" className="cursor-pointer">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {values.medicalInfo.hasHearingIssue && (
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">
                        Hearing Issue Details
                      </label>
                      <Field
                        as={MEInput}
                        name="medicalInfo.hearingIssueDetails"
                        placeholder="Describe hearing issue"
                        disabled={!isEditMode}
                        value={values.medicalInfo.hearingIssueDetails}
                      />
                      <ErrorMessage name="medicalInfo.hearingIssueDetails">
                        {(msg) => (
                          <p className="text-red-500 text-xs mt-1">{msg}</p>
                        )}
                      </ErrorMessage>
                    </div>
                  )}
                </div>

                {/* Vision Issue */}
                <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-primary/60">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-primary">
                      Vision Issue
                    </label>
                    <RadioGroup
                      value={values.medicalInfo.hasVisionIssue ? "yes" : "no"}
                      onValueChange={(value) =>
                        setFieldValue(
                          "medicalInfo.hasVisionIssue",
                          value === "yes"
                        )
                      }
                      disabled={!isEditMode}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="yes"
                          id="vision-yes"
                          disabled={!isEditMode}
                        />
                        <Label htmlFor="vision-yes" className="cursor-pointer">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="no"
                          id="vision-no"
                          disabled={!isEditMode}
                        />
                        <Label htmlFor="vision-no" className="cursor-pointer">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {values.medicalInfo.hasVisionIssue && (
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">
                        Vision Issue Details
                      </label>
                      <Field
                        as={MEInput}
                        name="medicalInfo.visionIssueDetails"
                        placeholder="Describe vision issue"
                        disabled={!isEditMode}
                        value={values.medicalInfo.visionIssueDetails}
                      />
                      <ErrorMessage name="medicalInfo.visionIssueDetails">
                        {(msg) => (
                          <p className="text-red-500 text-xs mt-1">{msg}</p>
                        )}
                      </ErrorMessage>
                    </div>
                  )}
                </div>

                {/* Physical Issue */}
                <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-primary/60">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-primary">
                      Physical Issue
                    </label>
                    <RadioGroup
                      value={values.medicalInfo.hasPhysicalIssue ? "yes" : "no"}
                      onValueChange={(value) =>
                        setFieldValue(
                          "medicalInfo.hasPhysicalIssue",
                          value === "yes"
                        )
                      }
                      disabled={!isEditMode}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="yes"
                          id="physical-yes"
                          disabled={!isEditMode}
                        />
                        <Label
                          htmlFor="physical-yes"
                          className="cursor-pointer"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="no"
                          id="physical-no"
                          disabled={!isEditMode}
                        />
                        <Label htmlFor="physical-no" className="cursor-pointer">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {values.medicalInfo.hasPhysicalIssue && (
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">
                        Physical Issue Details
                      </label>
                      <Field
                        as={MEInput}
                        name="medicalInfo.physicalIssueDetails"
                        placeholder="Describe physical issue"
                        disabled={!isEditMode}
                        value={values.medicalInfo.physicalIssueDetails}
                      />
                      <ErrorMessage name="medicalInfo.physicalIssueDetails">
                        {(msg) => (
                          <p className="text-red-500 text-xs mt-1">{msg}</p>
                        )}
                      </ErrorMessage>
                    </div>
                  )}
                </div>

                {/* Mental Issue */}
                <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-primary/60">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-primary">
                      Mental Issue
                    </label>
                    <RadioGroup
                      value={values.medicalInfo.hasMentalIssue ? "yes" : "no"}
                      onValueChange={(value) =>
                        setFieldValue(
                          "medicalInfo.hasMentalIssue",
                          value === "yes"
                        )
                      }
                      disabled={!isEditMode}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="yes"
                          id="mental-yes"
                          disabled={!isEditMode}
                        />
                        <Label htmlFor="mental-yes" className="cursor-pointer">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="no"
                          id="mental-no"
                          disabled={!isEditMode}
                        />
                        <Label htmlFor="mental-no" className="cursor-pointer">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {values.medicalInfo.hasMentalIssue && (
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">
                        Mental Issue Details
                      </label>
                      <Field
                        as={MEInput}
                        name="medicalInfo.mentalIssueDetails"
                        placeholder="Describe mental issue"
                        disabled={!isEditMode}
                        value={values.medicalInfo.mentalIssueDetails}
                      />
                      <ErrorMessage name="medicalInfo.mentalIssueDetails">
                        {(msg) => (
                          <p className="text-red-500 text-xs mt-1">{msg}</p>
                        )}
                      </ErrorMessage>
                    </div>
                  )}
                </div>

                {/* Allergies */}
                <div className="p-4 bg-muted/30 rounded-lg border border-primary/60">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-primary">
                      Do you have any allergies?
                    </label>
                    <RadioGroup
                      value={values.medicalInfo.hasAllergies ? "yes" : "no"}
                      onValueChange={(value) =>
                        setFieldValue(
                          "medicalInfo.hasAllergies",
                          value === "yes"
                        )
                      }
                      disabled={!isEditMode}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="yes"
                          id="allergies-yes"
                          disabled={!isEditMode}
                        />
                        <Label
                          htmlFor="allergies-yes"
                          className="cursor-pointer"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="no"
                          id="allergies-no"
                          disabled={!isEditMode}
                        />
                        <Label
                          htmlFor="allergies-no"
                          className="cursor-pointer"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {values.medicalInfo.hasAllergies && (
                    <div>
                      <label className="block text-sm font-medium mb-3 text-primary">
                        Select Allergies
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {allergiesList.map((allergy) => (
                          <div key={allergy} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`allergy-${allergy}`}
                              name={`allergies-${allergy}`}
                              checked={values.medicalInfo.allergies.includes(
                                allergy
                              )}
                              onChange={(e) => {
                                const updatedAllergies = e.target.checked
                                  ? [...values.medicalInfo.allergies, allergy]
                                  : values.medicalInfo.allergies.filter(
                                      (a) => a !== allergy
                                    );
                                setFieldValue(
                                  "medicalInfo.allergies",
                                  updatedAllergies
                                );
                              }}
                              disabled={!isEditMode}
                              className="w-4 h-4 rounded cursor-pointer disabled:opacity-50 accent-primary"
                            />
                            <Label
                              htmlFor={`allergy-${allergy}`}
                              className="ml-2 cursor-pointer text-primary"
                            >
                              {allergy}
                            </Label>
                          </div>
                        ))}
                      </div>
                      <ErrorMessage name="medicalInfo.allergies">
                        {(msg) => (
                          <p className="text-red-500 text-xs mt-2">{msg}</p>
                        )}
                      </ErrorMessage>
                    </div>
                  )}
                </div>
              </div>

              {/* Form Actions */}
              {isEditMode && (
                <div className="flex gap-4 mt-8">
                  <MEButton
                    type="submit"
                    disabled={!isValid}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Save Changes
                  </MEButton>
                  <MEButton
                    type="button"
                    onClick={() => setIsEditMode(false)}
                    variant="outline"
                  >
                    Cancel
                  </MEButton>
                </div>
              )}
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

// Validation Schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  bloodGroup: Yup.string().required("Blood group is required"),
  aadhaarNumber: Yup.string()
    .matches(/^\d{12}$/, "Aadhaar must be 12 digits")
    .required("Aadhaar number is required"),
  nationality: Yup.string().required("Nationality is required"),
  medicalInfo: Yup.object().shape({
    hasHearingIssue: Yup.boolean(),
    hearingIssueDetails: Yup.string().when("hasHearingIssue", {
      is: true,
      then: (schema) => schema.required("Please provide hearing issue details"),
    }),
    hasVisionIssue: Yup.boolean(),
    visionIssueDetails: Yup.string().when("hasVisionIssue", {
      is: true,
      then: (schema) => schema.required("Please provide vision issue details"),
    }),
    hasPhysicalIssue: Yup.boolean(),
    physicalIssueDetails: Yup.string().when("hasPhysicalIssue", {
      is: true,
      then: (schema) =>
        schema.required("Please provide physical issue details"),
    }),
    hasMentalIssue: Yup.boolean(),
    mentalIssueDetails: Yup.string().when("hasMentalIssue", {
      is: true,
      then: (schema) => schema.required("Please provide mental issue details"),
    }),
    hasAllergies: Yup.boolean(),
    allergies: Yup.array().when("hasAllergies", {
      is: true,
      then: (schema) => schema.min(1, "Please select at least one allergy"),
    }),
  }),
});

export default StudentProfileComponent;
