import { Separator } from "@/components/ui/separator";
import React from "react";

interface KeyListProps {
  items: Array<string>;
  className?: string;
}
const KeyList: React.FC<KeyListProps> = ({ items, className }) => {
  return (
    <div className={`p-4 ${className || ""}`}>
      {items.map((item, index) => [
        <div key={`tag-${index}`} className="text-sm text-center">
          {item}
        </div>,
        <Separator key={`separator-${index}`} className="my-2" />,
      ])}
    </div>
  );
};

export default KeyList;
