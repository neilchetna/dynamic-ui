from langchain.chat_models import ChatOpenAI
from server.config import open_api_key

class OpenAiWrapper:
    def __init__(self, model="gpt-3.5-turbo", temperature=0.7) -> None:
        self.api_key = open_api_key
        self.model = model
        self.temperature = temperature

    def create_chat_instance(self):
        return ChatOpenAI(
            api_key=self.api_key,
            model=self.model,
            temperature=self.temperature
            )
    
