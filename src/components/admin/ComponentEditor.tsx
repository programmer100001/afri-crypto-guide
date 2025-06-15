
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus, Settings, Eye } from "lucide-react";

interface ComponentEditorProps {
  onComponentChange: () => void;
  editingItem: any;
  setEditingItem: (item: any) => void;
}

export const ComponentEditor = ({ onComponentChange, editingItem, setEditingItem }: ComponentEditorProps) => {
  const [components] = useState([
    { id: 1, name: "Header Navigation", type: "Navigation", status: "Active", usedOn: "All Pages", lastModified: "2024-01-15" },
    { id: 2, name: "Price Tracker", type: "Widget", status: "Active", usedOn: "Home, Tools", lastModified: "2024-01-14" },
    { id: 3, name: "Crypto Calculator", type: "Tool", status: "Active", usedOn: "Tools", lastModified: "2024-01-13" },
    { id: 4, name: "Scam Alert Board", type: "Widget", status: "Active", usedOn: "Home", lastModified: "2024-01-12" },
    { id: 5, name: "Footer", type: "Navigation", status: "Active", usedOn: "All Pages", lastModified: "2024-01-11" }
  ]);

  const [showComponentEditor, setShowComponentEditor] = useState(false);
  const [editingComponent, setEditingComponent] = useState({
    name: "",
    type: "",
    settings: {},
    styles: {}
  });

  const handleEditComponent = (component: any) => {
    setEditingComponent({
      name: component.name,
      type: component.type,
      settings: {
        autoRefresh: true,
        refreshInterval: 30,
        showAnimation: true
      },
      styles: {
        backgroundColor: "#1e293b",
        textColor: "#ffffff",
        borderRadius: "8px"
      }
    });
    setShowComponentEditor(true);
    setEditingItem(component);
  };

  const handleSaveComponent = () => {
    console.log("Saving component:", editingComponent);
    onComponentChange();
    setShowComponentEditor(false);
    setEditingItem(null);
  };

  if (showComponentEditor) {
    return (
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-orange-500">
              Component Editor: {editingComponent.name}
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowComponentEditor(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveComponent} className="bg-green-600 hover:bg-green-700">
                Save Component
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Component Name</label>
              <Input
                value={editingComponent.name}
                onChange={(e) => {
                  setEditingComponent({ ...editingComponent, name: e.target.value });
                  onComponentChange();
                }}
                className="bg-slate-900 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Type</label>
              <select
                value={editingComponent.type}
                onChange={(e) => {
                  setEditingComponent({ ...editingComponent, type: e.target.value });
                  onComponentChange();
                }}
                className="w-full bg-slate-900 border border-slate-600 text-white rounded px-3 py-2"
              >
                <option value="Navigation">Navigation</option>
                <option value="Widget">Widget</option>
                <option value="Tool">Tool</option>
                <option value="Content">Content</option>
                <option value="Form">Form</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Component Settings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between">
                <label className="text-sm text-slate-300">Auto Refresh</label>
                <input
                  type="checkbox"
                  checked={editingComponent.settings.autoRefresh}
                  onChange={(e) => {
                    setEditingComponent({
                      ...editingComponent,
                      settings: { ...editingComponent.settings, autoRefresh: e.target.checked }
                    });
                    onComponentChange();
                  }}
                  className="rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Refresh Interval (seconds)</label>
                <Input
                  type="number"
                  value={editingComponent.settings.refreshInterval}
                  onChange={(e) => {
                    setEditingComponent({
                      ...editingComponent,
                      settings: { ...editingComponent.settings, refreshInterval: parseInt(e.target.value) }
                    });
                    onComponentChange();
                  }}
                  className="bg-slate-900 border-slate-600 text-white"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Styling</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Background Color</label>
                <Input
                  type="color"
                  value={editingComponent.styles.backgroundColor}
                  onChange={(e) => {
                    setEditingComponent({
                      ...editingComponent,
                      styles: { ...editingComponent.styles, backgroundColor: e.target.value }
                    });
                    onComponentChange();
                  }}
                  className="bg-slate-900 border-slate-600 h-10"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Text Color</label>
                <Input
                  type="color"
                  value={editingComponent.styles.textColor}
                  onChange={(e) => {
                    setEditingComponent({
                      ...editingComponent,
                      styles: { ...editingComponent.styles, textColor: e.target.value }
                    });
                    onComponentChange();
                  }}
                  className="bg-slate-900 border-slate-600 h-10"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Border Radius (px)</label>
                <Input
                  value={editingComponent.styles.borderRadius}
                  onChange={(e) => {
                    setEditingComponent({
                      ...editingComponent,
                      styles: { ...editingComponent.styles, borderRadius: e.target.value }
                    });
                    onComponentChange();
                  }}
                  className="bg-slate-900 border-slate-600 text-white"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Component Management</h3>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Plus className="h-4 w-4 mr-2" />
          New Component
        </Button>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Component Name</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Used On</TableHead>
                <TableHead className="text-slate-300">Last Modified</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {components.map((component) => (
                <TableRow key={component.id} className="border-slate-700">
                  <TableCell className="text-white flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    {component.name}
                  </TableCell>
                  <TableCell className="text-slate-300">{component.type}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="default"
                      className="bg-green-600"
                    >
                      {component.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{component.usedOn}</TableCell>
                  <TableCell className="text-slate-300">{component.lastModified}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditComponent(component)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-400">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
