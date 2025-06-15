
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus, Eye, Globe } from "lucide-react";

interface PageEditorProps {
  onPageChange: () => void;
  editingItem: any;
  setEditingItem: (item: any) => void;
}

export const PageEditor = ({ onPageChange, editingItem, setEditingItem }: PageEditorProps) => {
  const [pages] = useState([
    { id: 1, title: "Home", path: "/", status: "Live", template: "Landing", lastModified: "2024-01-15" },
    { id: 2, title: "Crypto 101", path: "/crypto-101", status: "Live", template: "Educational", lastModified: "2024-01-14" },
    { id: 3, title: "Buy Crypto Kenya", path: "/buy-crypto-kenya", status: "Live", template: "Guide", lastModified: "2024-01-13" },
    { id: 4, title: "Community Hub", path: "/community-hub", status: "Live", template: "Community", lastModified: "2024-01-12" },
    { id: 5, title: "About Us", path: "/about", status: "Draft", template: "Static", lastModified: "2024-01-11" }
  ]);

  const [showPageEditor, setShowPageEditor] = useState(false);
  const [editingPage, setEditingPage] = useState({
    title: "",
    path: "",
    metaDescription: "",
    keywords: "",
    template: ""
  });

  const handleEditPage = (page: any) => {
    setEditingPage({
      title: page.title,
      path: page.path,
      metaDescription: `Learn about ${page.title.toLowerCase()} in Kenya`,
      keywords: "crypto, bitcoin, kenya, education",
      template: page.template
    });
    setShowPageEditor(true);
    setEditingItem(page);
  };

  const handleSavePage = () => {
    console.log("Saving page:", editingPage);
    onPageChange();
    setShowPageEditor(false);
    setEditingItem(null);
  };

  if (showPageEditor) {
    return (
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-orange-500">
              Page Editor: {editingPage.title}
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowPageEditor(false)}>
                Cancel
              </Button>
              <Button onClick={handleSavePage} className="bg-green-600 hover:bg-green-700">
                Save Page
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Page Title</label>
              <Input
                value={editingPage.title}
                onChange={(e) => {
                  setEditingPage({ ...editingPage, title: e.target.value });
                  onPageChange();
                }}
                className="bg-slate-900 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">URL Path</label>
              <Input
                value={editingPage.path}
                onChange={(e) => {
                  setEditingPage({ ...editingPage, path: e.target.value });
                  onPageChange();
                }}
                className="bg-slate-900 border-slate-600 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Meta Description</label>
            <Input
              value={editingPage.metaDescription}
              onChange={(e) => {
                setEditingPage({ ...editingPage, metaDescription: e.target.value });
                onPageChange();
              }}
              placeholder="SEO description for this page"
              className="bg-slate-900 border-slate-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Keywords</label>
            <Input
              value={editingPage.keywords}
              onChange={(e) => {
                setEditingPage({ ...editingPage, keywords: e.target.value });
                onPageChange();
              }}
              placeholder="Comma-separated keywords"
              className="bg-slate-900 border-slate-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Template</label>
            <select
              value={editingPage.template}
              onChange={(e) => {
                setEditingPage({ ...editingPage, template: e.target.value });
                onPageChange();
              }}
              className="w-full bg-slate-900 border border-slate-600 text-white rounded px-3 py-2"
            >
              <option value="Landing">Landing Page</option>
              <option value="Educational">Educational</option>
              <option value="Guide">Guide</option>
              <option value="Community">Community</option>
              <option value="Static">Static Page</option>
            </select>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Page Management</h3>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Plus className="h-4 w-4 mr-2" />
          New Page
        </Button>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Page Title</TableHead>
                <TableHead className="text-slate-300">Path</TableHead>
                <TableHead className="text-slate-300">Template</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Last Modified</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page) => (
                <TableRow key={page.id} className="border-slate-700">
                  <TableCell className="text-white flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {page.title}
                  </TableCell>
                  <TableCell className="text-slate-300 font-mono">{page.path}</TableCell>
                  <TableCell className="text-slate-300">{page.template}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={page.status === 'Live' ? 'default' : 'secondary'}
                      className={page.status === 'Live' ? 'bg-green-600' : 'bg-yellow-600'}
                    >
                      {page.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{page.lastModified}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(page.path, '_blank')}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditPage(page)}
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
