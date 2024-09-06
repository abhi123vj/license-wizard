"use client";
import React, { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import GeneratedKeys from "../_components/generated-keys";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";




const HistoryPage = () => {
  const [licenseHistory, setLicenseHistory] = React.useState<LicenseHistoryItem[]>([]);

  const fetchLicenseHistory = async () => {
    const response = await fetch("/api/licenses/history");

    if (!response.ok) {
      const error = new Error("Network response was not ok");
      console.error(error);
      throw error;
    }

    const data = await response.json() as ApiResponse;
    setLicenseHistory(data.data.objectValue);
    console.log(data.data.objectValue);
  };

  useEffect(() => {
    fetchLicenseHistory();
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-[80%] w-[80%] xl:w-[70%] 2xl:w-[60%] shadow-2xl rounded-xl bg-slate-100 overflow-hidden">
        <div className="flex h-full p-5 justify-center items-center">
          <ScrollArea className="h-full w-full rounded-md border overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Keys</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {licenseHistory.map((item, index) => (
                  <TableRow
                    key={`row-${index}`}
                    className="cursor-pointer hover:bg-slate-100 hover:shadow-md hover:font-extrabold"
                  >
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.prefix}</TableCell>
                    <TableCell>{item.productId}</TableCell>
                    <TableCell className="text-right">{item.keyCount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter className="sticky bottom-0 bg-slate-100 z-10">
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">
                    {licenseHistory.reduce((total, item) => total + item.keyCount, 0)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

interface ApiResponse {
  success: boolean;
  data: {
    objectKey: string;
    objectValue: LicenseHistoryItem[];
  };
}

interface LicenseHistoryItem {
  date: string;
  keyCount: number;
  productId: string;
  prefix: string;
  secretKey: string;
}

export default HistoryPage;
