// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://lkqfeoyoultfrxkdjfti.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZ2Zlb3lvdWx0ZnJ4a2RqZnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDI1NjQsImV4cCI6MjA2NjY3ODU2NH0.pim0hjszO5mlz4OxvXtpvsIHnPugoMEsZhChQaUbMzw'; // From the API Keys section
export const supabase = createClient(supabaseUrl, supabaseKey);
