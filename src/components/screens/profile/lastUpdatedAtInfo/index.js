import moment from "moment";

const LastUpdatedAtInfoComponent = ({ updatedAt }) => {
  return (
    updatedAt && moment(updatedAt).isValid() && (
      <p className="text-sm text-primary/500 font-medium">
        Last Updated:{" "}
        <span className="text-primary/700">
          {moment(updatedAt).format("DD MMMM YYYY, hh:mm A")}
        </span>
      </p>
    )
  );
};

export default LastUpdatedAtInfoComponent;
