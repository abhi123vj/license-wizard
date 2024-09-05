import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDownToLine, Clipboard } from "lucide-react";

import React from "react";
import KeyList from "./client/key-list";
import KeyInfo from "./client/key-info";

const GeneratedKeys = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 ">
      <div className="h-[40%] w-[90%] md:w-[80%] xl:h-[40%] p-4  rounded-md bg-slate-300 shadow-md ">
        <div className="w-full h-full flex flex-row gap-4 ">
          <ScrollArea className=" h-full w-full rounded-md border bg-white p-4">
            <KeyList />
          </ScrollArea>
          <div className="flex flex-col justify-start items-center gap-4">
            <Button variant="outline" size="icon">
              <Clipboard className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ArrowDownToLine className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[40%] w-[90%] md:w-[80%] xl:h-[40%]  flex justify-center items-center bg-slate-300 rounded-md shadow-md ">
          <KeyInfo className="w-full h-full p-4 " />
      </div>
    </div>
  );
};

export default GeneratedKeys;
