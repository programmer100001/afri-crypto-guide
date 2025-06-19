
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only create client if environment variables are available
const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export function useSupabaseRealtime({ table, onChange }: { table: string, onChange: (payload: any) => void }) {
  useEffect(() => {
    // If Supabase is not configured, skip real-time setup
    if (!supabase) {
      console.warn("Supabase not configured - real-time updates disabled");
      return;
    }

    const channel = supabase
      .channel(`realtime:${table}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table,
        },
        (payload) => {
          onChange(payload);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, onChange]);
}

export { supabase };
