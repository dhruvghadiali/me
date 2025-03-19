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
