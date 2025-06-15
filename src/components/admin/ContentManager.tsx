
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2, Search } from "lucide-react";

export const ContentManager = () => {
  const [articles] = useState([
    { id: 1, title: "How to Buy Bitcoin in Kenya", status: "Published", views: 1234, date: "2024-01-15" },
    { id: 2, title: "Crypto Security Best Practices", status: "Draft", views: 0, date: "2024-01-14" },
    { id: 3, title: "Understanding Blockchain Technology", status: "Published", views: 987, date: "2024-01-13" }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    category: "",
    tags: ""
  });

  const handleAddArticle = () => {
    console.log("Adding article:", newArticle);
    setShowAddForm(false);
    setNewArticle({ title: "", content: "", category: "", tags: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-orange-500">Content Management</h2>
        <Button onClick={() => setShowAddForm(true)} className="bg-orange-500 hover:bg-orange-600">
          <Plus className="h-4 w-4 mr-2" />
          Add Article
        </Button>
      </div>

      {showAddForm && (
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-orange-500">Add New Article</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Article Title"
              value={newArticle.title}
              onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
              className="bg-slate-900 border-slate-600 text-white"
            />
            <Input
              placeholder="Category (e.g., Beginner, Security, Trading)"
              value={newArticle.category}
              onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
              className="bg-slate-900 border-slate-600 text-white"
            />
            <Input
              placeholder="Tags (comma separated)"
              value={newArticle.tags}
              onChange={(e) => setNewArticle({ ...newArticle, tags: e.target.value })}
              className="bg-slate-900 border-slate-600 text-white"
            />
            <Textarea
              placeholder="Article Content (Markdown supported)"
              value={newArticle.content}
              onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
              className="bg-slate-900 border-slate-600 text-white min-h-[200px]"
            />
            <div className="flex gap-2">
              <Button onClick={handleAddArticle} className="bg-green-600 hover:bg-green-700">
                Publish
              </Button>
              <Button variant="outline" onClick={handleAddArticle}>
                Save as Draft
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-orange-500">Articles</CardTitle>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search articles..."
                className="bg-slate-900 border-slate-600 text-white w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Title</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Views</TableHead>
                <TableHead className="text-slate-300">Date</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id} className="border-slate-700">
                  <TableCell className="text-white">{article.title}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs ${
                      article.status === 'Published' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                    }`}>
                      {article.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-slate-300">{article.views}</TableCell>
                  <TableCell className="text-slate-300">{article.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-400 hover:text-red-300">
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
