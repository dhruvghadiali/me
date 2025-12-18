import NewAdmissionFormHeaderComponent from "@MEScreenComponents/admissionForm/newAdmissionForm/newAdmissionFormHeader";
import ProfileComplicationSummaryComponent from "@MEScreenComponents/admissionForm/newAdmissionForm/profileComplicationSummary";


const NewAdmissionFormComponent = () => {
    return (
         <div className="lg:sticky lg:top-6 xl:top-8 lg:h-fit">
              <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl border border-border p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
                {/* Icon: text-4xl mobile | text-5xl tablet+ */}
                <NewAdmissionFormHeaderComponent/>

                {/* Profile Completion Section */}
                <ProfileComplicationSummaryComponent />

                {/* CTA Button: py-2 mobile | py-3 tablet+ */}
                <button
                //   disabled={true < 100}
                  className={`w-full px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-3 text-primary-foreground font-semibold text-sm sm:text-base rounded-lg transition-all ${
                    true < 100
                      ? "bg-primary text-muted-foreground cursor-not-allowed"
                      : "bg-primary hover:shadow-lg"
                  }`}
                >
                  {true < 100
                    ? "Complete Profile First"
                    : "Start New Application"}
                </button>

                {/* Secondary Info: text-xs mobile | text-xs sm tablet+ */}
                {/* <p className="text-xs text-muted-foreground text-center mt-3 sm:mt-4 px-1">
                  {completionPercentage < 100
                    ? `Complete ${totalCount - completedCount} more section${
                        totalCount - completedCount !== 1 ? "s" : ""
                      }`
                    : "Your profile is complete!"}
                </p> */}
              </div>
            </div>
    );
};

export default NewAdmissionFormComponent;