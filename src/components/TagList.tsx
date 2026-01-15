import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Tag from "./Tag";

const TagList = () => {
  const [tag, setTag] = useState<string[]>([
    "Item One",
    "Item Two",
    "Item Three",
    "Item Four",
  ]);

  const removeTag = (tagToRemove: string) => {
    setTag((prev) => prev.filter((t) => t !== tagToRemove));
  };

  return (
    <div className="flex flex-wrap gap-3">
        <AnimatePresence>
          {tag.map((tag) => (
            <Tag label={tag} onRemove={() => removeTag(tag)} />
          ))}
        </AnimatePresence>
     
    </div>
  );
};

export default TagList;
