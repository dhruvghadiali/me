import { useTranslation } from "react-i18next";

import _ from "lodash";

import { getSettingsAccordionItems } from "@MEScreenComponents/settings/accordionConfig";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@MEShadcnComponents/accordion";

import SettingHeaderComponent from "@MEScreenComponents/settings/header";

const SettingsScreenComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <SettingHeaderComponent />
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-w-4xl mx-auto">
        <Accordion type="single" collapsible>
          <div className="w-full space-y-2">
            {_.map(getSettingsAccordionItems(t), (item) => (
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

export default SettingsScreenComponent;
