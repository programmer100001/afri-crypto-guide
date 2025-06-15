
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Save, Globe, Mail, Bell } from "lucide-react";

export const SiteSettings = () => {
  const [settings, setSettings] = useState({
    siteName: "Crypto Education Hub Kenya",
    siteDescription: "Your trusted source for cryptocurrency education in Kenya",
    contactEmail: "admin@cryptohub.ke",
    telegramGroup: "@CryptoKenyaHub",
    whatsappGroup: "+254700000000",
    enableNewsletter: true,
    enablePushNotifications: true,
    maintenanceMode: false,
    allowUserRegistration: true
  });

  const handleSave = () => {
    console.log("Saving settings:", settings);
    // Here you would save to your backend
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-500">Site Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-orange-500 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Site Name</label>
              <Input
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="bg-slate-900 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Site Description</label>
              <Textarea
                value={settings.siteDescription}
                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                className="bg-slate-900 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Contact Email</label>
              <Input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                className="bg-slate-900 border-slate-600 text-white"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-orange-500 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Social & Communication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Telegram Group</label>
              <Input
                value={settings.telegramGroup}
                onChange={(e) => setSettings({ ...settings, telegramGroup: e.target.value })}
                className="bg-slate-900 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">WhatsApp Group</label>
              <Input
                value={settings.whatsappGroup}
                onChange={(e) => setSettings({ ...settings, whatsappGroup: e.target.value })}
                className="bg-slate-900 border-slate-600 text-white"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-orange-500 flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Feature Toggles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Newsletter Signup</h3>
              <p className="text-slate-400 text-sm">Allow users to subscribe to newsletter</p>
            </div>
            <Switch
              checked={settings.enableNewsletter}
              onCheckedChange={(checked) => setSettings({ ...settings, enableNewsletter: checked })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Push Notifications</h3>
              <p className="text-slate-400 text-sm">Send notifications for new alerts</p>
            </div>
            <Switch
              checked={settings.enablePushNotifications}
              onCheckedChange={(checked) => setSettings({ ...settings, enablePushNotifications: checked })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">User Registration</h3>
              <p className="text-slate-400 text-sm">Allow new user registrations</p>
            </div>
            <Switch
              checked={settings.allowUserRegistration}
              onCheckedChange={(checked) => setSettings({ ...settings, allowUserRegistration: checked })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Maintenance Mode</h3>
              <p className="text-slate-400 text-sm">Enable maintenance mode</p>
            </div>
            <Switch
              checked={settings.maintenanceMode}
              onCheckedChange={(checked) => setSettings({ ...settings, maintenanceMode: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
};
