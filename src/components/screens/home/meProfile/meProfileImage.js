import AppInfoImg from "@MEAssets/img/01.png";
import { motion } from "framer-motion";

const HomeScreenMeProfileImage = () => {
  return (
    <motion.div
      className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 "
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={AppInfoImg}
        alt="App Preview"
        className="w-3/4 md:w-full hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  );
};

export default HomeScreenMeProfileImage;
