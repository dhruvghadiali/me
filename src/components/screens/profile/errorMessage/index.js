import { AlertCircle } from "lucide-react";

const ProfileErrorMessageComponent = ({message}) => {
    return (
        <div className="mb-5 p-3 sm:p-4 bg-danger/50 border border-danger/200 rounded-md flex gap-3 items-center">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary">{"Error"}</p>
            <p className="text-sm text-primary mt-1">
              {message}
            </p>
          </div>
        </div>
    );
};

export default ProfileErrorMessageComponent;