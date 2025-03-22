import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { sidebarMenuName } from "@MEUtils/enums";
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
  sidebarMenu,
  footerMenu,
} from "@MECommonComponents/sidebar/sidebarMenu";
import {
  sidebarMenuLabel,
  sidebar,
} from "@MELocalizationEn/sidebar/sidebarTranslationEn";

import MEButton from "@MECommonComponents/button/meButton";
import logoGreen from "@MEAssets/img/logo-green.png";

import _ from "lodash";

const MESidebar = ({ children }) => {
  const { user } = useSelector((state) => state.signIn);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let activeMenu = "";

  const onClick = (item) => {
    if (item.title === sidebarMenuName.SIGNOUT) {
      dispatch(signOutUser());
    }

    // else {
    //   dispatch(changeActiveMenu(item.title));
    // }
    navigate(item.url, { replace: true });
  };

  return (
    <SidebarProvider>
      <Sidebar className="shadow-xl shadow-dark">
        <SidebarContent>
          <SidebarHeader className="h-20 p-2 bg-dark shadow-xl justify-center items-center">
            <img src={logoGreen} alt="Logo" className="w-16 h-16 bg-secondary rounded-full" />
          </SidebarHeader>
          <SidebarGroup className="h-screen">
            <SidebarGroupLabel className="mr-5 truncate ...">
              {_.upperFirst(
                i18n.exists("sidebarTitleDynamic")
                  ? t("sidebarTitleDynamic", {
                      username:
                        user && user.firstName && user.lastName
                          ? _.truncate(`${user.firstName} ${user.lastName}`)
                          : "",
                    })
                  : sidebar.sidebarTitleStatic
              )}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarMenu.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <MEButton
                        variant={"ghost"}
                        className={`justify-start ${
                          item.title === activeMenu
                            ? "text-primary hover:text-primary"
                            : "text-dark"
                        } `}
                        onClick={() => {}} //onClick(item)}
                      >
                        <item.icon />
                        <span>
                          {_.upperFirst(
                            i18n.exists(item.title)
                              ? t(item.title)
                              : sidebarMenuLabel[item.title]
                          )}
                        </span>
                      </MEButton>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarFooter>
            <SidebarMenu>
              {footerMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <MEButton
                      variant={"ghost"}
                      className="justify-start text-dark"
                      onClick={() => onClick(item)}
                    >
                      <item.icon />
                      <span>
                        {_.upperFirst(
                          i18n.exists(item.title)
                            ? t(item.title)
                            : sidebarMenuLabel[item.title]
                        )}
                      </span>
                    </MEButton>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
      <main className="w-full ">
        <SidebarTrigger />
        <div className="ml-5">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default MESidebar;
