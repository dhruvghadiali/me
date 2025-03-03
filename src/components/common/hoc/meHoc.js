import { appEnv } from "@MEUtils/enums";

import MEEnvHoc from "@MECommonComponents/hoc/meEnvHoc";
import PropTypes from "prop-types";

const MEHoc = ({ children }) => {
  return process.env.REACT_APP_ENV === appEnv.MOCK ? (
    <MEEnvHoc>
      <div className="pl-5 pr-5">{children}</div>
    </MEEnvHoc>
  ) : (
    <div className="pl-5 pr-5">{children}</div>
  );
};

MEHoc.propTypes = {
  children: PropTypes.any,
};

export default MEHoc;
