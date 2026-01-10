import {
  firstNameMaxChar,
  firstNameMinChar,
  lastNameMaxChar,
  lastNameMinChar,
  emailMaxChar,
  emailMinChar,
  phoneNumberChar,
  aadhaarNumberChar,
  nationalityMaxChar,
  nationalityMinChar,
  usernameMaxChar,
  usernameMinChar,
  passwordMaxChar,
  passwordMinChar,
} from "@MEHelpers/formValidationConst";

const firstNameRequired = "First name is required";
const firstNameMaxLength = `First name must be at most ${firstNameMaxChar} characters`;
const firstNameMinLength = `First name must be at least ${firstNameMinChar} characters`;
const lastNameRequired = "Last name is required";
const lastNameMaxLength = `Last name must be at most ${lastNameMaxChar} characters`;
const lastNameMinLength = `Last name must be at least ${lastNameMinChar} characters`;
const emailRequired = "Email is required";
const emailInvalid = "Invalid email address format";
const emailMinLength = `Email must be at least ${emailMinChar} characters`;
const emailMaxLength = `Email must be at most ${emailMaxChar} characters`;
const phoneNumberRequired = "Phone number is required";
const phoneNumberInvalid = "Invalid phone number please enter digits only";
const phoneNumberLength = `Phone number must be ${phoneNumberChar} digits`;
const aadhaarNumberRequired = "Aadhaar number is required";
const aadhaarNumberLength = `Aadhaar must be ${aadhaarNumberChar} digits`;
const aadhaarNumberInvalid = "Invalid Aadhaar number please enter digits only";
const genderRequired = "Gender is required";
const bloodGroupRequired = "Blood group is required";
const nationalityRequired = "nationality is required";
const nationalityMaxLength = `Nationality must be at most ${nationalityMaxChar} characters`;
const nationalityMinLength = `Nationality must be at least ${nationalityMinChar} characters`;
const usernameRequired = "Username is required";
const usernameMinLength = `Username must be at least ${usernameMinChar} characters`;
const usernameMaxLength = `Username must be at most ${usernameMaxChar} characters`;
const passwordRequired = "Password is required";
const passwordMinLength = `Password must be at least ${passwordMinChar} characters`;
const passwordMaxLength = `Password must be at most ${passwordMaxChar} characters`;

export {
    firstNameRequired,
    firstNameMinLength,
    firstNameMaxLength,
    lastNameRequired,
    lastNameMinLength,
    lastNameMaxLength,
    emailInvalid,
    emailRequired,
    emailMinLength,
    emailMaxLength,
    phoneNumberLength,
    phoneNumberInvalid,
    phoneNumberRequired,
    aadhaarNumberLength,
    aadhaarNumberInvalid,
    aadhaarNumberRequired,
    genderRequired,
    bloodGroupRequired,
    nationalityRequired,
    nationalityMaxLength,
    nationalityMinLength,
    usernameRequired,
    usernameMinLength,
    usernameMaxLength,
    passwordRequired,
    passwordMinLength,
    passwordMaxLength,
}