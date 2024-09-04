"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";

const GeneratedKeys = () => {
  const tags = Array.from({ length: 1000 }).map(
    (_, i, a) => `DEV0-LM00-LKG00-13${a.length - i}`
  );
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <ScrollArea className="h-[90%] w-[50%] rounded-md border bg-white">
        <div className="p-4">
          {tags.map((tag, index) => [
            <div key={`tag-${index}`} className="text-sm">
              {tag}
            </div>,
            <Separator key={`separator-${index}`} className="my-2" />,
          ])}
        </div>
      </ScrollArea>
    </div>
  );
};

export default GeneratedKeys;
