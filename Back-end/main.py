"""
main.py
─────────────────────────────────────────
Entry point للـ FastAPI application
شغّله بـ:  uvicorn main:app --reload
"""
import os
from contextlib import asynccontextmanager

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base
from routes import auth as auth_router
from routes import admin as admin_router

load_dotenv()

# ── إنشاء الجداول في الداتا بيس عند الشغيل ─────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    print("✅ تم الاتصال بالداتا بيس وإنشاء الجداول")
    yield
    print("👋 السيرفر وقف")

# ── تعريف التطبيق ──────────────────────────────────────────────
app = FastAPI(
    title="شرق تك API",
    description="الـ Backend الخاص بموقع SQT — فريق الإسكندرية التكنولوجي",
    version="1.0.0",
    lifespan=lifespan,
    # إخفاء الـ docs في الـ production
    docs_url="/docs" if os.getenv("APP_ENV") != "production" else None,
    redoc_url=None,
)

# ── CORS ────────────────────────────────────────────────────────
# بيسمح للفرونت بس يكلم الباك
FRONTEND_ORIGIN = os.getenv("FRONTEND_ORIGIN", "http://127.0.0.1:5500")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_ORIGIN],   # الفرونت بتاعك بس
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH", "DELETE"],
    allow_headers=["*"],
)

# ── تسجيل الـ Routes ───────────────────────────────────────────
app.include_router(auth_router.router)
app.include_router(admin_router.router)


# ── Health check ───────────────────────────────────────────────
@app.get("/", tags=["Health"])
def health():
    return {"status": "ok", "app": "شرق تك API", "version": "1.0.0"}
