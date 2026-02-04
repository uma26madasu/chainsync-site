# EmailJS Setup Guide for ChainSync Chatbot

The chatbot now sends **real emails** to users who request transcripts or demo information. This requires setting up EmailJS (free tier available).

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free tier: 200 emails/month)
3. Verify your email address

### Step 2: Create Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook**
   - **Yahoo**
   - Or use **Custom SMTP**
4. Follow the connection wizard
5. **Copy your Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: {{subject}}

Hi {{to_name}},

{{message}}

---

Timestamp: {{timestamp}}
Type: {{type}}

Best regards,
ChainSync Team
```

4. **Copy your Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (looks like `xyzABC123...`)
3. Copy it

### Step 5: Add Credentials to Chatbot

Open `assets/js/script.js` and find this section (around line 1700):

```javascript
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',     // ← Replace this
  serviceID: 'YOUR_SERVICE_ID',     // ← Replace this
  templateID: 'YOUR_TEMPLATE_ID'    // ← Replace this
};
```

Replace with your actual values:

```javascript
const EMAILJS_CONFIG = {
  publicKey: 'xyzABC123...',        // Your Public Key
  serviceID: 'service_xxxxxxx',     // Your Service ID
  templateID: 'template_xxxxxxx'    // Your Template ID
};
```

### Step 6: Test It!

1. Open your website
2. Open the chatbot
3. Use the export feature → "Email Transcript"
4. Enter your email
5. Check your inbox!

## 📧 What Gets Sent

### When users request transcript export:
- **Subject:** "Your ChainSync Conversation + Early Access Info"
- **Content:**
  - Full conversation transcript
  - Info about ChainSync
  - Call to action to reply for demo

### When users enter email for demo:
- **Subject:** "ChainSync Demo Information & Early Access"
- **Content:**
  - What ChainSync does
  - Early access program details
  - Personalized based on their questions
  - Next steps to schedule demo

## 🔒 Security Note

Your EmailJS Public Key is **safe to expose** in client-side code. EmailJS is designed for this. However:

- ✅ Public Key is OK in JavaScript
- ❌ Don't share your Private Key (not used here)
- ✅ EmailJS has built-in rate limiting
- ✅ Domain allowlist available in EmailJS settings

## 💰 Free Tier Limits

EmailJS Free Tier includes:
- 200 emails/month
- All features unlocked
- Email templates
- SMTP support

If you exceed 200 emails/month, upgrade to:
- **Basic:** $7/month (1,000 emails)
- **Pro:** $15/month (5,000 emails)

## 🛠️ What If I Don't Configure EmailJS?

**No problem!** The chatbot still works:

- ✅ Emails are saved in `localStorage`
- ✅ Lead tracking still works
- ✅ You get honest messaging: "We've saved your email, we'll reach out soon!"
- ✅ You can export leads from browser console:

```javascript
// In browser console:
JSON.parse(localStorage.getItem('chatbot_leads'))
```

## 📊 View Collected Leads

Even without EmailJS configured, leads are saved locally:

### In Browser Console:

```javascript
// View all leads
console.log(JSON.parse(localStorage.getItem('chatbot_leads')))

// View analytics
console.log(JSON.parse(localStorage.getItem('chatbot_analytics')))
```

### Export to CSV (browser console):

```javascript
const leads = JSON.parse(localStorage.getItem('chatbot_leads') || '[]');
const csv = 'Email,Timestamp,Context\n' + leads.map(l =>
  `${l.email},${l.timestamp},"${l.context}"`
).join('\n');
console.log(csv);
// Copy and paste into Excel/Google Sheets
```

## 🎯 Advanced: Custom Email Templates

You can customize the email templates in `script.js`:

### For transcripts (line ~2084):
```javascript
function formatTranscriptForEmail(transcript) {
  // Customize this!
}
```

### For demo requests (line ~2460):
```javascript
function formatDemoEmail(email, conversationContext) {
  // Customize this!
}
```

## 🐛 Troubleshooting

### "Email not sending"
1. Check browser console for errors
2. Verify all 3 IDs are correct (public key, service ID, template ID)
3. Check EmailJS dashboard → "Logs"
4. Ensure service is connected (check Email Services page)

### "EmailJS not initialized"
- Check browser console
- Ensure EmailJS script is loading (check Network tab)
- CDN link: `https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`

### "Invalid template"
- Template variables must match:
  - `{{to_email}}`
  - `{{to_name}}`
  - `{{subject}}`
  - `{{message}}`
  - `{{timestamp}}`
  - `{{type}}`

## 📞 Need Help?

- EmailJS docs: https://www.emailjs.com/docs/
- EmailJS support: https://www.emailjs.com/contact/

---

**Ready to go?** Just add your 3 IDs to the config and start capturing leads! 🚀
