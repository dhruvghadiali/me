
import AboutUsComponent from "@MEScreenComponents/home/aboutUs";
import AboutUsImageComponent from "@MEScreenComponents/home/aboutUsImage";

const HomeScreenComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-fit bg-gradient-to-r p-6">
      <AboutUsImageComponent />
      <AboutUsComponent />
    </div>
  );
};

export default HomeScreenComponent;
