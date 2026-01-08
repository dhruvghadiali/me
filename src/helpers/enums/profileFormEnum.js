/**
 * Blood Groups enumeration
 * Central enum for blood group types
 */
const BLOOD_GROUPS = Object.freeze({
  O_POSITIVE: "O+",
  O_NEGATIVE: "O-",
  A_POSITIVE: "A+",
  A_NEGATIVE: "A-",
  B_POSITIVE: "B+",
  B_NEGATIVE: "B-",
  AB_POSITIVE: "AB+",
  AB_NEGATIVE: "AB-",
});

// Gender enumeration for students (keep in sync with schema)
const GENDERS = Object.freeze({
  MALE: "male",
  FEMALE: "female",
});

/**
 * Boolean enumeration
 * Central enum for boolean values
 */
const BOOLEANS = Object.freeze({
  YES: true,
  NO: false,
});

/**
 * Allergies enumeration
 * Central enum for common allergies in children aged 5-20 years
 */
const ALLERGIES = Object.freeze({
  PEANUTS: "Peanuts",
  TREE_NUTS: "Tree Nuts",
  MILK: "Milk",
  EGGS: "Eggs",
  FISH: "Fish",
  SHELLFISH: "Shellfish",
  WHEAT: "Wheat",
  SOY: "Soy",
  SESAME: "Sesame",
  POLLEN: "Pollen",
  DUST_MITES: "Dust Mites",
  PET_DANDER: "Pet Dander",
  INSECT_STINGS: "Insect Stings",
  LATEX: "Latex",
  MEDICATIONS: "Medications",
  MOLD: "Mold",
  OTHER: "Other",
});

// Common occupation categories in India (normalized, lowercase)
const PARENT_OCCUPATIONS_IN = Object.freeze({
  GOVERNMENT_SERVICE: "government service",
  PRIVATE_SERVICE: "private service",
  SELF_EMPLOYED: "self employed",
  BUSINESS: "business",
  FARMER: "farmer",
  LABOURER: "labourer",
  HOMEMAKER: "homemaker",
  RETIRED: "retired",
  UNEMPLOYED: "unemployed",
  STUDENT: "student",
  TEACHER: "teacher",
  DOCTOR: "doctor",
  ENGINEER: "engineer",
  DEFENSE: "defense",
  DRIVER: "driver",
  ARTISAN: "artisan",
  SHOPKEEPER: "shopkeeper",
  DAILY_WAGE_WORKER: "daily wage worker",
  OTHER: "other",
});

// Common education levels in India (normalized, lowercase)
const EDUCATION_LEVELS_IN = Object.freeze({
  ILLITERATE: "illiterate",
  PRIMARY: "primary", // Class 1-5
  MIDDLE: "middle", // Class 6-8
  SECONDARY: "secondary", // Class 9-10
  HIGHER_SECONDARY: "higher secondary", // Class 11-12
  DIPLOMA: "diploma",
  UNDERGRADUATE: "undergraduate",
  POSTGRADUATE: "postgraduate",
  DOCTORATE: "doctorate",
  PROFESSIONAL: "professional", // CA/CS/ICWA etc.
  VOCATIONAL: "vocational",
  OTHER: "other",
});

/**
 * Student-related enumerations
 */

const EMERGENCY_CONTACT_RELATIONS = Object.freeze({
  GUARDIAN: "guardian",
  BROTHER: "brother",
  SISTER: "sister",
  GRANDFATHER: "grandfather",
  GRANDMOTHER: "grandmother",
  UNCLE: "uncle",
  AUNT: "aunt",
  COUSIN: "cousin",
  FRIEND: "friend",
  NEIGHBOR: "neighbor",
  OTHER: "other",
});

export { BLOOD_GROUPS, GENDERS, BOOLEANS, ALLERGIES, PARENT_OCCUPATIONS_IN, EDUCATION_LEVELS_IN, EMERGENCY_CONTACT_RELATIONS };