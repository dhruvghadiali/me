import _ from "lodash";

const signInAPIResponse = (data) => {
  return {
    id: data && data.id ? data.id : "",
    token: data && data.token ? data.token : "",
    email: data && data.email ? data.email : "",
    username: data && data.username ? data.username : "",
    lastName: data && data.last_name ? data.last_name : "",
    firstName: data && data.first_name ? data.first_name : "",
    phoneNumber: data && data.phone_number ? data.phone_number : "",
    isAccountVerified:
      data && data.is_account_verified ? data.is_account_verified : "",
  };
};

const signUpSendOTPAPIResponse = (data) => {
  return data && data.verification_token ? data.verification_token : "";
};

const signInSendOTPAPIResponse = (data) => {
  return data && data.verification_token ? data.verification_token : "";
};

const forgottenPasswordAPIResponse = (data) => {
  return _.map(data, (item) => {
    return {
      id: item && item.id ? item.id : "",
      email: item && item.email ? item.email : "",
      username: item && item.username ? item.username : "",
      lastName: item && item.last_name ? item.last_name : "",
      firstName: item && item.first_name ? item.first_name : "",
      phoneNumber: item && item.phone_number ? item.phone_number : "",
      profile: "",
      profileName: "",
    };
  });
};

const forgottenPasswordSendOTPAPIResponse = (data) => {
  return data && data.verification_token ? data.verification_token : "";
};

const forgottenPasswordOTPVerificationAPIResponse = (data) => {
  return data && data.reset_password_token ? data.reset_password_token : "";
};

export{
    signInAPIResponse,
    signUpSendOTPAPIResponse,
    signInSendOTPAPIResponse,
    forgottenPasswordAPIResponse,
    forgottenPasswordSendOTPAPIResponse,
    forgottenPasswordOTPVerificationAPIResponse
}
