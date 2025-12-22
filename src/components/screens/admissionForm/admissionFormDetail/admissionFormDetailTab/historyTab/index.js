import { useSelector } from "react-redux";
import { FileTextIcon } from "lucide-react";

import _ from "lodash";
import moment from "moment";

const HistoryTabComponent = () => {
  const { admissionForm } = useSelector((state) => state.admissionForm);

  return (
    <div className="space-y-4">
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
        <div className="w-1 h-6 sm:h-7 bg-primary rounded-full" />
        <FileTextIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        Status Timeline
      </h3>
      <div className="space-y-2 sm:space-y-3">
        {admissionForm.statusHistory.map((history, index) => (
          <div key={history.id} className="flex gap-3 sm:gap-4">
            <div className="flex flex-col items-center pt-1">
              <div className={`w-3 h-3 rounded-full border-2 border-primary`} />
              {index < admissionForm.statusHistory.length - 1 && (
                <div className="w-0.5 h-10 sm:h-16 bg-gradient-to-b from-primary/40 to-primary/20 mt-2" />
              )}
            </div>
            <div className="flex-1 pb-2 sm:pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1.5">
                <span
                  className={`inline-flex px-2 py-0.5 rounded-full text-xs sm:text-sm font-bold w-fit`}
                >
                  {_.upperCase(history?.status) || "N/A"}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {moment(history?.changedAt).isValid()
                    ? moment(history?.changedAt).format("DD MMMM YYYY, HH:mm A")
                    : "N/A"}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1.5">
                By:{" "}
                <span className="font-bold text-foreground">
                  {_.upperFirst(history?.changedBy?.firstName) || ""} {_.upperFirst(history?.changedBy?.lastName) || ""} {history?.changedBy?.username ? `(${history?.changedBy?.username})` : ""}
                </span>
              </p>
              {history?.remarks && (
                <p className="text-xs sm:text-sm text-foreground bg-muted/40 p-2 sm:p-3 rounded-lg border border-primary/40 italic">
                  "{history?.remarks || ""}"
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTabComponent;
