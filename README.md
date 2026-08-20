# 📝 Todo App

A clean and responsive Todo application built with **React 19** and **Vite**, featuring dark/light theme, priority levels, due dates, and smooth animations.

---

## ✨ Features

- ➕ **Add Tasks** — with a title, priority level, and due date
- ✅ **Mark as Done** — strike through completed tasks
- 🗑️ **Delete Tasks** — remove individual tasks
- 🧹 **Clear All** — with a confirmation popup
- 🌙 **Dark / Light Theme** — toggle and persists on reload
- 💾 **LocalStorage** — tasks and theme saved automatically
- 🎞️ **Animations** — smooth enter/exit via Framer Motion

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling |
| Motion (Framer Motion) | Animations |
| Lucide React | Icons |
| Context API | Global state management |

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── AddButton.jsx       # Floating button to open the form
│   ├── ClearPopUp.jsx      # Confirmation dialog for clearing all tasks
│   ├── Form.jsx            # Task creation form
│   ├── Header.jsx          # App header with theme toggle & clear button
│   ├── Task.jsx            # Individual task card
│   └── TodoContainer.jsx   # Grid of all task cards
├── Custom hooks/
│   └── useToggle.jsx       # Custom hook for theme toggle
├── TaskContext.js          # Context for tasks state
├── ThemeContext.jsx        # Context for theme state
├── App.jsx                 # Root component
└── main.jsx                # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)

### Installation

```bash
# Clone the repository
git clone "https://github.com/faizankhan-ux/TODO.git"
cd todo-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🖥️ Usage

1. Click the **＋ button** (bottom right) to open the task form
2. Enter a task name, select a priority, and pick a due date
3. Click **Add Task** to save
4. Use the **✓ icon** on a card to mark it done
5. Use the **🗑 icon** to delete a task
6. Use the **Eraser icon** in the header to clear all tasks
7. Use the **Moon/Sun icon** to toggle dark/light mode

---

## 👤 Author

**Faizan Khan** 
