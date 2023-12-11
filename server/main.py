from fastapi import FastAPI
from server.code_generation.router import code_generation_router

app = FastAPI(title="Dynamic UI", version="0.0.1")

@app.get("/api")
async def root():
    return {
            "project": "Dynamic UI",
            "status": "Live",
            "version": "0.0.1"
            }


app.include_router(
    code_generation_router
)