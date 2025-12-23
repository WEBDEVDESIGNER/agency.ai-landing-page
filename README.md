# ⚡ Landing Page


A modern, animated, and responsive **AI Agency Landing Page** built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.  
This project demonstrates a sleek UI with smooth animations, optimized performance, and a developer-friendly setup with real contact form functionality using Resend.

---


## ✨ Key Features  

- ⚡ **Next.js 15** – React framework with App Router for optimal performance
- 🎨 **Tailwind CSS** – Utility-first responsive styling  
- 🎭 **Framer Motion** – Smooth animations & transitions  
- 📱 **Fully Responsive** – Mobile-first design for all devices  
- 📧 **Real Contact Form** – Email integration with Resend API
- 🛡️ **Spam Protection** – Honeypot field and rate limiting
- 🌓 **Dark Mode** – Theme toggle with local storage persistence
- ⚡ **Optimized Performance** – Lightweight and fast-loading landing page  
- 🖼️ **Modern UI/UX** – Clean sections with call-to-actions and interactive design  

---

## 🛠️ Tech Stack  

<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,typescript,tailwind,js,github" alt="Tech Stack" width="400"/>
  <br/>
  <img src="https://img.shields.io/badge/Animation-FramerMotion-ff69b4?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
</p>

---

## 📸 Screenshot  

<p align="center">
  <img src="https://ik.imagekit.io/yqnbhdlo4/Img/agency.ai?updatedAt=1756187710084" alt="Agency.AI Landing Page Screenshot" width="1000"/>
</p>  

---

## 📂 Project Structure  
```bash
agency.ai-landing-page/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API endpoint
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main landing page
│   └── globals.css              # Global styles (Tailwind imports)
├── components/                  # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TrustedBy.jsx
│   ├── Services.jsx
│   ├── OurWork.jsx
│   ├── Teams.jsx
│   ├── ContactUs.jsx
│   ├── Footer.jsx
│   └── ...
├── public/
│   └── assets/                  # Static assets (images, icons)
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## ⚙️ Installation & Setup  

### 1. **Clone the repository**  
```bash
git clone https://github.com/WEBDEVDESIGNER/agency.ai-landing-page.git
cd agency.ai-landing-page
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Set up environment variables**

Create a `.env.local` file in the root directory and add your environment variables:

```env
# Resend API Key - Get from https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
# Destination email where contact form submissions will be sent
CONTACT_TO_EMAIL=mesthapa23@gmail.com

# From email address (must be a verified domain in Resend for production)
# Use onboarding@resend.dev for development/testing
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

**Getting a Resend API Key:**
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy and paste it into your `.env.local` file

**Note:** For production, you'll need to verify your domain in Resend and use your custom domain email for `CONTACT_FROM_EMAIL`.

### 4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 🚀 Build & Deploy

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Deploy
This Next.js app can be deployed to:
- **Vercel** (recommended) - Zero config deployment
- **Netlify** - Add `next export` support if needed
- **Any Node.js hosting** - Use `npm start` after build

---

## 📧 Contact Form Features

- **Resend Integration** - Professional email delivery
- **Spam Protection** - Honeypot field to catch bots
- **Rate Limiting** - 3 requests per minute per IP
- **Validation** - Client and server-side validation
- **Toast Notifications** - User-friendly feedback
- **Loading States** - Disabled submit during processing

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the primary color:
```js
theme: {
  extend: {
    colors: {
      primary: '#5044E5', // Change this to your brand color
    },
  },
}
```

### Content
- Update component text in `components/` directory
- Modify team data in `public/assets/assets.js`
- Replace images in `public/assets/` directory

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---




