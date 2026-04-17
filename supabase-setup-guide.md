# Supabase Setup Guide – Bake Matters

Follow these steps **once** to connect your store to Supabase so that orders are saved to a real database.

---

## Step 1 – Create a Free Supabase Account

1. Go to **https://supabase.com** and click **Start for Free**
2. Sign up with your email (or GitHub)
3. Click **New Project**
   - Give it a name e.g. `bake-matters`
   - Choose a strong database password (save it somewhere safe — you won't need it for this setup)
   - Choose the region closest to you (`West EU` or `US East` are fine)
4. Wait ~1 minute for the project to be created

---

## Step 2 – Create the Orders Table

1. In your Supabase project, click **Table Editor** in the left sidebar
2. Click **New Table**
3. Set the table name to exactly: `orders`
4. Turn **off** Row Level Security (RLS) for now (you can enable it later)
5. Add the following columns (the `id` column is created automatically):

| Column Name | Type      | Default Value | Notes                  |
|-------------|-----------|---------------|------------------------|
| `ref_id`    | `text`    | —             | Paystack reference ID  |
| `date`      | `text`    | —             | ISO date string        |
| `item`      | `text`    | —             | Product name           |
| `email`     | `text`    | —             | Customer email         |
| `phone`     | `text`    | —             | Customer phone         |
| `delivery`  | `text`    | —             | `delivery` or `pickup` |
| `address`   | `text`    | —             | Delivery address       |
| `lga`       | `text`    | —             | Local govt area        |
| `area`      | `text`    | —             | Specific area          |
| `amount`    | `numeric` | —             | Order total in Naira   |
| `status`    | `text`    | `paid`        | Payment status         |

6. Click **Save** to create the table

---

## Step 3 – Get Your API Credentials

1. In your Supabase project, click **Project Settings** (gear icon, bottom-left)
2. Click **API** in the settings menu
3. You will see two important values:

   - **Project URL** — looks like: `https://abcdefghijkl.supabase.co`
   - **anon / public key** — a very long string starting with `eyJ...`

---

## Step 4 – Fill In Your Details

Open the file **`supabase-config.js`** in your project folder.

Replace the two placeholder values:

```js
// BEFORE (placeholders):
const SUPABASE_URL      = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// AFTER (your real values):
const SUPABASE_URL      = 'https://abcdefghijkl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

Save the file. That's it — both `store.html` and `admin.html` use this same file.

---

## Step 5 – Test It

1. Open your store (`store.html`) in a browser
2. Add an item to checkout, fill in your email and delivery details, and complete a **test payment** via Paystack
3. After the green "Payment Successful" screen appears, open your Supabase project → **Table Editor** → click the `orders` table
4. You should see the order row appear immediately ✅
5. Open `admin.html` and log in — the order will show in the dashboard

---

## Changing the Admin Password

Open `admin.html` and find this line near the bottom of the `<script>` section:

```js
const ADMIN_PASSWORD = 'bakematters2024';
```

Change `bakematters2024` to whatever password you want, then save the file.

---

## Summary of Files Modified

| File                  | What it does                                           |
|-----------------------|--------------------------------------------------------|
| `supabase-config.js`  | Holds your URL + key, shared by store and admin        |
| `store.js`            | Saves each order to Supabase after successful payment  |
| `admin.html`          | Reads + displays all orders from Supabase              |

---

> **Note:** The `anon` key is safe to put in your frontend code — it only has the permissions you set in Supabase. Since RLS is off, anyone who finds the key *could* read your orders table. To secure it fully later, enable RLS and add a policy that only allows `INSERT` from anonymous users (no `SELECT`). The admin dashboard reads data, so you would access it through the Supabase Studio instead. For a small bakery, this is likely fine as-is.
