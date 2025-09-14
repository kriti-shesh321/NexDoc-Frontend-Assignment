# Chat Assistant App (Assignment Project)

This project is a **React + TypeScript + Material-UI** implementation of a simple chat application, based on the provided Figma designs and assignment requirements.

---

## 📋 Features

### UI & Layout
- Sidebar with:
  - Logo section
  - Search through chats
  - Navigation links
  - Recent chats list
  - “Try Pro” placeholder
  - Profile section
- Main area with:
  - **Header**: ChatGPT version selector, Share, Info, and New Chat button
  - **Hero Section**: Welcome text + prompt cards (clicking a card inserts its text into the input field)
  - **New Chat Composer**: Input box with file upload, word count, and send button

### Chat Flow (Frontend Only)
- New Chat → starts conversation in an Active Chat screen
- Send a message → message appears instantly
- Assistant responds with a placeholder message (after small delay)
- Recent chats update automatically (latest at top, truncated title)

### Attachments
- Upload files from system (via native file picker)
- View attachments in a popover list
- Delete one-by-one or clear all
- File size labels (KB/MB)

### Responsiveness
- Works on desktop and tablet screen sizes
- Sidebar collapsible (full-width vs. icons-only mode)

### Tech Stack
- **Framework**: React with TypeScript
- **UI Library**: Material-UI (MUI v5)
- **State Management**: React Context (custom reducer)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/kriti-shesh321/NexDoc-Frontend-Assignment.git
cd NexDoc-Frontend-Assignment.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 📖 Assignment Requirements Coverage

- ✅ **UI matches Figma designs** (layout, components, placeholders)
- ✅ **Responsive design** (up to tablet screen size)
- ✅ **Two screens flow**: New Chat → Active Chat
- ✅ **Messages**: appear instantly with assistant placeholder
- ✅ **State Management**: implemented using React Context
- ✅ **Attachments**: upload, delete one-by-one, delete all
- ✅ **Clean code**: functional components, hooks, reusable structure

---

## ⚠️ Notes

- Backend is **not implemented** (chat is frontend-only).
- Camera button is **non-functional** (for design only).
- Design matches provided Figma as closely as possible within given time.

---