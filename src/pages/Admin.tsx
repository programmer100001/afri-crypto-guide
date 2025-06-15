
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Users, FileText, AlertTriangle, BarChart3, Settings, Shield, Edit } from "lucide-react";
import { ContentManager } from "@/components/admin/ContentManager";
import { UserManager } from "@/components/admin/UserManager";
import { ScamManager } from "@/components/admin/ScamManager";
import { AnalyticsDashboard } from "@/components/admin/AnalyticsDashboard";
import { SiteSettings } from "@/components/admin/SiteSettings";
import { EditMode } from "@/components/admin/EditMode";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-orange-500">Crypto Hub Admin</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">Welcome, Admin</span>
              <Button variant="outline" size="sm">Logout</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-7 bg-slate-800">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="edit" className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Edit Mode
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="scams" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Scam Alerts
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="edit">
            <EditMode />
          </TabsContent>

          <TabsContent value="content">
            <ContentManager />
          </TabsContent>

          <TabsContent value="users">
            <UserManager />
          </TabsContent>

          <TabsContent value="scams">
            <ScamManager />
          </TabsContent>

          <TabsContent value="security">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-500">Security Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Security features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <SiteSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
