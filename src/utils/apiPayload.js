export const signUpAPIPayload = (data) => {
  return {
    email: data && data.email ? data.email : "",
    username: data && data.username ? data.username : "",
    password: data && data.password ? data.password : "",
    last_name: data && data.lastName ? data.lastName : "",
    first_name: data && data.firstName ? data.firstName : "",
    phone_number: data && data.phoneNumber ? data.phoneNumber : "",
  };
};

export const signUpSendOTPAPIPayload = (data) => {
  return { user_id: data && data.id ? data.id : "" };
};

export const signUpOTPVerificationAPIPayload = (data) => {
  return {
    user_id: data && data.userId ? data.userId : "",
    verification_token:
      data && data.verificationToken ? data.verificationToken : "",
    email_otp: data && data.emailOtp ? Number(data.emailOtp) : "",
    phone_otp: data && data.phoneNumberOtp ? Number(data.phoneNumberOtp) : "",
  };
};

export const signInSendOTPAPIPayload = (data) => {
  return { user_id: data && data.id ? data.id : "" };
};

export const signInOTPVerificationAPIPayload = (data) => {
  return {
    user_id: data && data.userId ? data.userId : "",
    verification_token:
      data && data.verificationToken ? data.verificationToken : "",
    email_otp: data && data.emailOtp ? Number(data.emailOtp) : "",
    phone_otp: data && data.phoneNumberOtp ? Number(data.phoneNumberOtp) : "",
  };
};

export const forgottenPasswordAPIPayload = (data) => {
  return { account_name: data && data.accountName ? data.accountName : "" };
};

export const forgottenPasswordSendOTPAPIPayload = (data) => {
  return { user_id: data && data.id ? data.id : "" };
};

export const forgottenPasswordOTPVerificationAPIPayload = (data) => {
  return {
    user_id: data && data.userId ? data.userId : "",
    verification_token:
      data && data.verificationToken ? data.verificationToken : "",
    otp: data && data.otp ? Number(data.otp) : "",
  };
};

export const forgottenPasswordResetPasswordAPIPayload = (data) => {
  return {
    user_id: data && data.userId ? data.userId : "",
    reset_password_token:
      data && data.resetPasswordToken ? data.resetPasswordToken : "",
    password: data && data.password ? data.password : "",
  };
};
