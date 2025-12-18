import {
  FolderMinusIcon,
  LogOut,
  User,
  Settings,
  School,
  House
} from "lucide-react";
import { SIDEBAR_MENU } from "@MEHelpers/enums";
import { admissionForm, school, root, dashboard } from "@MEUtils/pageRoutes";

export const sidebarMenu = [
  {
    title: SIDEBAR_MENU.DASHBOARD,
    url: dashboard,
    icon: House,
  },
  {
    title: SIDEBAR_MENU.ADMISSION_FORMS,
    url: admissionForm,
    icon: FolderMinusIcon,
  },
  {
    title: SIDEBAR_MENU.SCHOOLS,
    url: school,
    icon: School,
  },
  {
    title: SIDEBAR_MENU.PROFILE,
    url: dashboard,
    icon: User,
  },
  {
    title: SIDEBAR_MENU.SETTINGS,
    url: dashboard,
    icon: Settings,
  },
];

export const footerMenu = [
  {
    title: SIDEBAR_MENU.SIGN_OUT,
    url: root,
    icon: LogOut,
  },
];
