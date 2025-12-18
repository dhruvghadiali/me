import { useSelector } from "react-redux";

import MEHeader from "@MECommonComponents/header/meHeader";
import MESidebar from "@MECommonComponents/sidebar/meSidebar";
import SchoolScreenComponent from "@MEScreenComponents/school";

const SchoolPage = () => {
  const { token } = useSelector((state) => state.signIn);

  return token ? (
    <>
      <MESidebar>
        <SchoolScreenComponent callPublicAPI={false} />
      </MESidebar>
    </>
  ) : (
    <>
      <MEHeader />
      <SchoolScreenComponent callPublicAPI={true} />
    </>
  );
};

export default SchoolPage;
