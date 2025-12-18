const AdmissionFormSummaryComponent = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
            <div className="bg-success/10 rounded-lg sm:rounded-xl md:rounded-xl border border-success/20 p-4 sm:p-5 md:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-success mb-1 sm:mb-2">
                {5}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Accepted
              </p>
            </div>
            <div className="bg-warning/10 rounded-lg sm:rounded-xl md:rounded-xl border border-warning/20 p-4 sm:p-5 md:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-warning mb-1 sm:mb-2">
                {2}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Pending
              </p>
            </div>
            <div className="bg-danger/10 rounded-lg sm:rounded-xl md:rounded-xl border border-danger/20 p-4 sm:p-5 md:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-danger mb-1 sm:mb-2">
                {5}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Rejected
              </p>
            </div>
          </div>
    );
};
export default AdmissionFormSummaryComponent;