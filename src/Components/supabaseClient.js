import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://lxvfacmzejmtgvritayi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4dmZhY216ZWptdGd2cml0YXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MDAxOTgsImV4cCI6MjA0Mzk3NjE5OH0.jRWJVDr0tmlSC1WnTeebDSns_yp3aby-Ba5TyY_KuIs';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
