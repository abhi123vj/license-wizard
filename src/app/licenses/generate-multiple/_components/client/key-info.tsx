import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

interface KeyInfoProps {
  className?: string;
}
const KeyInfo: React.FC<KeyInfoProps> = ({ className }) => {
  return (
    <div className={className}>
      <Table className="bg-slate-100 rounded shadow-lg  ">
        <TableCaption>The list of keys generated on 20-02-200.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Key</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{"Product Id"}</TableCell>
            <TableCell className="font-medium">{"lm_lkg_13"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{"Passphrase"}</TableCell>
            <TableCell className="font-medium">{"sdfsdfsdfsdfds"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{"Total keys"}</TableCell>
            <TableCell className="font-medium">{"1000"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default KeyInfo;
