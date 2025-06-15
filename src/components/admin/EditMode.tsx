import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit, Save, Eye, Clock, RotateCcw, Plus } from "lucide-react";
import { ContentEditor } from "./ContentEditor";
import { PageEditor } from "./PageEditor";
import { ComponentEditor } from "./ComponentEditor";
import { VersionControl } from "./VersionControl";
import { useSuperEdit } from "./SuperEditContext";
import { WandSparkles } from "lucide-react";

export const EditMode = () => {
  const [activeTab, setActiveTab] = useState("content");
  const [editingItem, setEditingItem] = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const { superEdit, setSuperEdit } = useSuperEdit();

  // Auto-save functionality
  useEffect(() => {
    if (isDirty && autoSaveEnabled) {
      const timer = setTimeout(() => {
        handleAutoSave();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isDirty, autoSaveEnabled]);

  const handleAutoSave = () => {
    console.log("Auto-saving changes...");
    setIsDirty(false);
  };

  const handleSave = () => {
    console.log("Saving changes manually...");
    setIsDirty(false);
  };

  const handlePreview = () => {
    console.log("Opening preview...");
    window.open("/", "_blank");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-orange-500 flex items-center gap-2">
            <Edit className="h-6 w-6" />
            Edit Mode
          </h2>
          <p className="text-slate-400 mt-1">Manage and edit your website content</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={superEdit ? "default" : "outline"}
            onClick={() => setSuperEdit(!superEdit)}
            className={superEdit ? "bg-orange-500 text-white" : ""}
            title="Super Edit: Edit live site sections"
          >
            <WandSparkles className="h-4 w-4 mr-2" />
            {superEdit ? "Super Edit: ON" : "Super Edit"}
          </Button>
          {isDirty && (
            <Badge variant="outline" className="text-yellow-500 border-yellow-500">
              <Clock className="h-3 w-3 mr-1" />
              Unsaved changes
            </Badge>
          )}
          <Button 
            variant="outline" 
            onClick={() => setAutoSaveEnabled(!autoSaveEnabled)}
            className={autoSaveEnabled ? "text-green-500" : "text-slate-400"}
          >
            Auto-save {autoSaveEnabled ? "ON" : "OFF"}
          </Button>
          <Button onClick={handlePreview} variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
            <Save className="h-4 w-4 mr-2" />
            Save All
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="versions">Versions</TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <ContentEditor 
            onContentChange={() => setIsDirty(true)}
            editingItem={editingItem}
            setEditingItem={setEditingItem}
          />
        </TabsContent>

        <TabsContent value="pages">
          <PageEditor 
            onPageChange={() => setIsDirty(true)}
            editingItem={editingItem}
            setEditingItem={setEditingItem}
          />
        </TabsContent>

        <TabsContent value="components">
          <ComponentEditor 
            onComponentChange={() => setIsDirty(true)}
            editingItem={editingItem}
            setEditingItem={setEditingItem}
          />
        </TabsContent>

        <TabsContent value="versions">
          <VersionControl />
        </TabsContent>
      </Tabs>
    </div>
  );
};
