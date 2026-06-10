"""
auth.py
─────────────────────────────────────────
كل حاجة متعلقة بالأمان:
- تشفير وفك تشفير كلمات المرور (bcrypt)
- إنشاء والتحقق من JWT tokens
- استخراج اليوزر الحالي من الـ token
"""
import os
from datetime import datetime, timedelta, timezone
from typing import Optional

from dotenv import load_dotenv
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import JWTError, jwt
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from database import get_db
import models

load_dotenv()

# ── إعدادات JWT ────────────────────────────────────────────────
SECRET_KEY    = os.getenv("JWT_SECRET", "change-this-in-production")
ALGORITHM     = os.getenv("JWT_ALGORITHM", "HS256")
EXPIRE_HOURS  = int(os.getenv("JWT_EXPIRE_HOURS", "24"))

# ── إعدادات bcrypt ─────────────────────────────────────────────
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# ── Bearer token scheme ────────────────────────────────────────
bearer_scheme = HTTPBearer()


# ═══════════════════════════════════════
#  PASSWORD UTILS
# ═══════════════════════════════════════
def hash_password(plain: str) -> str:
    """يحوّل كلمة المرور لـ hash مش ممكن يترجع — bcrypt"""
    return pwd_context.hash(plain)


def verify_password(plain: str, hashed: str) -> bool:
    """يقارن كلمة المرور المدخولة مع الـ hash المحفوظ"""
    return pwd_context.verify(plain, hashed)


# ═══════════════════════════════════════
#  JWT UTILS
# ═══════════════════════════════════════
def create_access_token(user_id: int, role: str, remember: bool = False) -> str:
    """
    ينشئ JWT token.
    remember=True  → صلاحية ٧ أيام
    remember=False → صلاحية EXPIRE_HOURS
    """
    expire_delta = timedelta(days=7) if remember else timedelta(hours=EXPIRE_HOURS)
    payload = {
        "sub" : str(user_id),
        "role": role,
        "exp" : datetime.now(timezone.utc) + expire_delta,
        "iat" : datetime.now(timezone.utc),
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def decode_token(token: str) -> dict:
    """يفك تشفير الـ token ويرجع الـ payload أو يرمي خطأ"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="token غير صالح أو منتهي الصلاحية",
            headers={"WWW-Authenticate": "Bearer"},
        )


# ═══════════════════════════════════════
#  DEPENDENCIES — حقن اليوزر في الـ endpoints
# ═══════════════════════════════════════
def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
    db: Session = Depends(get_db)
) -> models.User:
    """
    Dependency — يستخرج اليوزر من الـ JWT.
    استخدمه في أي endpoint محتاج تسجيل دخول:
        current_user = Depends(get_current_user)
    """
    payload = decode_token(credentials.credentials)
    user_id = int(payload.get("sub", 0))

    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="اليوزر غير موجود")
    if not user.is_active:
        raise HTTPException(status_code=403, detail="الحساب لم يُفعَّل بعد")
    return user


def require_admin(current_user: models.User = Depends(get_current_user)) -> models.User:
    """
    Dependency — يتأكد إن اليوزر أدمن.
    استخدمه في endpoints الأدمن:
        admin = Depends(require_admin)
    """
    if current_user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="هذه العملية للمشرفين فقط"
        )
    return current_user
