import MEHoc from "@MECommonComponents/hoc/meHoc";
import MEHeader from "@MECommonComponents/header/meHeader";
import HomeScreenMeProfile from "@MEScreenComponents/home/meProfile/meProfile";

const HomeScreen = () => {
  return (
    <MEHoc>
      <MEHeader />
      <HomeScreenMeProfile />
    </MEHoc>
  );
};

export default HomeScreen;
