# 🎮 Rune of the Sanctuary

Educational board game application for teaching Inorganic Chemistry (Coordination Number) with QR code integration and live leaderboard.

## ✨ Features

- 🎯 30 chemistry questions across 4 difficulty levels
- 🏆 Real-time leaderboard with fantasy theme
- 📱 Mobile-friendly QR code scanning
- 👥 Multi-player support (unlimited players)
- 💾 Persistent data storage
- 🎨 Beautiful fantasy-themed UI with mystical elements

## 🎯 Difficulty Levels & Points

| Level | Points | Questions | Color |
|-------|--------|-----------|-------|
| Easy | +2 | 8 questions | 🟢 Green |
| Medium | +3 | 7 questions | 🟡 Yellow |
| Hard | +4 | 8 questions | 🟣 Purple |
| Very Hard | +5 | 7 questions | 🔴 Red |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone or download the project
cd code

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open `http://localhost:5173` in your browser.

## 📖 How to Play

1. **Join Game** - Players register with their name
2. **Scan QR Code** - Each card has a unique QR code linking to a question
3. **Answer Question** - Select your answer and submit
4. **Earn Points** - Get points based on difficulty level
5. **Check Leaderboard** - See your ranking in real-time!

## 🔗 Question URLs

Each question has a unique URL for QR code generation:

```
/question/easy-1
/question/easy-2
...
/question/medium-1
...
/question/hard-1
...
/question/veryhard-1
```

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── FantasyLeaderboard.tsx    # Main leaderboard display
│   │   ├── HomePage.tsx               # Home page with leaderboard
│   │   ├── JoinGamePage.tsx           # Player registration
│   │   └── QuestionPage.tsx           # Question display & answering
│   ├── data/
│   │   └── questions.ts               # All 30 chemistry questions
│   └── App.tsx                        # Main app with routing
└── styles/
    ├── theme.css                      # Color scheme & styling
    └── fonts.css                      # Font imports
```

## 🎨 Tech Stack

- **Framework:** React 18 + TypeScript
- **Routing:** React Router 7
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Package Manager:** pnpm

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

Quick deploy options:
- **Vercel:** `vercel`
- **Netlify:** `netlify deploy --prod`
- **GitHub Pages:** Build and deploy `dist` folder

## 🔧 Configuration

### Add/Edit Questions
Edit `src/app/data/questions.ts`:

```typescript
{
  id: 'easy-1',
  difficulty: 'easy',
  points: 2,
  question: 'Your question here?',
  options: ['A', 'B', 'C', 'D'],
  correctAnswer: 0  // Index of correct answer
}
```

### Customize Theme
Edit color variables in `src/styles/theme.css`

### Reset Game Data
Click "Reset Game" button on homepage or clear browser storage

## 📱 Generate QR Codes

After deployment, generate QR codes for each question URL:

**Online Tools:**
- [QR Code Generator](https://qr-code-generator.com)
- [QR Code Monkey](https://www.qrcode-monkey.com)

**Bulk Generation Script (Python):**
```python
import qrcode

base_url = "https://your-domain.com/question/"
for diff in ['easy', 'medium', 'hard', 'veryhard']:
    count = 8 if diff in ['easy', 'hard'] else 7
    for i in range(1, count + 1):
        url = f"{base_url}{diff}-{i}"
        qr = qrcode.make(url)
        qr.save(f"qr_{diff}_{i}.png")
```

## 💾 Data Storage

- **localStorage** - Stores player scores and answers (persistent)
- **sessionStorage** - Stores current player login (session only)

## 🎓 Educational Content

Topics covered:
- Coordination number definition
- Complex geometries (linear, tetrahedral, octahedral, square planar)
- Isomerism (geometrical, optical, linkage, hydration, ionization)
- Ligand properties
- fac/mer isomerism
- Chirality in coordination compounds

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to customize questions, styling, or add new features!

---

**Built with ❤️ for Chemistry Education**
