import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { MailIcon, PhoneCallIcon, CircleAlertIcon, CheckCircle2 } from "lucide-react";

import { variants } from "@MEUtils/enums";
import { Separator } from "@MEShadcnComponents/separator";
import { forgottenPasswordSendOTPAPIPayload } from "@MEUtils/apiPayload";
import { sendOtp } from "@MERedux/forgottenPassword/forgottenPasswordAction";
import { setSelectedUserForSendOtp } from "@MERedux/forgottenPassword/forgottenPasswordSlice";
import { forgottenPasswordFormTranslation } from "@MELocalization/forgottenPassword/forgottenPasswordTranslationEn";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@MEShadcnComponents/avatar";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

const VerifyUser = () => {
  const { loader, error, users } = useSelector(
    (state) => state.forgottenPassword
  );
  const { t, i18n } = useTranslation();
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();

  const onSendOtpForSelectedUser = () => {
    if (selectedUser) {
      dispatch(setSelectedUserForSendOtp(selectedUser));
      dispatch(sendOtp(forgottenPasswordSendOTPAPIPayload(selectedUser)));
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 mb-4 flex items-center gap-2 rounded-lg p-3">
          <CircleAlertIcon className="text-destructive h-5 w-5 shrink-0" />
          <p className="text-destructive text-sm font-medium">{error}</p>
        </div>
      )}
      
      <div className="space-y-3">
        {users && users.length > 0 ? (
          <>
            <p className="text-sm text-muted-foreground mb-2">
              Select the account you want to recover:
            </p>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              {_.map(users, (user, index) => {
                const isSelected = selectedUser?.id === user.id;
                return (
                  <div
                    key={index}
                    onClick={() => handleUserSelect(user)}
                    className={`border rounded-lg p-4 transition-all cursor-pointer ${
                      isSelected 
                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-14 w-14 ring-2 ring-border">
                          <AvatarImage src={user.profile} alt={user.username} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                            {user.profileName}
                          </AvatarFallback>
                        </Avatar>
                        {isSelected && (
                          <div className="absolute -top-1 -right-1 bg-success rounded-full p-0.5">
                            <CheckCircle2 className="h-5 w-5 text-success-foreground" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0 space-y-2">
                        <p className="font-semibold text-base truncate">{user.username}</p>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <MailIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                            <p className="truncate text-sm text-muted-foreground">{user.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <PhoneCallIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                            <p className="truncate text-sm text-muted-foreground">{user.phoneNumber}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="pt-4">
              <MEButton
                type="button"
                disabled={!selectedUser || loader}
                buttonVariant={variants.SUCCESS}
                meclassName="w-full"
                onClick={onSendOtpForSelectedUser}
              >
                {i18n.exists("sendOtpButtonLabel")
                  ? _.upperCase(t("sendOtpButtonLabel"))
                  : _.upperCase(forgottenPasswordFormTranslation.sendOtpButtonLabel)}
                {loader && <MELoaderIcon />}
              </MEButton>
            </div>
          </>
        ) : (
          <div className="text-center py-8 px-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-muted-foreground">
              {i18n.exists("accountDetailsNotFoundMessage")
                ? _.upperFirst(t("accountDetailsNotFoundMessage"))
                : _.upperFirst(
                    forgottenPasswordFormTranslation.accountDetailsNotFoundMessage
                  )}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

VerifyUser.prototype = {};

export default VerifyUser;
