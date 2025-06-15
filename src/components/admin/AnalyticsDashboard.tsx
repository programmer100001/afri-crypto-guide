
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Eye, AlertTriangle } from "lucide-react";

export const AnalyticsDashboard = () => {
  const stats = [
    { title: "Total Users", value: "2,847", change: "+12%", icon: Users, color: "text-blue-500" },
    { title: "Page Views", value: "18,924", change: "+23%", icon: Eye, color: "text-green-500" },
    { title: "Active Alerts", value: "7", change: "-2", icon: AlertTriangle, color: "text-orange-500" },
    { title: "Growth Rate", value: "34%", change: "+8%", icon: TrendingUp, color: "text-purple-500" }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-slate-400 mt-1">
                <span className="text-green-500">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-orange-500">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm text-white">New user registered</p>
                  <p className="text-xs text-slate-400">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="text-sm text-white">Scam alert reported</p>
                  <p className="text-xs text-slate-400">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm text-white">New article published</p>
                  <p className="text-xs text-slate-400">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-orange-500">Popular Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">How to Buy Bitcoin in Kenya</span>
                <span className="text-xs text-slate-400">1,234 views</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">Crypto Security Guide</span>
                <span className="text-xs text-slate-400">987 views</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">M-Pesa to Crypto Tutorial</span>
                <span className="text-xs text-slate-400">756 views</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
