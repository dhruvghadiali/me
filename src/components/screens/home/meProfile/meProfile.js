import HomeScreenMeProfileImage from "@MEScreenComponents/home/meProfile/meProfileImage";
import HomeScreenMeProfileDetail from "@MEScreenComponents/home/meProfile/meProfileDetail";
const HomeScreenMeProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-fit bg-gradient-to-r p-6">
      <HomeScreenMeProfileImage />
      <HomeScreenMeProfileDetail />
    </div>
  );
};

export default HomeScreenMeProfile;
