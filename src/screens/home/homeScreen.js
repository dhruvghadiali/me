import MEHeader from "@MECommonComponents/header/meHeader";
import HomeScreenMeProfile from "@MEScreenComponents/home/meProfile/meProfile";

const HomeScreen = () => {
  window.onpopstate = function () {
    window.history.go(1);
  };

  return (
    <>
      <MEHeader />
      <HomeScreenMeProfile />
    </>
  );
};

export default HomeScreen;
