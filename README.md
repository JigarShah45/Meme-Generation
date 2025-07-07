# 🎨 Meme Generator App

A fun meme generator built with **React**, **Tailwind CSS**, and **Clerk** authentication.  
Users can generate random memes via the Imgflip API and download them as images.

---

## 📦 Tech Stack

- React (Vite)
- Tailwind CSS
- Clerk Auth
- Axios
- html2canvas

---

## 🚀 Setup Instructions

1️⃣ Clone the repo:
```bash
git clone https://github.com/your-username/memegenerator.git
cd memegenerator
```

2️⃣ Install dependencies
```bash
npm install
```

3️⃣ Install Tailwind (if missing)

```bash

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
In tailwind.config.cjs, set:
```
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
```

In src/index.css, add:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4️⃣ Add your Clerk publishable key
```Create a .env file in your project root:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
```
5️⃣ Run the development server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.



📖 API Used
Imgflip Meme API
Clerk Authentication

🙌 Author
Jigar Shah

