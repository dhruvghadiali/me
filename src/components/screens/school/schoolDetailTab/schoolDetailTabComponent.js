import { ScrollArea, ScrollBar } from "@MEShadcnComponents/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@MEShadcnComponents/tabs";

const SchoolDetailTabComponent = ({ tabData }) => {
  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea>
        <TabsList className="text-foreground mb-3 h-auto gap-2 rounded-none border-b bg-transparent m-5">
          {tabData &&
            tabData.length > 0 &&
            tabData.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-dark data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
        </TabsList>
        <ScrollBar orientation="horizontal" className="bg-accent" />
      </ScrollArea>
      {tabData &&
        tabData.length > 0 &&
        tabData.map((tab, index) => (
          <TabsContent
            key={index}
            value={tab.value}
            className="rounded-lg shadow-sm"
          >
            <ScrollArea className="h-[calc(100vh-355px)] my-2">
              <div className="px-5 py-3">{tab.content}</div>
              <ScrollBar orientation="vertical" className="bg-dark " />
            </ScrollArea>
          </TabsContent>
        ))}
    </Tabs>
  );
};

export default SchoolDetailTabComponent;
