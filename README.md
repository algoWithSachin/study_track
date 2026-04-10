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

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/algoWithSachin/study_track.git
cd gate-prep-tracker
```

### 2. Create virtual environment

```
python -m venv .venv
```

### 3. Activate virtual environment

**Windows**

```
.venv\Scripts\activate
```

**Mac/Linux**

```
source .venv/bin/activate
```

### 4. Install dependencies

```
pip install -r requirements.txt
```

### 5. Run migrations

```
python manage.py migrate
```

### 6. Start development server

```
python manage.py runserver
```

### 7. Open in browser

```
http://127.0.0.1:8000/
```

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
