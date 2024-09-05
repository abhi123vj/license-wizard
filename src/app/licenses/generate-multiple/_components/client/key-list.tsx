import { Separator } from "@/components/ui/separator";
import React from "react";

const KeyList = () => {
  const tags = Array.from({ length: 1000 }).map(
    (_, i, a) => `DEV0-LM00-LKG00-13${a.length - i}`
  );
  return (
    <div className="p-4">
      {tags.map((tag, index) => [
        <div key={`tag-${index}`} className="text-sm text-center">
          {tag}
        </div>,
        <Separator key={`separator-${index}`} className="my-2" />,
      ])}
    </div>
  );
};

export default KeyList;
