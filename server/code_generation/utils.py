from langchain.schema import HumanMessage, SystemMessage
from server.utils.chat_open_ai import OpenAiWrapper

chat_wrapper = OpenAiWrapper()


def gpt_code_request(ui_description: str):
    messages = [
        SystemMessage(
            content="""
                You are a code generation bot. Your task is to generate the code for a given description.
                Your generated code should be a snippet of a react component 
            """
        ),
        HumanMessage(
          content="""
            Here is the description: {}
          """.format(ui_description)
        )
    ]
    chat = chat_wrapper.create_chat_instance()
    response = chat(messages)
    return response.content