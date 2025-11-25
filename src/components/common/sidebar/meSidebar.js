import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { School, User, Settings, LogOut, ChevronUp, FolderMinusIcon } from "lucide-react";

import { signOutUser } from "@MERedux/signIn/signInSlice";

import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
} from "@MEShadcnComponents/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@MEShadcnComponents/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@MEShadcnComponents/avatar";

import logoGreen from "@MEAssets/img/logo-green.png";

import _ from "lodash";

const MESidebar = ({ children }) => {
  const { user } = useSelector((state) => state.signIn);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Admission Forms",
      icon: FolderMinusIcon,
      url: "/admission-forms",
    },
    {
      title: "Schools",
      icon: School,
      url: "/schools",
    },
    {
      title: "Profile",
      icon: User,
      url: "/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      url: "/settings",
    },
  ];

  const handleSignOut = () => {
    dispatch(signOutUser());
    sleep(500);
    navigate("/", { replace: true });
  };

  const handleMenuClick = (url) => {
    navigate(url, { replace: true });
  };

  return (
    <SidebarProvider>
      <Sidebar className="shadow-xl">
        <SidebarContent>
          <SidebarHeader className="p-4 border-b">
            <div className="flex items-center gap-3">
              <img src={logoGreen} alt="Logo" className="w-12 h-12 rounded-full" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">ME Platform</span>
                <span className="text-xs text-muted-foreground">Student Portal</span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarGroup>
            <SidebarGroupLabel className="px-4 py-2">
              {i18n.exists("menuLabel")
                ? _.upperFirst(t("menuLabel"))
                : "Menu"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton onClick={() => handleMenuClick(item.url)}>
                      <item.icon className="h-4 w-4" />
                      <span>
                        {i18n.exists(item.title.toLowerCase())
                          ? _.upperFirst(t(item.title.toLowerCase()))
                          : item.title}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarFooter className="mt-auto border-t">
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="h-auto py-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.profile} alt={user?.username} />
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                          {user?.username?.substring(0, 2).toUpperCase() || user?.firstName?.substring(0, 1).toUpperCase() + user?.lastName?.substring(0, 1).toUpperCase() || "ME"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-1 flex-col items-start text-left min-w-0">
                        <span className="text-sm font-medium truncate w-full">
                          {user?.username || `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "Guest User"}
                        </span>
                        <span className="text-xs text-muted-foreground truncate w-full">
                          {user?.email || "guest@example.com"}
                        </span>
                      </div>
                      <ChevronUp className="h-4 w-4 ml-auto shrink-0" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="end" className="w-56">
                    <DropdownMenuItem onClick={() => handleMenuClick("/profile")}>
                      <User className="mr-2 h-4 w-4" />
                      <span>{i18n.exists("profile") ? _.upperFirst(t("profile")) : "Profile"}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMenuClick("/settings")}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>{i18n.exists("settings") ? _.upperFirst(t("settings")) : "Settings"}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={handleSignOut} 
                      className="text-destructive focus:text-destructive focus:bg-destructive/10"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>{i18n.exists("signOut") ? _.upperFirst(t("signOut")) : "Sign Out"}</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
      <main className="w-full">
        <SidebarTrigger />
        <div className="ml-5">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default MESidebar;
