# Email Setup Guide – Bake Matters

To make your "Contact Us" form send messages directly to your email, we are using a free service called **Formspree**.

Follow these steps to finish the setup:

---

## 1. Create a Formspree Account (Free)
1. Go to [https://formspree.io/](https://formspree.io/) and sign up for a free account.
2. Verify your email address.

---

## 2. Create a New Form
1. In your Formspree dashboard, click **"New Form"**.
2. Give it a name (e.g., `Bake Matters Contact`).
3. Make sure the **"Send to email"** field is set to the email address where you want to receive messages.
4. Click **Create Form**.

---

## 3. Get Your Form ID
1. Once created, you will see a unique URL for your form. It looks like this:
   `https://formspree.io/f/xjvnyqww`
2. The last part (`xjvnyqww` in the example above) is your **Form ID**.

---

## 4. Update the Code
1. Open your project folder.
2. Open the file **`index.html`**.
3. Find the `<form>` tag near the bottom of the file. It looks like this:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```
4. Replace `YOUR_FORMSPREE_ID` with your actual Form ID.
5. Save the file.

---

## 5. Test It!
1. Open your website.
2. Fill out the "Contact Us" form and click **Send Message**.
3. You should see a green "Message sent successfully!" popup at the bottom of the screen.
4. Check your email — the message should be in your inbox!

---

> [!TIP]
> **Why use Formspree?**
> Since this is a static website, it doesn't have a "brain" (server) to send emails on its own. Formspree acts as the bridge that takes your message and pushes it to your inbox securely.
