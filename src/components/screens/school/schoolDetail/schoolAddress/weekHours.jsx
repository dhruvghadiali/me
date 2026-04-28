import _ from "lodash";
import moment from "moment";

const SchoolAddressWeekHoursComponent = ({ week }) => {
  const weeks = 7;
  return _.isEmpty(week)
    ? _.map(_.range(weeks), (day) => (
        <div key={day} className="flex justify-between">
          <span className="text-gray-600">
            {moment().startOf("isoWeek").add(day, "days").format("dddd")}:
          </span>
          <span className="text-dark font-medium">{"N/A"}</span>
        </div>
      ))
    : _.map(_.range(weeks), (day) => {
        const weekName = moment()
          .startOf("isoWeek")
          .add(day, "days")
          .format("dddd");
        const weekDetails = _.get(week, _.toLower(weekName), null);
        return (
          <div key={day} className="flex justify-between">
            <span className="text-gray-600">{weekName}:</span>
            {_.get(weekDetails, "closed", null) ? (
              <span className="text-danger font-medium uppercase">closed</span>
            ) : (
              <span className="text-dark font-medium">
                {`${_.get(weekDetails, "openTime", "N/A")} - ${_.get(weekDetails, "closeTime", "N/A")}`}
              </span>
            )}
          </div>
        );
      });
};

export default SchoolAddressWeekHoursComponent;
