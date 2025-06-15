import { useState, useEffect } from "react";
import { supabase, useSupabaseRealtime } from "@/hooks/useSupabaseRealtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, AlertTriangle, Eye, Trash2 } from "lucide-react";

export const ScamManager = () => {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAlert, setNewAlert] = useState({
    title: "",
    description: "",
    type: "",
    severity: "",
    evidence: ""
  });

  useEffect(() => {
    setLoading(true);
    supabase
      .from("scam_alerts")
      .select("*")
      .order("date", { ascending: false })
      .then(({ data }) => {
        setAlerts(data || []);
        setLoading(false);
      });
  }, []);

  useSupabaseRealtime({
    table: "scam_alerts",
    onChange: (payload) => {
      if (payload.eventType === "INSERT") {
        setAlerts((prev) => [payload.new, ...prev]);
      } else if (payload.eventType === "DELETE") {
        setAlerts((prev) => prev.filter((a) => a.id !== payload.old.id));
      } else if (payload.eventType === "UPDATE") {
        setAlerts((prev) =>
          prev.map((a) => (a.id === payload.new.id ? payload.new : a))
        );
      }
    }
  });

  const handleAddAlert = async () => {
    await supabase.from("scam_alerts").insert([
      {
        ...newAlert,
        status: "Active",
        date: new Date().toISOString().split("T")[0]
      }
    ]);
    setShowAddForm(false);
    setNewAlert({ title: "", description: "", type: "", severity: "", evidence: "" });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-600 text-white';
      case 'High': return 'bg-orange-600 text-white';
      case 'Medium': return 'bg-yellow-600 text-white';
      default: return 'bg-blue-600 text-white';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-orange-500">Scam Alert Management</h2>
        <Button onClick={() => setShowAddForm(true)} className="bg-red-600 hover:bg-red-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Scam Alert
        </Button>
      </div>

      {showAddForm && (
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-red-500">Add New Scam Alert</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Alert Title"
              value={newAlert.title}
              onChange={(e) => setNewAlert({ ...newAlert, title: e.target.value })}
              className="bg-slate-900 border-slate-600 text-white"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={newAlert.type}
                onChange={(e) => setNewAlert({ ...newAlert, type: e.target.value })}
                className="bg-slate-900 border border-slate-600 text-white rounded px-3 py-2"
              >
                <option value="">Select Type</option>
                <option value="Investment Scam">Investment Scam</option>
                <option value="Phishing">Phishing</option>
                <option value="Fake Platform">Fake Platform</option>
                <option value="Ponzi Scheme">Ponzi Scheme</option>
                <option value="Other">Other</option>
              </select>
              <select
                value={newAlert.severity}
                onChange={(e) => setNewAlert({ ...newAlert, severity: e.target.value })}
                className="bg-slate-900 border border-slate-600 text-white rounded px-3 py-2"
              >
                <option value="">Select Severity</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <Textarea
              placeholder="Detailed Description"
              value={newAlert.description}
              onChange={(e) => setNewAlert({ ...newAlert, description: e.target.value })}
              className="bg-slate-900 border-slate-600 text-white"
            />
            <Textarea
              placeholder="Evidence (URLs, phone numbers, screenshots description)"
              value={newAlert.evidence}
              onChange={(e) => setNewAlert({ ...newAlert, evidence: e.target.value })}
              className="bg-slate-900 border-slate-600 text-white"
            />
            <div className="flex gap-2">
              <Button onClick={handleAddAlert} className="bg-red-600 hover:bg-red-700">
                Publish Alert
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-500">12</div>
            <p className="text-slate-400">Active Alerts</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-orange-500">8</div>
            <p className="text-slate-400">High Priority</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-500">45</div>
            <p className="text-slate-400">Resolved</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-500">1,234</div>
            <p className="text-slate-400">Total Reports</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-orange-500 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Scam Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Title</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Severity</TableHead>
                <TableHead className="text-slate-300">Date</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map((alert) => (
                <TableRow key={alert.id} className="border-slate-700">
                  <TableCell className="text-white">{alert.title}</TableCell>
                  <TableCell className="text-slate-300">{alert.type}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                  </TableCell>
                  <TableCell className="text-slate-300">{alert.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs ${
                      alert.status === 'Active' ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'
                    }`}>
                      {alert.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
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
