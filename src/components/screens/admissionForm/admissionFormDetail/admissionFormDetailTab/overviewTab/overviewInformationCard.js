const OverviewInformationCardComponent = ({title, message}) => {
    return (
        <div className="bg-gradient-to-br from-primary/5 to-primary/2 border border-primary/20 rounded-lg p-3 sm:p-4 space-y-1 hover:border-primary/40 transition-all">
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">
                {title}
            </p>
            <p className="text-xs sm:text-sm font-bold text-foreground">
              {message || "N/A"}
            </p>
          </div>
    );
};

export default OverviewInformationCardComponent;