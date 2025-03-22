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
    user_id : data && data.userId ? data.userId : "",
    verification_token: data && data.verificationToken ? data.verificationToken : "",
    email_otp: data && data.emailOtp ? Number(data.emailOtp) : "",
    phone_otp: data && data.phoneNumberOtp ? Number(data.phoneNumberOtp) : "",
  }
};

export const signInSendOTPAPIPayload = (data) => {
  return { user_id: data && data.id ? data.id : "" };
};

export const signInOTPVerificationAPIPayload = (data) => {
  return {
    user_id : data && data.userId ? data.userId : "",
    verification_token: data && data.verificationToken ? data.verificationToken : "",
    email_otp: data && data.emailOtp ? Number(data.emailOtp) : "",
    phone_otp: data && data.phoneNumberOtp ? Number(data.phoneNumberOtp) : "",
  }
};
