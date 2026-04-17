const SUPABASE_URL = 'https://spzjrfxcjozqzggajgqe.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_5mM7mJ57ELk336RSmP6r_Q_GMIRgauh';

// Check if the Supabase library is available on the window object
if (!window.supabase) {
    console.error("Supabase library not found! Make sure the CDN link is above this script in your HTML.");
}

// Create the client and attach it to window so other scripts can use it
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


console.log("Supabase Client initialized successfully.");

console.log("Supabase Client initialized successfully.");

