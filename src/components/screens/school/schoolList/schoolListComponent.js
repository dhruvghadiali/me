import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@MEShadcnComponents/card";
import { Mail, MapPin, Phone } from "lucide-react";

const SchoolListComponent = ({ handleCardClick }) => {
  return (
    <div className="h-full">
      <ScrollArea className="h-full">
        {[...Array(100)].map((_, i) => (
          <Card
            key={i}
            className={`rounded-2xl drop-shadow-sm shadow-dark mb-2 mr-5 ml-2 p-0 border border-dark cursor-pointer hover:scale-[1.01] transition-all duration-200 hover:border-dark ${
              i === 0 ? "mt-2" : ""
            }`}
            onClick={() => handleCardClick(i + 1)}
          >
            <CardHeader className="p-5">
              <CardTitle className="text-xl font-semibold text-dark">
                Springfield High School {i + 1}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-3 w-3 mt-1 text-dark" />
                <span className="flex-1 line-clamp-2">
                  123 Green Street, Springfield, IL, 62704 123 Green Street,
                  Springfield, IL, 62704 123 Green Street, Springfield, IL,
                  62704
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 text-dark" />
                <span className="flex-1 line-clamp-1">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 text-dark" />
                <span className="flex-1 line-clamp-1">
                  info@springfieldhigh.edu
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
        <ScrollBar
          orientation="vertical"
          className="bg-dark"
          thumbClassName="bg-blue-500 hover:bg-blue-600"
        />
      </ScrollArea>
    </div>
  );
};

export default SchoolListComponent;
