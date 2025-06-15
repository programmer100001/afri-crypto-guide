
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Mail, Ban, UserCheck } from "lucide-react";

export const UserManager = () => {
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", joined: "2024-01-15", role: "User" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active", joined: "2024-01-14", role: "Moderator" },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", status: "Suspended", joined: "2024-01-13", role: "User" }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-orange-500">User Management</h2>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Mail className="h-4 w-4 mr-2" />
            Send Newsletter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">2,847</div>
            <p className="text-slate-400">Total Users</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-500">2,721</div>
            <p className="text-slate-400">Active Users</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-500">126</div>
            <p className="text-slate-400">Suspended Users</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-orange-500">Users</CardTitle>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search users..."
                className="bg-slate-900 border-slate-600 text-white w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Name</TableHead>
                <TableHead className="text-slate-300">Email</TableHead>
                <TableHead className="text-slate-300">Role</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Joined</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="border-slate-700">
                  <TableCell className="text-white">{user.name}</TableCell>
                  <TableCell className="text-slate-300">{user.email}</TableCell>
                  <TableCell className="text-slate-300">{user.role}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs ${
                      user.status === 'Active' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-slate-300">{user.joined}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <UserCheck className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-400 hover:text-red-300">
                        <Ban className="h-4 w-4" />
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
