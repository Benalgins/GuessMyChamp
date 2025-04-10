# React + Vite
# 🧠 GuessMyChamp – League of Legends Guessing Game

**GuessMyChamp** is an interactive React-based game inspired by *Wordle*, designed for League of Legends fans. Users attempt to guess a hidden champion by comparing specific attributes.

## 🚀 Project Overview

The project includes public and protected sections:

- **Public** users can view the champion catalog, play the demo guessing game, or register/login.
- **Authenticated** users can add champions, manage their own list (CRUD operations), and edit existing ones.

---
## 🔧 Features

- ✅ **Authentication** – Login/Register with cookie-based session management
- 🎯 **Demo Game** – Random champion guessing with visual feedback
- ➕ **Add Champion** – Logged-in users can contribute to the collection
- 🧩 **Champion Comparison** – Visual color-coded matching (green/red)
- 🗂 **Catalog View** – Displays all champions 
- 🛠 **Champion Management** – Edit/Delete user-submitted champions
- 🏆 **Leaderboard** – Highlights best guessers (optional extension)

- src/
├── App.jsx                 # Основен routing и root компонент
├── AuthContex.jsx         # Context API за аутентикация на потребителя
├── config/
│   └── config.js          # Конфигурации и променливи за порт и връзка с backend
├── components/
│    └── Home.jsx
│    └── Register.jsx
│    └── NoUser.jsx
│    └── AddChampion.jsx
│    └── Leaderboard.jsx
│    └── Home.jsx
├── Demo-run/
│   └── Demo.jsx  
├── MyChampions/
│   ├── MyChampions.jsx    # Показва шампионите на текущия потребител
│   └── Champion-edit.jsx
├── styles/
│   └── all
