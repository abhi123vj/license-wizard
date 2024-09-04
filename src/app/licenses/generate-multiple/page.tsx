import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import LicenseFormData from "./_components/form";
import { Separator } from "@/components/ui/separator";
import GeneratedKeys from "./_components/generatedKeys";

function Page() {

  return (
    <>
      <div className="w-full h-full flex justify-center rounded-md items-center">
        <div className="h-[80%] w-[80%] xl:w-[70%] 2xl:w-[60%] shadow-2xl rounded-xl bg-slate-100 overflow-clip">
          <div className="flex h-full justify-center items-center">
            <div className=" h-full flex-1 flex justify-center items-center bg-transparent">
              <Card className="p-3 w-[70%]">
                <CardHeader>
                  <CardTitle>License Key Generator</CardTitle>
                </CardHeader>
                <CardContent>
                  <LicenseFormData />
                </CardContent>
              </Card>
            </div>
            <Separator orientation="vertical" className="flex-none h-[70%]" />
            <div className=" h-full flex-1 flex justify-center items-center ">
            <GeneratedKeys/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
