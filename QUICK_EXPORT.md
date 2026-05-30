# 🚀 Quick Export Instructions

## To Get Your Code:

### Method 1: Download from Figma Make (Easiest)
1. Look for "Export" or "Download" button in Figma Make interface
2. Download the ZIP file
3. Extract and follow README.md

### Method 2: Copy Files Manually
Copy these folders/files to your local machine:

**Essential Files:**
```
src/
├── app/
│   ├── components/
│   ├── data/
│   └── App.tsx
├── styles/
package.json
pnpm-lock.yaml
vite.config.ts
postcss.config.mjs
```

**Files to CREATE on your machine:**

1. **index.html** (in root):
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

2. **src/main.tsx**:
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

3. Update **package.json** scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## Then Run:
```bash
pnpm install
pnpm dev
```

## Preview URL (if available in Figma Make):
Check the Figma Make interface for a "Preview" button or URL to test the app live.

---

For detailed deployment instructions, see DEPLOYMENT_GUIDE.md
