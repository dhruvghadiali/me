import { SearchX } from "lucide-react";

const NoInformationFoundTabComponent = () => {
  return (
    <div className="w-full h-full min-h-96 flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10 rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl">
      <div className="text-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        {/* Icon Container */}
        <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center">
          <div className="p-3 sm:p-4 md:p-5 rounded-full bg-muted/40 border border-border/50">
            <SearchX className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-muted-foreground/70" />
          </div>
        </div>

        {/* Message */}
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground/80 mb-2 sm:mb-3">
          {"No information found"}
        </h3>

        {/* Sub Message */}
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-sm mx-auto leading-relaxed">
          {"The requested information is not available at the moment."}
        </p>

        {/* Decorative Line */}
        <div className="mt-6 sm:mt-8 md:mt-10 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent w-24 mx-auto" />
      </div>
    </div>
  );
};

export default NoInformationFoundTabComponent;
