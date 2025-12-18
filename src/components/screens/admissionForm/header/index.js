const AdmissionFormHeaderComponent = () => {
  return (
    <>
      {/* Header Section */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
        {/* Title: Mobile 3xl | Tablet 4xl | Desktop 5xl | Large 6xl */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center text-foreground mb-2 sm:mb-3 md:mb-4">
          Admission Management
        </h1>
        {/* Subtitle: Mobile base | Tablet sm | Desktop base | Large lg */}
        <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-lg text-center text-muted-foreground px-2">
          View your application history and apply to new schools
        </p>
      </div>
    </>
  );
};
export default AdmissionFormHeaderComponent;
