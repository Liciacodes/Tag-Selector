import { motion } from "motion/react";

interface TagProps {
  label: string;
  onRemove: () => void;
}

const Tag = ({ label, onRemove }: TagProps) => {
  return (
    <motion.div
      onClick={onRemove}
    layout
      initial={{ opacity: 0, scale: 0.8, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm hover:bg-gray-50 cursor-pointer"
    >
      <span>{label}</span>

      <button
      
        className="flex h-5 w-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800"
      >
        x
      </button>
    </motion.div>
  );
};

export default Tag;
