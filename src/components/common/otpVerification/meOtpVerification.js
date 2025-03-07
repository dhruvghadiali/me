import PropTypes from "prop-types";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@MEShadcnComponents/input-otp";

const MEOtpVerification = (props) => {
  const { onComplete, onChange } = props;
  return (
    <InputOTP maxLength={6} onComplete={onComplete} onChange={onChange}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={4} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

MEOtpVerification.propTypes = {
  onComplete: PropTypes.func,
  onChange: PropTypes.func,
};

export default MEOtpVerification;
