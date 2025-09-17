import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zmqmbqsoiogicwhubrui.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcW1icXNvaW9naWN3aHVicnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNjEzNzYsImV4cCI6MjA3MzYzNzM3Nn0.aH-UPnSrbCRDWrnaOeKF_AzHUIxOWjrjtbNNZn7Bosg"
);
