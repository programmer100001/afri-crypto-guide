
import { useContext } from "react";
import { SessionContext } from "@supabase/auth-helpers-react";
import { User } from "@supabase/supabase-js";

export function useSupabaseAuth() {
  const { session } = useContext(SessionContext);
  const user: User | null = session?.user || null;
  return {
    user,
    session,
    isAuthenticated: !!user,
    role: user?.user_metadata?.role || null,
  };
}
