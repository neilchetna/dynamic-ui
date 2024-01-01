from pydantic import BaseModel
from enum import Enum

class SupportedLanguage(str, Enum):
    jsx = 'JSX',
    html = 'HTML',
    mdr = 'Markdown'


class CodeResponseModel(BaseModel):
    generated_code: str
    language: SupportedLanguage

class CodeCreate(BaseModel):
    ui_description: str
    language: SupportedLanguage = SupportedLanguage.jsx