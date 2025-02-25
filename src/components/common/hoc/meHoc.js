import _ from "lodash";
import PropTypes from "prop-types";

const MEHoc = ({ children }) => {
  return <div className="pl-5 pr-5">{children}</div>;
};

MEHoc.propTypes = {
  children: PropTypes.any,
};

export default MEHoc;
