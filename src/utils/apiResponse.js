export const signInAPIResponse = (data) => {
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

export const SignUpSendOTPAPIResponse = (data) => {
  return data && data.verification_token ? data.verification_token : "";
};

export const SignInSendOTPAPIResponse = (data) => {
  return data && data.verification_token ? data.verification_token : "";
}
