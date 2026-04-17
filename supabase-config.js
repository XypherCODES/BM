// ============================================================
//  SUPABASE CONFIG – Fill in your details here (see guide)
//  Used by: store.html (saving orders) + admin.html (reading orders)
// ============================================================

const SUPABASE_URL = 'https://spzjrfxcjozqzggajgqe.supabase.co';       // e.g. https://abcdefgh.supabase.co
const SUPABASE_ANON_KEY = 'sb_publishable_5mM7mJ57ELk336RSmP6r_Q_GMIRgauh';  // long string starting with eyJ...

// Creates the shared Supabase client used across the site
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
