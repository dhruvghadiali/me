const ScreenHeaderComponent = ({ headerText, className }) => {
  return (
    <h1
      className={`text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 ${className}`}
    >
      {headerText}
    </h1>
  );
};
export default ScreenHeaderComponent;