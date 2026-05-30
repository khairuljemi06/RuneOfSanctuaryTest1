# Rune of the Sanctuary - Deployment Guide

## 📦 Export Project Files

Semua kod sumber aplikasi berada di direktori ini: `/workspaces/default/code`

### Struktur Folder:
```
/workspaces/default/code/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── FantasyLeaderboard.tsx
│   │   │   ├── HomePage.tsx
│   │   │   ├── JoinGamePage.tsx
│   │   │   ├── QuestionPage.tsx
│   │   │   ├── QuizCard.tsx (not used, old)
│   │   │   ├── Leaderboard.tsx (not used, old)
│   │   │   └── StudentLogin.tsx (not used, old)
│   │   ├── data/
│   │   │   └── questions.ts
│   │   └── App.tsx
│   ├── styles/
│   │   ├── theme.css
│   │   └── fonts.css
│   └── imports/
├── package.json
├── vite.config.ts
├── postcss.config.mjs
└── pnpm-lock.yaml
```

## 🚀 Cara Run Locally

### Prasyarat:
- Node.js v18 atau lebih tinggi
- pnpm (atau npm/yarn)

### Langkah-langkah:

1. **Copy semua fail ke komputer anda**
   
2. **Install dependencies:**
   ```bash
   pnpm install
   # atau
   npm install
   ```

3. **Tambah file yang diperlukan:**

   **Buat `index.html` di root folder:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Rune of the Sanctuary</title>
     </head>
     <body>
       <div id="root"></div>
       <script type="module" src="/src/main.tsx"></script>
     </body>
   </html>
   ```

   **Buat `src/main.tsx`:**
   ```tsx
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './app/App';
   import './styles/theme.css';
   import './styles/fonts.css';

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

4. **Update `package.json` scripts:**
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview"
   }
   ```

5. **Jalankan development server:**
   ```bash
   pnpm dev
   # atau
   npm run dev
   ```

6. **Buka browser:** `http://localhost:5173`

## 🌐 Deploy ke Hosting

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Ikut arahan di terminal
4. Dapatkan URL production anda (contoh: `your-project.vercel.app`)

### Option 2: Netlify

1. Build project:
   ```bash
   pnpm build
   ```

2. Upload folder `dist` ke Netlify
3. Atau gunakan Netlify CLI:
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

### Option 3: GitHub Pages

1. Update `vite.config.ts`:
   ```ts
   export default {
     base: '/your-repo-name/',
   }
   ```

2. Build:
   ```bash
   pnpm build
   ```

3. Deploy folder `dist` ke GitHub Pages

## 📱 Generate QR Codes

Setelah deploy, gunakan URL production untuk generate QR codes:

### URL Pattern untuk soalan:
- Easy: `https://your-domain.com/question/easy-1` hingga `/question/easy-8`
- Medium: `https://your-domain.com/question/medium-1` hingga `/question/medium-7`
- Hard: `https://your-domain.com/question/hard-1` hingga `/question/hard-8`
- Very Hard: `https://your-domain.com/question/veryhard-1` hingga `/question/veryhard-7`

### Tools untuk Generate QR Code:
1. **Online:** 
   - https://qr-code-generator.com
   - https://www.qrcode-monkey.com

2. **Bulk Generate (Python):**
   ```python
   import qrcode
   
   base_url = "https://your-domain.com/question/"
   difficulties = ['easy', 'medium', 'hard', 'veryhard']
   counts = [8, 7, 8, 7]
   
   for diff, count in zip(difficulties, counts):
       for i in range(1, count + 1):
           url = f"{base_url}{diff}-{i}"
           qr = qrcode.make(url)
           qr.save(f"qr_{diff}_{i}.png")
   ```

## 🔧 Customization

### Tambah/Edit Soalan:
Edit file: `src/app/data/questions.ts`

### Tukar Tema Warna:
Edit file: `src/styles/theme.css`

### Tukar Bilangan Pemain:
Tiada had - sistem boleh terima unlimited players!

## 📊 Data Storage

- **localStorage:** Menyimpan leaderboard dan jawapan (persistent)
- **sessionStorage:** Menyimpan current player login (temporary)

## 🐛 Troubleshooting

### Masalah: "Cannot find module react"
```bash
pnpm install react react-dom
```

### Masalah: Routes tidak berfungsi selepas deploy
Tambah `_redirects` file untuk Netlify atau `vercel.json` untuk Vercel:

**Netlify (_redirects):**
```
/*    /index.html   200
```

**Vercel (vercel.json):**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## 📞 Support

Untuk sebarang soalan atau bantuan, rujuk dokumentasi:
- React Router: https://reactrouter.com
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com

---

**Project:** Rune of the Sanctuary  
**Version:** 1.0.0  
**Date:** May 2026
