"""
models.py
─────────────────────────────────────────
تعريف جداول الداتا بيس
"""
from datetime import datetime, timezone
from sqlalchemy import (
    Column, Integer, String, Boolean,
    DateTime, Enum as SAEnum
)
from database import Base


class User(Base):
    __tablename__ = "users"

    id           = Column(Integer, primary_key=True, index=True, autoincrement=True)
    full_name    = Column(String(100), nullable=False)
    email        = Column(String(320), unique=True, index=True, nullable=False)
    password_hash= Column(String(255), nullable=False)
    department   = Column(
        SAEnum(
            "frontend", "backend", "mobile", "ai",
            "cybersecurity", "design", "data", "devops", "other",
            name="department_enum"
        ),
        nullable=False
    )
    role         = Column(
        SAEnum("member", "admin", name="role_enum"),
        default="member",
        nullable=False
    )
    is_active    = Column(Boolean, default=False, nullable=False)
    # is_active = False  → حساب معلّق، ينتظر تفعيل الأدمن
    # is_active = True   → حساب مفعّل، يقدر يدخل

    created_at   = Column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False
    )
    activated_at = Column(DateTime(timezone=True), nullable=True)

    def __repr__(self):
        return f"<User id={self.id} email={self.email} active={self.is_active}>"
