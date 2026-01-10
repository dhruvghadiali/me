import {
  fatherFormAnnualIncomeMaxNum,
  fatherFormAnnualIncomeMinNum,
  fatherFormCaringChildByMaxChar,
  fatherFormCaringChildByMinChar,
} from "@MEHelpers/formValidationConst";

const fatherFormFatherOccupationRequired = "father's occupation is required";
const fatherFormFatherEducationRequired = "father's education is required";
const fatherFormAnnualIncomeRequired = "annual income is required";
const fatherFormAnnualIncomeMustBePositive = "annual income must be a positive number";
const fatherFormAnnualIncomeMaxNumber = `annual income must be at most ${fatherFormAnnualIncomeMaxNum}`;
const fatherFormAnnualIncomeMinNumber = `annual income must be at least ${fatherFormAnnualIncomeMinNum}`;
const fatherFormFatherDeathOfDateInvalid = "father's death date is invalid";
const fatherFormFatherDeathOfDateRequired = "father's death date is required";
const fatherFormCaringChildByRequired = "caring child by is required";
const fatherFormCaringChildByMaxLength = `caring child by must be at most ${fatherFormCaringChildByMaxChar} characters`;
const fatherFormCaringChildByMinLength = `caring child by must be at least ${fatherFormCaringChildByMinChar} characters`;

export {
  fatherFormFatherEducationRequired,
  fatherFormFatherOccupationRequired,
  fatherFormAnnualIncomeRequired,
  fatherFormAnnualIncomeMaxNumber,
  fatherFormAnnualIncomeMinNumber,
  fatherFormAnnualIncomeMustBePositive,
  fatherFormFatherDeathOfDateInvalid,
  fatherFormFatherDeathOfDateRequired,
  fatherFormCaringChildByRequired,
  fatherFormCaringChildByMaxLength,
  fatherFormCaringChildByMinLength,
};
