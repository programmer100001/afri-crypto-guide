
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RotateCcw, GitBranch, Clock, User, Eye } from "lucide-react";

export const VersionControl = () => {
  const [versions] = useState([
    { 
      id: 1, 
      version: "v1.2.3", 
      description: "Updated crypto calculator with new features", 
      author: "Admin", 
      date: "2024-01-15 14:30", 
      status: "Current",
      changes: 12
    },
    { 
      id: 2, 
      version: "v1.2.2", 
      description: "Fixed scam alert board styling issues", 
      author: "Admin", 
      date: "2024-01-14 16:20", 
      status: "Previous",
      changes: 8
    },
    { 
      id: 3, 
      version: "v1.2.1", 
      description: "Added new educational content", 
      author: "Admin", 
      date: "2024-01-13 10:15", 
      status: "Archived",
      changes: 15
    },
    { 
      id: 4, 
      version: "v1.2.0", 
      description: "Major UI updates and responsive improvements", 
      author: "Admin", 
      date: "2024-01-12 09:45", 
      status: "Archived",
      changes: 34
    }
  ]);

  const [showChangeDetails, setShowChangeDetails] = useState<number | null>(null);

  const handleRevert = (version: any) => {
    const confirmed = window.confirm(`Are you sure you want to revert to ${version.version}? This action cannot be undone.`);
    if (confirmed) {
      console.log(`Reverting to version ${version.version}`);
      // In a real app, this would trigger a revert process
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Current': return 'bg-green-600';
      case 'Previous': return 'bg-blue-600';
      case 'Archived': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-white">Version Control</h3>
          <p className="text-slate-400">Track and manage website versions</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <GitBranch className="h-4 w-4 mr-2" />
          Create Backup
        </Button>
      </div>

      {/* Current Version Info */}
      <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">Current Version: v1.2.3</h4>
              <p className="text-slate-300">Last updated 2 hours ago</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">12</div>
                <div className="text-xs text-slate-400">Changes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">98%</div>
                <div className="text-xs text-slate-400">Uptime</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Version History */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-orange-500 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Version History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Version</TableHead>
                <TableHead className="text-slate-300">Description</TableHead>
                <TableHead className="text-slate-300">Author</TableHead>
                <TableHead className="text-slate-300">Date</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Changes</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {versions.map((version) => (
                <TableRow key={version.id} className="border-slate-700">
                  <TableCell className="text-white font-mono">{version.version}</TableCell>
                  <TableCell className="text-slate-300 max-w-xs truncate">{version.description}</TableCell>
                  <TableCell className="text-slate-300 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {version.author}
                  </TableCell>
                  <TableCell className="text-slate-300">{version.date}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(version.status)}>
                      {version.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">
                    <span className="text-sm bg-slate-700 px-2 py-1 rounded">
                      +{version.changes}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setShowChangeDetails(showChangeDetails === version.id ? null : version.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {version.status !== 'Current' && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleRevert(version)}
                          className="text-orange-400 hover:text-orange-300"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Change Details */}
      {showChangeDetails && (
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-orange-500">
              Change Details - {versions.find(v => v.id === showChangeDetails)?.version}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 p-4 rounded border border-green-700">
                  <h5 className="text-green-400 font-semibold mb-2">Added</h5>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• New crypto calculator features</li>
                    <li>• Enhanced mobile responsiveness</li>
                    <li>• Auto-save functionality</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 p-4 rounded border border-blue-700">
                  <h5 className="text-blue-400 font-semibold mb-2">Modified</h5>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Updated pricing data source</li>
                    <li>• Improved loading animations</li>
                    <li>• Enhanced error handling</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 p-4 rounded border border-red-700">
                  <h5 className="text-red-400 font-semibold mb-2">Removed</h5>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Deprecated API endpoints</li>
                    <li>• Unused CSS classes</li>
                    <li>• Legacy browser support</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
