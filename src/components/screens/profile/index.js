import React from "react";
import { User, Users, MapPin, Mars, Venus, Siren } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@MEShadcnComponents/accordion";

import ProfileHeaderComponent from "@MEScreenComponents/profile/header";
import FatherProfileComponent from "@MEScreenComponents/profile/fatherProfile";
import MotherProfileComponent from "@MEScreenComponents/profile/motherProfile";
import StudentProfileComponent from "@MEScreenComponents/profile/studentProfile";
import SiblingProfileComponent from "@MEScreenComponents/profile/siblingProfile";

const ProfileScreenComponent = () => {
  const accordionItems = [
    {
      id: "student",
      title: "Student Profile",
      sub: "Personal information and academic details",
      icon: <User className="w-5 h-5" />,
      content: <StudentProfileComponent />,
    },
    {
      id: "father",
      title: "Father Profile",
      sub: "Father's contact and occupation details",
      icon: <Mars className="w-5 h-5" />,
      content: <FatherProfileComponent />,
    },
    {
      id: "mother",
      title: "Mother Profile",
      sub: "Mother's contact and occupation details",
      icon: <Venus className="w-5 h-5" />,
      content: <MotherProfileComponent />,
    },
    {
      id: "siblings",
      title: "Siblings Profile",
      sub: "Information about your siblings",
      icon: <Users className="w-5 h-5" />,
      content: <SiblingProfileComponent />,
    },
    {
      id: "address",
      title: "Address",
      sub: "Residential address and location details",
      icon: <MapPin className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-sm md:text-base">
          <div>
            <p className="text-xs md:text-sm text-muted-foreground">
              Street Address
            </p>
            <p className="font-medium text-foreground">
              123 Main Street, Apt 4B
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">City</p>
              <p className="font-medium text-foreground">New York</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">State</p>
              <p className="font-medium text-foreground">NY</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Postal Code
              </p>
              <p className="font-medium text-foreground">10001</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Country
              </p>
              <p className="font-medium text-foreground">USA</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "emergency",
      title: "Emergency Contact",
      sub: "Emergency contact information and relationship",
      icon: <Siren className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-sm md:text-base">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">Name</p>
              <p className="font-medium text-foreground">David Smith</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Relationship
              </p>
              <p className="font-medium text-foreground">Uncle</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs md:text-sm text-muted-foreground">Phone</p>
              <p className="font-medium text-foreground">+91 9876543220</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs md:text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">
                david.smith@example.com
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ProfileHeaderComponent />
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-w-4xl mx-auto">
        <Accordion type="single" collapsible>
          <div className="w-full space-y-2">
            {accordionItems.map((item) => (
              <div key={item.id} className="py-2">
                <AccordionItem
                  value={item.id}
                  className="border border-primary rounded-lg"
                >
                  <AccordionTrigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 px-4 text-left text-sm font-semibold leading-6 transition-all outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50">
                    <span className="flex flex-col space-y-1">
                      <span className="flex items-center gap-3 text-foreground">
                        <div className="text-primary flex-shrink-0">
                          {item.icon}
                        </div>
                        {item.title}
                      </span>
                      {item.sub && (
                        <span className="text-xs sm:text-sm font-normal text-muted-foreground">
                          {item.sub}
                        </span>
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2 text-muted-foreground">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default ProfileScreenComponent;
