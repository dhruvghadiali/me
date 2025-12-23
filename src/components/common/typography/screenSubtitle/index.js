const ScreenSubtitleComponent = ({ subTitleText, className = "" }) => {
  return (
    <p
      className={`text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-muted-foreground ${className}`}
    >
      {subTitleText}
    </p>
  );
};
export default ScreenSubtitleComponent;
