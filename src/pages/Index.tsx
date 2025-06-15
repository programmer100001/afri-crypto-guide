
import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
// Removed: import { HowItWorks } from "@/components/HowItWorks";
import { ScamAlerts } from "@/components/ScamAlerts";
import { Footer } from "@/components/Footer";
import { useSuperEdit } from "@/components/admin/SuperEditContext";
import { SuperEditModal } from "@/components/admin/SuperEditModal";

const Index = () => {
  const {
    superEdit,
    editingSection,
    setEditingSection,
    content,
  } = useSuperEdit();

  return (
    <div>
      <section className="py-20 px-8 text-center relative bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="max-w-2xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-extrabold text-slate-900 relative cursor-pointer group"
            style={superEdit ? { outline: "2px dashed orange", outlineOffset: "6px" } : {}}
            onClick={() => superEdit && setEditingSection("hero-title")}
            title={superEdit ? "Click to edit" : undefined}
          >
            {content["hero-title"]}
            {superEdit && (
              <span className="absolute top-2 right-2 text-xs bg-orange-500 text-white rounded px-1 py-0.5 pointer-events-none">
                Editable
              </span>
            )}
          </h1>
          <p
            className="mt-4 text-lg text-slate-700 relative cursor-pointer"
            style={superEdit ? { outline: "2px dashed orange", outlineOffset: "6px" } : {}}
            onClick={() => superEdit && setEditingSection("hero-description")}
            title={superEdit ? "Click to edit" : undefined}
          >{content["hero-description"]}</p>
        </div>
        {superEdit && editingSection && (
          <SuperEditModal sectionId={editingSection} onClose={() => setEditingSection(null)} />
        )}
      </section>

      <Header />
      <Hero />
      <Features />
      {/* Removed <HowItWorks /> as it does not exist */}
      <ScamAlerts />
      <Footer />
    </div>
  );
};

export default Index;

