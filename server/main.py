from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from server.code_generation.router import code_generation_router

app = FastAPI(title="Dynamic UI", version="0.0.1")

@app.get("/api")
async def root():
    return {
            "project": "Dynamic UI",
            "status": "Live",
            "version": "0.0.1"
            }

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(
    code_generation_router
)