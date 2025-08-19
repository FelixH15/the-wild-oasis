import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vwnjvamofhagsnrnjpbr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bmp2YW1vZmhhZ3Nucm5qcGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NTk0OTcsImV4cCI6MjA3MDMzNTQ5N30.9UKmY2JWbYmY-zMbd5ibvdeVtDI3MmOLaCZLaOaGgZA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
