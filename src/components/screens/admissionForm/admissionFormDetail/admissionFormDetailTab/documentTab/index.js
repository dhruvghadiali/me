import { useSelector } from "react-redux";
import { CheckCircle2, XCircle, FileText, Files } from "lucide-react";

import _ from "lodash";

import { Badge } from "@MEShadcnComponents/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";

const DocumentVerificationTabComponent = () => {
  const { admissionForm } = useSelector((state) => state.admissionForm);

  const verifiedDocuments = admissionForm?.verifiedDocuments || [];

  return (
    <div className="space-y-4 ">
      <div className="grid gap-4">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
          <div className="w-1 h-6 sm:h-7 bg-primary rounded-full" />
          <Files className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          Document Verification Checkpoint
        </h3>
        {verifiedDocuments.length > 0 && (
          <Card className="bg-muted/30 border border-primary/40">
            <CardContent className="py-3 sm:py-4 px-3 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
                <span className="font-medium text-sm sm:text-base">Document Summary</span>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <span className="text-muted-foreground">
                    Total:{" "}
                    <span className="font-semibold text-foreground">
                      {verifiedDocuments.length}
                    </span>
                  </span>
                  <span className="text-success">
                    Verified:{" "}
                    <span className="font-semibold">
                      {verifiedDocuments.filter((doc) => doc.isVerified).length}
                    </span>
                  </span>
                  <span className="text-danger">
                    Pending:{" "}
                    <span className="font-semibold">
                      {
                        verifiedDocuments.filter((doc) => !doc.isVerified)
                          .length
                      }
                    </span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {verifiedDocuments.length === 0 ? (
          <Card>
            <CardContent className="py-8 sm:py-12 px-4">
              <div className="flex flex-col items-center justify-center text-center">
                <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mb-3" />
                <p className="text-sm sm:text-base text-muted-foreground">
                  No documents available for verification
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          verifiedDocuments.map((doc) => (
            <Card
              key={doc.id}
              className="overflow-hidden border border-primary/40"
            >
              <CardHeader className="bg-muted/50 p-3 sm:p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-1.5 sm:space-y-2 flex-1">
                    <CardTitle className="text-sm sm:text-base md:text-lg flex items-center gap-2 flex-wrap">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span className="break-words">
                        {_.startCase(
                          doc.schoolAdmissionDocument?.admissionDocument
                            ?.admissionDocument,
                        ) || "N/A"}
                      </span>
                    </CardTitle>
                    {doc.schoolAdmissionDocument?.isRequired && (
                      <Badge
                        variant="outline"
                        className="text-xs border border-primary/40 w-fit"
                      >
                        Required
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {doc.isVerified ? (
                      <Badge
                        variant="default"
                        className="bg-green-500 hover:bg-green-600 flex items-center gap-1 text-xs sm:text-sm"
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        Verified
                      </Badge>
                    ) : (
                      <Badge
                        variant="destructive"
                        className="flex items-center gap-1 text-xs sm:text-sm"
                      >
                        <XCircle className="h-3 w-3" />
                        Not Verified
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-3 sm:pt-4 p-3 sm:p-4 md:p-6">
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                        Status
                      </p>
                      <p className="text-xs sm:text-sm font-medium">
                        {doc.isVerified ? "Verified" : "Pending Verification"}
                      </p>
                    </div>
                  </div>

                  {doc.notes && (
                    <div className="pt-2 border-t">
                      <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2">
                        Notes
                      </p>
                      <p className="text-xs sm:text-sm bg-muted/50 px-2 sm:px-3 py-2 rounded border border-primary/40 break-words">
                        {doc.notes}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default DocumentVerificationTabComponent;
