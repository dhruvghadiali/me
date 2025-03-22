import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { MailIcon, PhoneCallIcon, CircleAlertIcon } from "lucide-react";

import { variants } from "@MEUtils/enums";
import { Separator } from "@MEShadcnComponents/separator";
import { sendOtp } from "@MERedux/forgottenPassword/forgottenPasswordAction";
import { setSelectedUserForSendOtp } from "@MERedux/forgottenPassword/forgottenPasswordSlice";
import { forgottenPasswordFormTranslation } from "@MELocalizationEn/forgottenPassword/forgottenPasswordTranslationEn";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@MEShadcnComponents/avatar";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

const VerifyUser = () => {
  const { loader, error, users, selectedUserForSendOtp } = useSelector(
    (state) => state.forgottenPassword
  );
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const onSendOtpForSelectedUser = (user) => {
    dispatch(setSelectedUserForSendOtp(user));
    dispatch(sendOtp());
  };

  return (
    <>
      <div className="py-3" />
      {error && (
        <div className="bg-danger mb-2 flex items-center  rounded-md">
          <CircleAlertIcon className="text-accent ml-2" />
          <p className="text-accent p-2 text-center">{error}</p>
        </div>
      )}
      
      {users && users.length > 0 ? (
        _.map(users, (user, index) => {
          return (
            <div key={index}>
              {index === 0 && <Separator />}
              <div className="grid grid-cols-[60px_auto_100px] items-center mb-2">
                <Avatar>
                  <AvatarImage src={user.profile} />
                  <AvatarFallback>{user.profileName}</AvatarFallback>
                </Avatar>
                <div className="grid auto-rows-max grid-flow-row mr-2 py-2">
                  <p className="truncate">{user.username}</p>
                  <div className="grid grid-cols-[20px_auto] items-center mt-2">
                    <MailIcon size={15} className="text-danger" />
                    <p className="truncate text-xs">{user.email}</p>
                  </div>
                  <div className="grid grid-cols-[20px_auto] items-center mt-1">
                    <PhoneCallIcon size={15} className="text-danger" />
                    <p className="truncate text-xs">{user.phoneNumber}</p>
                  </div>
                </div>
                <MEButton
                  size="sm"
                  disabled={loader}
                  buttonVariant={variants.SUCCESS}
                  onClick={() => onSendOtpForSelectedUser(user)}
                >
                  {i18n.exists("sendOtpButtonLabel")
                    ? t("sendOtpButtonLabel")
                    : forgottenPasswordFormTranslation.sendOtpButtonLabel}{" "}
                  {loader && selectedUserForSendOtp.id === user.id && (
                    <MELoaderIcon />
                  )}
                </MEButton>
              </div>
              <Separator />
            </div>
          );
        })
      ) : (
        <p>
          {i18n.exists("accountDetailsNotFoundMessage")
            ? _.upperFirst(t("accountDetailsNotFoundMessage"))
            : _.upperFirst(
                forgottenPasswordFormTranslation.accountDetailsNotFoundMessage
              )}
        </p>
      )}
    </>
  );
};

VerifyUser.prototype = {};

export default VerifyUser;
