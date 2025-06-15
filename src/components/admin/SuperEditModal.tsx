
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSuperEdit } from "./SuperEditContext";

interface Props {
  sectionId: string;
  onClose: () => void;
}

export const SuperEditModal = ({ sectionId, onClose }: Props) => {
  const { content, setContent } = useSuperEdit();
  const [value, setValue] = useState(content[sectionId] || "");

  const handleSave = () => {
    setContent({ ...content, [sectionId]: value });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000]">
      <div className="bg-white text-black rounded p-6 shadow-xl w-[90vw] max-w-md">
        <h2 className="font-bold mb-2">Edit Section</h2>
        <textarea
          className="w-full border border-gray-300 rounded p-2 min-h-[100px]"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="flex gap-2 justify-end mt-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">Save</Button>
        </div>
      </div>
    </div>
  );
};
