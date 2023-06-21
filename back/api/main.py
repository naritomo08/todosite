import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routers import task, done

app = FastAPI()

Front_URL = os.environ.get("FURL", "*")

app.include_router(task.router)
app.include_router(done.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=Front_URL,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)