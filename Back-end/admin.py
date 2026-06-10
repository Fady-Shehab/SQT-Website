"""
routes/admin.py
─────────────────────────────────────────
GET   /api/admin/users             → قائمة كل اليوزرز (أدمن فقط)
GET   /api/admin/users/pending     → الحسابات المعلقة
PATCH /api/admin/users/{id}/activate → تفعيل حساب
PATCH /api/admin/users/{id}/deactivate → إلغاء تفعيل
DELETE /api/admin/users/{id}       → حذف حساب
"""
from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

import models
import schemas
from auth import require_admin
from database import get_db

router = APIRouter(prefix="/api/admin", tags=["Admin"])


# ═══════════════════════════════════════
#  قائمة كل اليوزرز
# ═══════════════════════════════════════
@router.get(
    "/users",
    response_model=list[schemas.UserAdminOut],
    summary="كل اليوزرز (أدمن)"
)
def list_users(
    db: Session = Depends(get_db),
    _: models.User = Depends(require_admin)
):
    return db.query(models.User).order_by(models.User.created_at.desc()).all()


# ═══════════════════════════════════════
#  الحسابات المعلقة فقط
# ═══════════════════════════════════════
@router.get(
    "/users/pending",
    response_model=list[schemas.UserAdminOut],
    summary="الحسابات المعلقة (أدمن)"
)
def list_pending(
    db: Session = Depends(get_db),
    _: models.User = Depends(require_admin)
):
    return (
        db.query(models.User)
        .filter(models.User.is_active == False)
        .order_by(models.User.created_at.desc())
        .all()
    )


# ═══════════════════════════════════════
#  تفعيل حساب
# ═══════════════════════════════════════
@router.patch(
    "/users/{user_id}/activate",
    response_model=schemas.MessageResponse,
    summary="تفعيل حساب (أدمن)"
)
def activate_user(
    user_id: int,
    db: Session = Depends(get_db),
    _: models.User = Depends(require_admin)
):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="اليوزر غير موجود")
    if user.is_active:
        raise HTTPException(status_code=400, detail="الحساب مفعّل بالفعل")

    user.is_active    = True
    user.activated_at = datetime.now(timezone.utc)
    db.commit()

    return {"message": f"تم تفعيل حساب {user.full_name} بنجاح"}


# ═══════════════════════════════════════
#  إلغاء تفعيل حساب
# ═══════════════════════════════════════
@router.patch(
    "/users/{user_id}/deactivate",
    response_model=schemas.MessageResponse,
    summary="إلغاء تفعيل حساب (أدمن)"
)
def deactivate_user(
    user_id: int,
    db: Session = Depends(get_db),
    admin: models.User = Depends(require_admin)
):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="اليوزر غير موجود")
    if user.id == admin.id:
        raise HTTPException(status_code=400, detail="لا يمكنك إلغاء تفعيل حسابك أنت")

    user.is_active    = False
    user.activated_at = None
    db.commit()

    return {"message": f"تم إلغاء تفعيل حساب {user.full_name}"}


# ═══════════════════════════════════════
#  حذف حساب
# ═══════════════════════════════════════
@router.delete(
    "/users/{user_id}",
    response_model=schemas.MessageResponse,
    summary="حذف حساب (أدمن)"
)
def delete_user(
    user_id: int,
    db: Session = Depends(get_db),
    admin: models.User = Depends(require_admin)
):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="اليوزر غير موجود")
    if user.id == admin.id:
        raise HTTPException(status_code=400, detail="لا يمكنك حذف حسابك أنت")

    db.delete(user)
    db.commit()

    return {"message": f"تم حذف حساب {user.full_name} بنجاح"}
