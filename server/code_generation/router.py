from fastapi import APIRouter, Request
from server.code_generation.schemas import CodeResponseModel, CodeCreate
from server.code_generation.service import create_code

code_generation_router = r = APIRouter()

@r.post("/code-generation", response_model=CodeResponseModel)
def code_generation(request: Request, code_request: CodeCreate):
    """
        Create Code response
    """
    return create_code(code_request)