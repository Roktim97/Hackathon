from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, List
from langchain_openai import ChatOpenAI
from langchain.schema import AIMessage, HumanMessage, SystemMessage
import os

openai_api_key = os.environ.get("openai_api_key")

app = FastAPI()

# Define a Pydantic model to validate the incoming data
class DisasterData(BaseModel):
    Disaster_Type: str
    Support_days: int
    Infant_Count: int
    Woman_Count: int
    Senior_citizen: int
    Kids: int
    Others: int
    RCC_building: int
    Non_RCC_building: int

@app.post("/disaster_support/")
async def disaster_support(data: DisasterData):
    # Convert data from Pydantic model to dict, if necessary
    data_dict = data.dict()
    
    messages = [
        SystemMessage(
            content="""You are a helpful disaster recovery planner based out of Guwahati, Assam."""
        ),
        HumanMessage(
            content=f"""
            Recently, an {data_dict['Disaster_Type']} affected an area where there are {data_dict['Infant_Count']} infants, {data_dict['Woman_Count']} women, {data_dict['Senior_citizen']} senior citizens, {data_dict['Kids']} kids and {data_dict['Others']} other people.
            The area had {data_dict['RCC_building']} RCC building and {data_dict['Non_RCC_building']} non RCC building. 
            Please provide me details of support material required for {data_dict['Support_days']} days in a list format.
            Each point in the list should contain 3 parts: Support Material Name, Total quantity/Amount/Units required, Calculation.
            Please note that different disaster types need different support materials.
            Please add supply material based on disaster type. Also, consider that since this is a time of disaster crisis, try to allocate the bare minimum resources required.
            Do a final cross check on the calculation before providing the final answer."""
        ),
    ]
    
    llm = ChatOpenAI(model_name="gpt-3.5-turbo-0125", openai_api_key=openai_api_key, temperature=0)
    assistant_response = llm.invoke(messages).to_json()['kwargs']['content']
    print(assistant_response)
    return {"response": assistant_response}
