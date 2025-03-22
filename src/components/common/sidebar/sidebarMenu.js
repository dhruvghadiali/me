import {
  Gauge,
  Inbox,
  User,
  Settings,
  LogOutIcon,
  SchoolIcon,
} from "lucide-react";
import { sidebarMenuName } from "@MEUtils/enums";
import { routeName } from "@MEUtils/routeName";

export const sidebarMenu = [
  {
    title: sidebarMenuName.HOME,
    url: routeName.root,
    icon: Gauge,
  },
  {
    title: sidebarMenuName.SCHOOLS,
    url: routeName.root,
    icon: SchoolIcon,
  },
  {
    title: sidebarMenuName.ADMISSIONS,
    url: routeName.root,
    icon: Inbox,
  },
  {
    title: sidebarMenuName.PROFILE,
    url: routeName.root,
    icon: User,
  },
  {
    title: sidebarMenuName.SETTINGS,
    url: routeName.root,
    icon: Settings,
  },
];

export const footerMenu = [
  {
    title: sidebarMenuName.SIGNOUT,
    url: routeName.root,
    icon: LogOutIcon,
  },
];
