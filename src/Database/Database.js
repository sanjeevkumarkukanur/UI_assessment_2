import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qfygufmtptsfzwvfhpgo.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTY3OTU3MCwiZXhwIjoxOTQxMjU1NTcwfQ.MPsCLfsZFPLZJ5Cmp7TrjPmwKvSUoWIRpdOZmRVeXKQ'
export const supabase = createClient(supabaseUrl, supabaseKey)