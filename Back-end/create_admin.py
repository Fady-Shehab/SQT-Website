"""
create_admin.py
─────────────────────────────────────────
سكريبت لإنشاء أول حساب أدمن في الداتا بيس
شغّله مرة واحدة بس:
    python create_admin.py

بعد كده الأدمن يقدر يدخل من الموقع ويفعّل باقي الحسابات.
"""
from database import SessionLocal, engine, Base
from models import User
from auth import hash_password

def create_admin():
    # إنشاء الجداول لو مش موجودة
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()
    try:
        # ── بيانات الأدمن — عدّلها قبل ما تشغّل ──────────────
        ADMIN_NAME  = "مشرف شرق تك"
        ADMIN_EMAIL = "admin@sharqtech.com"   # ← غيّر ده
        ADMIN_PASS  = "Admin@SQT2026!"        # ← غيّر ده لكلمة مرور قوية

        # تحقق إن الأدمن مش موجود
        existing = db.query(User).filter(User.email == ADMIN_EMAIL).first()
        if existing:
            print(f"⚠️  يوجد حساب بهذا الإيميل بالفعل: {ADMIN_EMAIL}")
            return

        admin = User(
            full_name     = ADMIN_NAME,
            email         = ADMIN_EMAIL,
            password_hash = hash_password(ADMIN_PASS),
            department    = "other",
            role          = "admin",
            is_active     = True,   # الأدمن مفعّل من البداية
        )

        db.add(admin)
        db.commit()

        print("✅ تم إنشاء حساب الأدمن بنجاح!")
        print(f"   الإيميل: {ADMIN_EMAIL}")
        print(f"   كلمة المرور: {ADMIN_PASS}")
        print("\n⚠️  غيّر كلمة المرور بعد أول دخول!")

    finally:
        db.close()

if __name__ == "__main__":
    create_admin()
