# Paystack Integration Guide

Now that the front-end checkout logic is perfectly hooked up to the "Buy Now" buttons in your store, it is ready to accept real payments!

To implement your own details into the checkout system so that money goes into your actual bank account, follow these simple steps:

## 1. Get your Public Key
1. Go to your [Paystack Dashboard](https://dashboard.paystack.com/).
2. On the left sidebar, click on **Settings** (usually near the bottom).
3. Click on the **API Keys & Webhooks** tab.
4. You will see two types of keys: **Test** and **Live**. 
    - *Test Keys* are for making fake payments to ensure it works.
    - *Live Keys* are for taking real money.
5. Copy your **Public Key** (starts with `pk_test_...` or `pk_live_...`).

## 2. Implement your Key into the Code
1. Open up the `store.js` file in your code editor.
2. Scroll to the very bottom, and look around **Line 150** for the `payWithPaystack` function.
3. You will see a green line of code that looks like this:
```javascript
key: 'pk_test_YOUR_PAYSTACK_PUBLIC_KEY', // <--- PLACEHOLDER KEY
```
4. Replace `'pk_test_YOUR_PAYSTACK_PUBLIC_KEY'` with the actual key you copied from the dashboard. Make sure you keep the single quotes around your key!

## 3. Verify Currency
By default, I set the checkout to process payments in Naira (`NGN`). The prices you wrote into `store.js` have dollar signs `$` but the number value itself will be passed. 

If you meant for these to be charged in USD, find this line directly under your key:
```javascript
currency: 'NGN', 
```
and change it to:
```javascript
currency: 'USD',
```

Once you do that, the checkout handles everything else automatically! When a customer clicks "Buy Now", it will ask for their email (or they can securely sign in through Paystack) and safely process the charge via card or bank transfer, sending the money directly to you!
