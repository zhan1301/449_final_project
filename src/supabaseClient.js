import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ipyrmwnqbigslfeaykyi.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlweXJtd25xYmlnc2xmZWF5a3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5MjU3NjcsImV4cCI6MTk5ODUwMTc2N30.26xHEad3ZV7UdUcwwNWEXD5m7cAN6AxWEnKVL_ftcg8";

export const supabase = createClient(supabaseUrl, supabaseKey)