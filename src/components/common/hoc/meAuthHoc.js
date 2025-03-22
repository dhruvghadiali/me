import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { appEnv } from "@MEUtils/enums";
import { routeName } from "@MEUtils/routeName";
import { setUserDetails } from "@MERedux/signIn/signInSlice";

import PropTypes from "prop-types";

import MEEnvHoc from "@MECommonComponents/hoc/meEnvHoc";
import MESidebar from "@MECommonComponents/sidebar/meSidebar";

const MEAuthHoc = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("MEAuthHoc User:", user);

    if (!user) {
      navigate(routeName.root, { replace: true });
      dispatch(setUserDetails({}));
    }else{
      dispatch(setUserDetails(user));
    }
  }, [navigate]);

  return process.env.REACT_APP_ENV === appEnv.MOCK ? (
    <MEEnvHoc>
      <div className="pl-5 pr-5">{children}</div>
    </MEEnvHoc>
  ) : (
    <MESidebar>{children}</MESidebar>
  );
};

MEAuthHoc.propTypes = {
  children: PropTypes.any,
};

export default MEAuthHoc;
