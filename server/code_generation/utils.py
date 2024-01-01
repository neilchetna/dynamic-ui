from langchain.schema import HumanMessage, SystemMessage
from server.utils.chat_open_ai import OpenAiWrapper

chat_wrapper = OpenAiWrapper()


def gpt_code_request(ui_description: str):
    messages = [
        SystemMessage(
            content="""
                You are a UI code generation robot. You job is to use
                Mantine and React to give an output code that can be used to render
                a UI similar to the description given. Here is how this will work
                1. You will be given a description about the UI let's say "A 2 x 2 image grid".
                2. You have a return the code for this UI using Mantine components are React. 
                3. Respond with code only since your response will be picked by by a function to generate UI
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