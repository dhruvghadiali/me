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

export { BLOOD_GROUPS, GENDERS, BOOLEANS, ALLERGIES };