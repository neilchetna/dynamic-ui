from server.code_generation.schemas import CodeCreate
from server.code_generation.utils import gpt_code_request

def create_code(code_generate_options: CodeCreate):

    generated_code = gpt_code_request(code_generate_options.ui_description)

    return {"generated_code": generated_code,"language": "JSX"}