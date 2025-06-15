
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SuperEditContextProps {
  superEdit: boolean;
  setSuperEdit: (value: boolean) => void;
  setEditingSection: (sectionId: string | null) => void;
  editingSection: string | null;
  content: Record<string, string>;
  setContent: (content: Record<string, string>) => void;
}

const SuperEditContext = createContext<SuperEditContextProps | undefined>(undefined);

export const SuperEditProvider = ({ children }: { children: ReactNode }) => {
  const [superEdit, setSuperEdit] = useState(false);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [content, setContent] = useState<Record<string, string>>({
    "hero-title": "Welcome to CryptoKenya",
    "hero-description": "Master crypto in Kenya: Guides, community, reviews. Learn, earn, & stay safe.",
  });

  return (
    <SuperEditContext.Provider
      value={{
        superEdit,
        setSuperEdit,
        editingSection,
        setEditingSection,
        content,
        setContent,
      }}
    >
      {children}
    </SuperEditContext.Provider>
  );
};

export const useSuperEdit = () => {
  const ctx = useContext(SuperEditContext);
  if (!ctx) throw new Error("useSuperEdit must be used within SuperEditProvider");
  return ctx;
};
