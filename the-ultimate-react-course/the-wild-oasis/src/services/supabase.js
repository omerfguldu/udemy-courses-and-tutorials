import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lajqjymubztyyabritap.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhanFqeW11Ynp0eXlhYnJpdGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAzNTIyNTMsImV4cCI6MjAzNTkyODI1M30.lX2z886bp5TFwr1fZqFeDZ3k_9_cJqYp_WAAWUrDOZc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
