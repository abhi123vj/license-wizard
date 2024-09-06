"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDownToLine, Clipboard } from "lucide-react";
import React from "react";
import KeyList from "./key-list";
import KeyInfo from "./key-info";

const GeneratedKeys = () => {
  const tags = Array.from({ length: 1000 }).map(
    (_, i, a) => `DEV0-LM00-LKG00-13${a.length - i}`
  );
  const getPosts = async () => {
    try {
      const response = await fetch("/api/licenses/tets-is/download");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Convert the response to a Blob
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "file.xlsx"; // Set default file name if needed

      // Append the link to the body and trigger a click to start the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 ">
      <div className="h-[40%] w-[90%] md:w-[80%] xl:h-[40%] p-4  rounded-md bg-slate-300 shadow-md ">
        <div className="w-full h-full flex flex-row gap-4 ">
          <ScrollArea className=" h-full w-full rounded-md border bg-white p-4">
            <KeyList items={tags} />
          </ScrollArea>
          <div className="flex flex-col justify-start items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                navigator.clipboard.writeText(
                  tags.map((item) => item).join("\n")
                );
              }}
            >
              <Clipboard className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={getPosts}>
              <ArrowDownToLine className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[40%] w-[90%] md:w-[80%] xl:h-[40%]  flex justify-center items-center bg-slate-300 rounded-md shadow-md ">
        {/* <KeyInfo className="w-full h-full p-4 " /> */}
      </div>
    </div>
  );
};

export default GeneratedKeys;
