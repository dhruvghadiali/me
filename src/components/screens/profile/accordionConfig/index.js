import { User, Users, MapPin, Mars, Venus, Siren } from "lucide-react";
import _ from "lodash";

import {
  profileAccordionItemsTitleForAddress,
  profileAccordionItemsSubtitleForAddress,
  profileAccordionItemsTitleForFatherProfile,
  profileAccordionItemsTitleForMotherProfile,
  profileAccordionItemsTitleForStudentProfile,
  profileAccordionItemsTitleForSiblingsProfile,
  profileAccordionItemsTitleForEmergencyContact,
  profileAccordionItemsSubtitleForFatherProfile,
  profileAccordionItemsSubtitleForMotherProfile,
  profileAccordionItemsSubtitleForStudentProfile,
  profileAccordionItemsSubtitleForSiblingsProfile,
  profileAccordionItemsSubtitleForEmergencyContact,
} from "@MELocalization/languages/en";

import StudentProfileComponent from "@MEScreenComponents/profile/studentProfile";
import FatherProfileComponent from "@MEScreenComponents/profile/fatherProfile";
import MotherProfileComponent from "@MEScreenComponents/profile/motherProfile";
import SiblingProfileComponent from "@MEScreenComponents/profile/siblingProfile";
import AddressProfileComponent from "@MEScreenComponents/profile/addressProfile";
import EmergencyContactProfileComponent from "@MEScreenComponents/profile/emergencyContactProfile";

const getProfileAccordionItems = (t) => [
  {
    id: "student",
    title: _.startCase(
      t("profileAccordionItemsTitleForStudentProfile", {
        defaultValue: profileAccordionItemsTitleForStudentProfile,
      })
    ),
    sub: _.upperFirst(
      t("profileAccordionItemsSubtitleForStudentProfile", {
        defaultValue: profileAccordionItemsSubtitleForStudentProfile,
      })
    ),
    icon: <User className="w-5 h-5" />,
    content: <StudentProfileComponent />,
  },
  {
    id: "father",
    title: _.startCase(
      t("profileAccordionItemsTitleForFatherProfile", {
        defaultValue: profileAccordionItemsTitleForFatherProfile,
      })
    ),
    sub: _.upperFirst(
      t("profileAccordionItemsSubtitleForFatherProfile", {
        defaultValue: profileAccordionItemsSubtitleForFatherProfile,
      })
    ),
    icon: <Mars className="w-5 h-5" />,
    content: <FatherProfileComponent />,
  },
  {
    id: "mother",
    title: _.startCase(
      t("profileAccordionItemsTitleForMotherProfile", {
        defaultValue: profileAccordionItemsTitleForMotherProfile,
      })
    ),
    sub: _.upperFirst(
      t("profileAccordionItemsSubtitleForMotherProfile", {
        defaultValue: profileAccordionItemsSubtitleForMotherProfile,
      })
    ),
    icon: <Venus className="w-5 h-5" />,
    content: <MotherProfileComponent />,
  },
  {
    id: "siblings",
    title: _.startCase(
      t("profileAccordionItemsTitleForSiblingsProfile", {
        defaultValue: profileAccordionItemsTitleForSiblingsProfile,
      })
    ),
    sub: _.upperFirst(
      t("profileAccordionItemsSubtitleForSiblingsProfile", {
        defaultValue: profileAccordionItemsSubtitleForSiblingsProfile,
      })
    ),
    icon: <Users className="w-5 h-5" />,
    content: <SiblingProfileComponent />,
  },
  {
    id: "address",
    title: _.startCase(
      t("profileAccordionItemsTitleForAddress", {
        defaultValue: profileAccordionItemsTitleForAddress,
      })
    ),
    sub: _.upperFirst(
      t("profileAccordionItemsSubtitleForAddress", {
        defaultValue: profileAccordionItemsSubtitleForAddress,
      })
    ),
    icon: <MapPin className="w-5 h-5" />,
    content: <AddressProfileComponent />,
  },
  {
    id: "emergency",
    title: _.startCase(
      t("profileAccordionItemsTitleForEmergencyContact", {
        defaultValue: profileAccordionItemsTitleForEmergencyContact,
      })
    ),
    sub: _.upperFirst(
      t("profileAccordionItemsSubtitleForEmergencyContact", {
        defaultValue: profileAccordionItemsSubtitleForEmergencyContact,
      })
    ),
    icon: <Siren className="w-5 h-5" />,
    content: <EmergencyContactProfileComponent />,
  },
];

export { getProfileAccordionItems };