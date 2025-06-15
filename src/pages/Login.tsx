
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const supabase = useSupabaseClient();
  const { session } = useSessionContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // If already logged in, redirect to /admin
  if (session) {
    navigate("/admin", { replace: true });
    return null;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Card className="w-[370px] bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-orange-500">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleLogin}>
            <Input
              type="email"
              required
              placeholder="Email"
              value={email}
              className="bg-slate-900 border-slate-600 text-white"
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type="password"
              required
              placeholder="Password"
              value={password}
              className="bg-slate-900 border-slate-600 text-white"
              onChange={e => setPassword(e.target.value)}
            />
            {errorMsg && (
              <div className="text-red-500 text-sm">{errorMsg}</div>
            )}
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
