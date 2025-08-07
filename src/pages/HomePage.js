
import HomeScreenMeProfileImage from "../components/screens/home/meProfile/meProfileImage";

const HomePage = () => {

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-8">
        

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-fit bg-gradient-to-r p-6">
          <HomeScreenMeProfileImage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
