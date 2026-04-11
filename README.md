# 📘 STUDY TRACK

A simple web app to track lecture progress during GATE preparation. Built for personal use, UI is minimal and not polished.

---

## 🚀 Features

* ✅ Track completed lectures
* 📊 Visual progress bar
* 💾 Data persistence (local storage)

---

## 🛠 Tech Stack

* Django & Django REST Framework
* HTML, CSS, JavaScript
* Docker

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/algoWithSachin/study_track.git
cd study_track
```

### 2. 🚀 Quick Start (Docker)
```
docker compose up --build
```

### 3. Open in browser

```
http://127.0.0.1:8000/
```
---

## 🛑 Stop the server

Press:

CTRL + C

### Run again (no rebuild needed):
```
docker compose up
```

### Use ``` docker compose up --build ``` only when:

* requirements.txt changes
* Dockerfile changes
* new dependencies added

---

## 🔐 Environment Variables (optional)

Create a `.env` file in the root directory and add:

```
SECRET_KEY=your-secret-key
```

---

## 📈 Future Improvements

* Daily targets & streak tracking
* Better UI/UX
* Authentication system

---

## 👨‍💻 Author

Built by me for personal productivity 🚀
