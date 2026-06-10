# SQT Backend — FastAPI + MySQL

## 🚀 خطوات التشغيل

### 1. تثبيت المتطلبات
```bash
cd backend
pip install -r requirements.txt
```

### 2. إعداد الداتا بيس
افتح MySQL وشغّل:
```sql
CREATE DATABASE sqt_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 3. إعداد ملف البيئة
```bash
cp .env.example .env
```
ثم افتح `.env` وعبّي بياناتك:
- `DB_PASSWORD` → كلمة مرور MySQL بتاعتك
- `JWT_SECRET` → مفتاح عشوائي (شغّل: `python -c "import secrets; print(secrets.token_hex(32))"`)

### 4. إنشاء حساب الأدمن
```bash
# عدّل الإيميل وكلمة المرور في الملف أولاً
python create_admin.py
```

### 5. تشغيل السيرفر
```bash
uvicorn main:app --reload
```

السيرفر هيشتغل على: **http://localhost:8000**

### 6. تجربة الـ API
افتح: **http://localhost:8000/docs**

---

## 📡 الـ Endpoints

| Method | Endpoint | الوصف | محمي |
|--------|----------|-------|------|
| POST | `/api/auth/register` | تسجيل حساب جديد | ❌ |
| POST | `/api/auth/login` | تسجيل الدخول | ❌ |
| GET | `/api/auth/me` | بيانات اليوزر الحالي | ✅ |
| GET | `/api/admin/users` | كل اليوزرز | 👑 أدمن |
| GET | `/api/admin/users/pending` | الحسابات المعلقة | 👑 أدمن |
| PATCH | `/api/admin/users/{id}/activate` | تفعيل حساب | 👑 أدمن |
| PATCH | `/api/admin/users/{id}/deactivate` | إلغاء تفعيل | 👑 أدمن |
| DELETE | `/api/admin/users/{id}` | حذف حساب | 👑 أدمن |

---

## 🔐 ملاحظات أمان
- كلمات المرور محفوظة بـ **bcrypt** — مش plain text أبداً
- الـ JWT بينتهي بعد **24 ساعة** (7 أيام لو "تذكرني")
- الـ CORS محدود للفرونت بتاعك بس
- **لا ترفع `.env` على GitHub أبداً**
