// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://lkqfeoyoultfrxkdjfti.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6...'; // Full anon key from API settings
export const supabase = createClient(supabaseUrl, supabaseKey);
