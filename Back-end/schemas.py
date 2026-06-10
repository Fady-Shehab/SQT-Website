"""
schemas.py
─────────────────────────────────────────
شكل البيانات الداخلة والخارجة من الـ API
Pydantic بيتحقق منها أوتوماتيك ويحمي من البيانات الغلط
"""
from datetime import datetime
from typing import Literal, Optional
from pydantic import BaseModel, EmailStr, field_validator, ConfigDict


# ═══════════════════════════════════════
#  AUTH — REGISTER
# ═══════════════════════════════════════
class RegisterRequest(BaseModel):
    full_name : str
    email     : EmailStr
    department: Literal[
        "frontend", "backend", "mobile", "ai",
        "cybersecurity", "design", "data", "devops", "other"
    ]
    password  : str

    # ── Validators ────────────────────────────────────────────
    @field_validator("full_name")
    @classmethod
    def name_min_length(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 3:
            raise ValueError("الاسم يجب أن يكون ٣ أحرف على الأقل")
        return v

    @field_validator("password")
    @classmethod
    def password_strength(cls, v: str) -> str:
        if len(v) < 8:
            raise ValueError("كلمة المرور يجب أن تكون ٨ أحرف على الأقل")
        return v


# ═══════════════════════════════════════
#  AUTH — LOGIN
# ═══════════════════════════════════════
class LoginRequest(BaseModel):
    email   : EmailStr
    password: str
    remember: bool = False


# ═══════════════════════════════════════
#  RESPONSES
# ═══════════════════════════════════════
class UserOut(BaseModel):
    """بيانات اليوزر اللي بترجع للفرونت — بدون كلمة المرور أبداً"""
    model_config = ConfigDict(from_attributes=True)

    id          : int
    full_name   : str
    email       : str
    department  : str
    role        : str
    is_active   : bool
    created_at  : datetime


class LoginResponse(BaseModel):
    token: str
    user : UserOut


class MessageResponse(BaseModel):
    message: str


# ═══════════════════════════════════════
#  ADMIN
# ═══════════════════════════════════════
class UserAdminOut(UserOut):
    """نفس UserOut بس مع activated_at للأدمن"""
    activated_at: Optional[datetime] = None
