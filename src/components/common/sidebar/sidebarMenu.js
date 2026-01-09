import {
  FolderMinusIcon,
  LogOut,
  User,
  Settings,
  School,
  House,
} from "lucide-react";
import {
  root,
  school,
  profile,
  settings,
  dashboard,
  admissionForm,
} from "@MEUtils/pageRoutes";
import { SIDEBAR_MENU } from "@MEHelpers/enums";

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
    url: profile,
    icon: User,
  },
  {
    title: SIDEBAR_MENU.SETTINGS,
    url: settings,
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
