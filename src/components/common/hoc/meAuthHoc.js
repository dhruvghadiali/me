import { useEffect } from "react";
import { useNavigate } from "react-router";

import { appEnv } from "@MEUtils/enums";
import { routeName } from "@MEUtils/routeName";

import MEEnvHoc from "@MECommonComponents/hoc/meEnvHoc";
import PropTypes from "prop-types";

const MEAuthHoc = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("MEAuthHoc User:", user);
    
    if(!user){
       navigate(routeName.root, { replace: true });
    }
  }, [navigate]);

  return process.env.REACT_APP_ENV === appEnv.MOCK ? (
    <MEEnvHoc>
      <div className="pl-5 pr-5">{children}</div>
    </MEEnvHoc>
  ) : (
    <div className="pl-5 pr-5">{children}</div>
  );
};

MEAuthHoc.propTypes = {
  children: PropTypes.any,
};

export default MEAuthHoc;
