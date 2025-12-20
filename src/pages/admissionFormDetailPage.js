import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CalendarDaysIcon,
  GraduationCapIcon,
  FileTextIcon,
  ClipboardListIcon,
  DollarSignIcon,
  FileCheckIcon,
  UserIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  XIcon,
} from "lucide-react";
import _ from "lodash";
import moment from "moment";

import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

const AdmissionFormDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { admissionForms, admissionFormsLoader } = useSelector(
    (state) => state.admissionForm
  );

  const [activeTab, setActiveTab] = useState("overview");

  const admission = _.find(admissionForms, { id }) || null;

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-success/10 text-success border-success/30";
      case "pending":
        return "bg-warning/10 text-warning border-warning/30";
      case "rejected":
        return "bg-danger/10 text-danger border-danger/30";
      case "draft":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "accepted":
        return <CheckCircleIcon className="w-4 h-4" />;
      case "rejected":
        return <AlertCircleIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status) => {
    const labels = {
      accepted: "Accepted",
      pending: "Pending",
      rejected: "Rejected",
      draft: "Draft",
    };
    return labels[status] || status;
  };

  if (admissionFormsLoader) {
    return (
      <div className="flex justify-center items-center py-20 md:py-24 lg:py-32">
        <MELoaderIcon />
      </div>
    );
  }

  if (!admission) {
    return (
      <div className="flex flex-col justify-center items-center py-20 md:py-24 lg:py-32">
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4">
          Application not found
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: ClipboardListIcon },
    { id: "history", label: "Status History", icon: FileTextIcon },
    { id: "documents", label: "Documents", icon: FileCheckIcon },
    { id: "appointments", label: "Appointments", icon: CalendarDaysIcon },
    { id: "payments", label: "Payments", icon: DollarSignIcon },
  ];

  return (
    <div className="mr-4">
      <div className="w-full space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground line-clamp-1">
              {_.upperCase(admission?.schoolAcademicClass?.school?.name) ||
                "N/A"}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
              Application #{admission?.applicationNumber || "N/A"}
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="p-1 sm:p-1.5 md:p-2 rounded-lg border border-border/50 text-foreground hover:bg-danger/10 hover:border-danger/30 transition-all duration-200 flex-shrink-0"
          >
            <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Status & Quick Info Card */}
        <div className="bg-gradient-to-br from-card to-card/95 rounded-lg sm:rounded-xl md:rounded-2xl border border-border/60 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 pb-4 sm:pb-5 md:pb-6 border-b border-border/40">
            <div>
              <p className="text-xs sm:text-xs md:text-sm text-muted-foreground mb-1.5 sm:mb-2 font-semibold uppercase tracking-wide">
                Status
              </p>
              <span
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-lg border font-semibold text-xs sm:text-sm transition-all ${getStatusColor(
                  admission?.status
                )}`}
              >
                {getStatusIcon(admission?.status)}
                {getStatusBadge(admission?.status)}
              </span>
            </div>
            <div className="text-right">
              <p className="text-xs sm:text-xs md:text-sm text-muted-foreground mb-1.5 sm:mb-2 font-semibold uppercase tracking-wide">
                Academic Session
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary">
                {admission?.academicSession || "N/A"}
              </p>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Board
              </p>
              <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                {_.upperCase(
                  admission?.schoolAcademicClass?.educationBoard?.educationBoard
                ) || "N/A"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Class
              </p>
              <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                {_.upperCase(
                  admission?.schoolAcademicClass?.academicClass?.academicClass
                ) || "N/A"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Payment
              </p>
              <p className="text-xs sm:text-sm font-bold text-foreground">
                {_.upperCase(admission?.paymentMethod) || "N/A"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Created
              </p>
              <p className="text-xs sm:text-sm font-bold text-foreground">
                {moment(admission?.createdAt).isValid()
                  ? moment(admission?.createdAt).format("DD MMM")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border/60 bg-card/50 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl overflow-x-auto">
          <div className="flex gap-0 px-2 sm:px-3 md:px-4 lg:px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border-b-2 transition-all duration-200 whitespace-nowrap text-xs sm:text-sm font-medium ${
                    activeTab === tab.id
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gradient-to-br from-card to-card/95 rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl border border-t-0 border-border/60 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 shadow-sm">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 sm:h-7 bg-primary rounded-full" />
                  <UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Application Metadata
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/2 border border-primary/20 rounded-lg p-3 sm:p-4 space-y-1 hover:border-primary/40 transition-all">
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">
                      Created By
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground">
                      {admission?.createdBy || "N/A"}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-success/5 to-success/2 border border-success/20 rounded-lg p-3 sm:p-4 space-y-1 hover:border-success/40 transition-all">
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">
                      Updated By
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground">
                      {admission?.updatedBy || "N/A"}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-warning/5 to-warning/2 border border-warning/20 rounded-lg p-3 sm:p-4 space-y-1 hover:border-warning/40 transition-all">
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">
                      App Number
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground">
                      {admission?.applicationNumber || "N/A"}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/2 border border-primary/20 rounded-lg p-3 sm:p-4 space-y-1 hover:border-primary/40 transition-all">
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">
                      Created At
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground">
                      {moment(admission?.createdAt).isValid()
                        ? moment(admission?.createdAt).format("DD MMM YYYY")
                        : "N/A"}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-success/5 to-success/2 border border-success/20 rounded-lg p-3 sm:p-4 space-y-1 hover:border-success/40 transition-all">
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">
                      Updated At
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground">
                      {moment(admission?.updatedAt).isValid()
                        ? moment(admission?.updatedAt).format("DD MMM YYYY")
                        : "N/A"}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-warning/5 to-warning/2 border border-warning/20 rounded-lg p-3 sm:p-4 space-y-1 hover:border-warning/40 transition-all">
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">
                      Payment Mode
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground">
                      {_.upperCase(admission?.paymentMethod) || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Status History Tab */}
          {activeTab === "history" &&
            admission?.statusHistory &&
            admission.statusHistory.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 sm:h-7 bg-primary rounded-full" />
                  <FileTextIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Status Timeline
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {admission.statusHistory.map((history, index) => (
                    <div key={history._id} className="flex gap-3 sm:gap-4">
                      <div className="flex flex-col items-center pt-1">
                        <div
                          className={`w-3 h-3 rounded-full border-2 border-current ${
                            getStatusColor(history.status).split(" ")[1]
                          }`}
                        />
                        {index < admission.statusHistory.length - 1 && (
                          <div className="w-0.5 h-10 sm:h-12 bg-border/40 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-2 sm:pb-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1.5">
                          <span
                            className={`inline-flex px-2 py-0.5 rounded-full text-xs sm:text-sm font-bold w-fit ${getStatusColor(
                              history.status
                            )}`}
                          >
                            {getStatusBadge(history.status)}
                          </span>
                          <span className="text-xs text-muted-foreground font-medium">
                            {moment(history.changedAt).isValid()
                              ? moment(history.changedAt).format(
                                  "DD MMM, HH:mm"
                                )
                              : "N/A"}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1.5">
                          By:{" "}
                          <span className="font-bold text-foreground">
                            {history.changedBy || "N/A"}
                          </span>
                        </p>
                        {history.remarks && (
                          <p className="text-xs sm:text-sm text-foreground bg-muted/40 p-2 sm:p-3 rounded-lg border border-border/40 italic">
                            "{history.remarks}"
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <div className="space-y-4">
              {admission?.verifiedDocuments &&
              admission.verifiedDocuments.length > 0 ? (
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 sm:h-7 bg-success rounded-full" />
                    <FileCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                    Verified Documents
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {admission.verifiedDocuments.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gradient-to-r from-success/5 to-success/2 border border-success/30 rounded-lg p-3 sm:p-4 hover:border-success/50 transition-all"
                      >
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-foreground">
                            {doc.documentName || `Document ${index + 1}`}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Status:{" "}
                            <span className="font-semibold text-success">
                              {doc.status || "N/A"}
                            </span>
                          </p>
                        </div>
                        <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 sm:py-8">
                  <p className="text-sm text-muted-foreground">
                    No verified documents
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === "appointments" && (
            <div className="space-y-5 sm:space-y-6">
              {admission?.documentVerificationAppointment &&
                admission.documentVerificationAppointment.length > 0 && (
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 sm:h-7 bg-warning rounded-full" />
                      <CalendarDaysIcon className="w-4 h-4 sm:w-5 sm:h-5 text-warning" />
                      Document Verification
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {admission.documentVerificationAppointment.map(
                        (apt, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-r from-warning/5 to-warning/2 border border-warning/30 rounded-lg p-3 sm:p-4 hover:border-warning/50 transition-all"
                          >
                            <div className="flex items-start justify-between mb-2 sm:mb-3">
                              <h4 className="font-bold text-xs sm:text-sm text-foreground">
                                Appointment {index + 1}
                              </h4>
                              <span className="text-xs font-bold px-2 py-1 rounded bg-warning/20 text-warning">
                                {apt.status || "N/A"}
                              </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs">
                              <div>
                                <p className="text-muted-foreground font-semibold mb-0.5">
                                  Date
                                </p>
                                <p className="font-bold text-foreground">
                                  {moment(apt.appointmentDate).isValid()
                                    ? moment(apt.appointmentDate).format(
                                        "DD MMM"
                                      )
                                    : "N/A"}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground font-semibold mb-0.5">
                                  Time
                                </p>
                                <p className="font-bold text-foreground">
                                  {apt.time || "N/A"}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground font-semibold mb-0.5">
                                  Location
                                </p>
                                <p className="font-bold text-foreground truncate">
                                  {apt.location || "N/A"}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

              {admission?.feePaymentAppointment &&
                admission.feePaymentAppointment.length > 0 && (
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 sm:h-7 bg-success rounded-full" />
                      <DollarSignIcon className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                      Fee Payment Schedule
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {admission.feePaymentAppointment.map((apt, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-success/5 to-success/2 border border-success/30 rounded-lg p-3 sm:p-4 hover:border-success/50 transition-all"
                        >
                          <div className="flex items-start justify-between mb-2 sm:mb-3">
                            <h4 className="font-bold text-xs sm:text-sm text-foreground">
                              Appointment {index + 1}
                            </h4>
                            <span className="text-xs font-bold px-2 py-1 rounded bg-success/20 text-success">
                              {apt.status || "N/A"}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs">
                            <div>
                              <p className="text-muted-foreground font-semibold mb-0.5">
                                Date
                              </p>
                              <p className="font-bold text-foreground">
                                {moment(apt.appointmentDate).isValid()
                                  ? moment(apt.appointmentDate).format("DD MMM")
                                  : "N/A"}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground font-semibold mb-0.5">
                                Time
                              </p>
                              <p className="font-bold text-foreground">
                                {apt.time || "N/A"}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground font-semibold mb-0.5">
                                Amount
                              </p>
                              <p className="font-bold text-success">
                                ₹ {apt.amount || "0"}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {(!admission?.documentVerificationAppointment ||
                admission.documentVerificationAppointment.length === 0) &&
                (!admission?.feePaymentAppointment ||
                  admission.feePaymentAppointment.length === 0) && (
                  <div className="text-center py-6 sm:py-8">
                    <p className="text-sm text-muted-foreground">
                      No appointments scheduled
                    </p>
                  </div>
                )}
            </div>
          )}

          {/* Payments Tab */}
          {activeTab === "payments" &&
            admission?.feePayments &&
            admission.feePayments.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 sm:h-7 bg-success rounded-full" />
                  <DollarSignIcon className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                  Payment History
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {admission.feePayments.map((payment, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-success/5 to-success/2 border border-success/30 rounded-lg p-3 sm:p-4 hover:border-success/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <h4 className="font-bold text-xs sm:text-sm text-foreground">
                          Payment {index + 1}
                        </h4>
                        <span className="text-sm sm:text-base font-bold text-success">
                          ₹ {payment.amount || "0"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs">
                        <div>
                          <p className="text-muted-foreground font-semibold mb-0.5">
                            Date
                          </p>
                          <p className="font-bold text-foreground">
                            {moment(payment.paymentDate).isValid()
                              ? moment(payment.paymentDate).format("DD MMM")
                              : "N/A"}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground font-semibold mb-0.5">
                            Method
                          </p>
                          <p className="font-bold text-foreground">
                            {_.upperCase(payment.paymentMethod) || "N/A"}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground font-semibold mb-0.5">
                            Txn ID
                          </p>
                          <p className="font-bold text-foreground text-xs truncate">
                            {payment.transactionId || "N/A"}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground font-semibold mb-0.5">
                            Status
                          </p>
                          <p className="font-bold text-success">
                            {payment.status || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {activeTab === "payments" &&
            (!admission?.feePayments || admission.feePayments.length === 0) && (
              <div className="text-center py-6 sm:py-8">
                <p className="text-sm text-muted-foreground">
                  No payment records
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormDetailPage;
