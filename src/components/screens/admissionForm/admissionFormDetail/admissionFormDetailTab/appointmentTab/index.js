import { CalendarIcon, ClockIcon, UserIcon, FileTextIcon, IndianRupeeIcon } from "lucide-react";
import _ from "lodash";
import moment from "moment";

const AppointmentTabComponent = () => {
  // Dummy data for appointments
  const documentVerificationAppointments = [
    {
      bookingAt: "2026-02-04T19:07:26.444Z",
      bookingBy: {
        firstName: "Dhruv",
        lastName: "Ghadiali",
        username: "dhruv123"
      },
      remarks: "Document verification appointment scheduled",
      scheduledDate: "2026-06-02T00:00:00.000Z",
      scheduledTimeSlot: "12:00 AM - 1:00 AM"
    },
    {
      bookingAt: "2026-02-04T19:07:26.444Z",
      bookingBy: {
        firstName: "Dhruv",
        lastName: "Ghadiali",
        username: "dhruv123"
      },
      remarks: "Document verification appointment scheduled",
      scheduledDate: "2026-06-02T00:00:00.000Z",
      scheduledTimeSlot: "12:00 AM - 1:00 AM"
    }
  ];

  const feeAppointments = [
    {
      bookingAt: "2026-02-05T10:30:15.789Z",
      bookingBy: {
        firstName: "Rajesh",
        lastName: "Patel",
        username: "rajesh456"
      },
      remarks: "Fee payment and discussion appointment",
      scheduledDate: "2026-06-05T00:00:00.000Z",
      scheduledTimeSlot: "10:00 AM - 11:00 AM"
    }
  ];

  // To test empty state, uncomment below:
  // const documentVerificationAppointments = [];
  // const feeAppointments = [];

  const renderAppointmentSection = (appointments, title, icon) => {
    return (
      <div className="space-y-4">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
          <div className="w-1 h-6 sm:h-7 bg-primary rounded-full" />
          {icon}
          {title}
        </h3>
        
        {appointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 sm:py-12 px-4 bg-muted/20 rounded-lg border border-dashed border-muted-foreground/30">
            <CalendarIcon className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground/40 mb-3" />
            <p className="text-sm sm:text-base text-muted-foreground font-medium text-center">
              No appointments scheduled yet
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/70 text-center mt-1">
              Appointments will appear here once scheduled
            </p>
          </div>
        ) : (
          <div className="space-y-2 sm:space-y-3">
            {appointments.map((appointment, index) => (
              <div key={index} className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full border-2 border-primary" />
                  {index < appointments.length - 1 && (
                    <div className="w-0.5 h-full min-h-16 sm:min-h-20 bg-gradient-to-b from-primary/40 to-primary/20 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-2 sm:pb-3">
                  <div className="bg-card border border-border rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-primary" />
                        <span className="text-sm sm:text-base font-bold text-foreground">
                          {moment(appointment?.scheduledDate).isValid()
                            ? moment(appointment?.scheduledDate).format("DD MMMM YYYY")
                            : "N/A"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4 text-primary" />
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                          {appointment?.scheduledTimeSlot || "N/A"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <UserIcon className="w-4 h-4 text-muted-foreground" />
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Booked by:{" "}
                        <span className="font-bold text-foreground">
                          {_.upperFirst(appointment?.bookingBy?.firstName) || ""}{" "}
                          {_.upperFirst(appointment?.bookingBy?.lastName) || ""}{" "}
                          {appointment?.bookingBy?.username ? `(${appointment?.bookingBy?.username})` : ""}
                        </span>
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground mb-2">
                      Booked at:{" "}
                      <span className="font-medium">
                        {moment(appointment?.bookingAt).isValid()
                          ? moment(appointment?.bookingAt).format("DD MMM YYYY, HH:mm A")
                          : "N/A"}
                      </span>
                    </p>

                    {appointment?.remarks && (
                      <div className="mt-3 pt-3 border-t border-border">
                        <p className="text-xs sm:text-sm text-foreground bg-muted/40 p-2 sm:p-3 rounded-lg border border-primary/40 italic">
                          "{appointment?.remarks || ""}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Document Verification Appointments */}
      {renderAppointmentSection(
        documentVerificationAppointments,
        "Document Verification Appointments",
        <FileTextIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      )}

      {/* Fee Appointments */}
      {renderAppointmentSection(
        feeAppointments,
        "Fee Appointments",
        <IndianRupeeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      )}
    </div>
  );
};

export default AppointmentTabComponent;