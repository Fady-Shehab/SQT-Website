"""
database.py
─────────────────────────────────────────
إعداد الاتصال بـ MySQL عبر SQLAlchemy
"""
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

load_dotenv()

# ── بناء رابط الاتصال ──────────────────────────────────────────
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "3306")
DB_NAME = os.getenv("DB_NAME", "sqt_db")
DB_USER = os.getenv("DB_USER", "root")
DB_PASS = os.getenv("DB_PASSWORD", "")

DATABASE_URL = (
    f"mysql+pymysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    "?charset=utf8mb4"
)

# ── Engine ─────────────────────────────────────────────────────
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,       # يتحقق إن الاتصال شغال قبل كل query
    pool_recycle=3600,        # يجدد الاتصال كل ساعة
    echo=False,               # اعمله True لو عايز تشوف الـ SQL في الـ console
)

# ── Session ────────────────────────────────────────────────────
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# ── Base class للـ models ──────────────────────────────────────
class Base(DeclarativeBase):
    pass

# ── Dependency — بيتحقن في كل endpoint محتاج داتا بيس ─────────
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
