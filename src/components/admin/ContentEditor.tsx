
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus, FileText, Image, Video } from "lucide-react";
import { WYSIWYGEditor } from "./WYSIWYGEditor";

interface ContentEditorProps {
  onContentChange: () => void;
  editingItem: any;
  setEditingItem: (item: any) => void;
}

export const ContentEditor = ({ onContentChange, editingItem, setEditingItem }: ContentEditorProps) => {
  const [content] = useState([
    { id: 1, title: "How to Buy Bitcoin in Kenya", type: "Article", status: "Published", lastModified: "2024-01-15" },
    { id: 2, title: "Hero Section", type: "Component", status: "Active", lastModified: "2024-01-14" },
    { id: 3, title: "Price Tracker Widget", type: "Component", status: "Active", lastModified: "2024-01-13" },
    { id: 4, title: "Crypto Security Guide", type: "Article", status: "Draft", lastModified: "2024-01-12" }
  ]);

  const [showEditor, setShowEditor] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setShowEditor(true);
    setEditorContent(item.title); // In real app, load full content
  };

  const handleSaveContent = () => {
    console.log("Saving content:", editorContent);
    onContentChange();
    setShowEditor(false);
    setEditingItem(null);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Article": return <FileText className="h-4 w-4" />;
      case "Image": return <Image className="h-4 w-4" />;
      case "Video": return <Video className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  if (showEditor) {
    return (
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-orange-500">
              Editing: {editingItem?.title}
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowEditor(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveContent} className="bg-green-600 hover:bg-green-700">
                Save Changes
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Content Title"
              value={editorContent}
              onChange={(e) => {
                setEditorContent(e.target.value);
                onContentChange();
              }}
              className="bg-slate-900 border-slate-600 text-white"
            />
            <select className="bg-slate-900 border border-slate-600 text-white rounded px-3 py-2">
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
          
          <WYSIWYGEditor 
            content={editorContent}
            onChange={(content) => {
              setEditorContent(content);
              onContentChange();
            }}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Content Management</h3>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Plus className="h-4 w-4 mr-2" />
          New Content
        </Button>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Content</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Last Modified</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {content.map((item) => (
                <TableRow key={item.id} className="border-slate-700">
                  <TableCell className="text-white flex items-center gap-2">
                    {getTypeIcon(item.type)}
                    {item.title}
                  </TableCell>
                  <TableCell className="text-slate-300">{item.type}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={item.status === 'Published' ? 'default' : 'secondary'}
                      className={item.status === 'Published' ? 'bg-green-600' : 'bg-yellow-600'}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{item.lastModified}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEdit(item)}
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
