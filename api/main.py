from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel
from api.generation import generate, complete
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get('/')
async def check():
    return 'hello'

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://storyteller-liart.vercel.app/api",
    "https://storyteller-git-master-muhammad-shahs-projects.vercel.app/api",
    "https://storyteller-60m87xh7q-muhammad-shahs-projects.vercel.app/api",

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class GenerateRequest(BaseModel):
    topic: str
    length: str
    temperature: float = 0.7
    genre: Optional[str] = None
    narrative_perspective: Optional[str] = None
    character_name: Optional[str] = None
    character_description: Optional[str] = None
    setting_description: Optional[str] = None


class CompleteRequest(BaseModel):
    partial_story: str
    length: str
    temperature: float = 0.7
    genre: Optional[str] = None
    narrative_perspective: Optional[str] = None
    character_name: Optional[str] = None
    character_description: Optional[str] = None
    setting_description: Optional[str] = None


@app.post("/generate")
def generate_story(request: GenerateRequest):
    response = generate(
        topic=request.topic,
        length=request.length,
        temperature=request.temperature,
        genre=request.genre,
        narrative_perspective=request.narrative_perspective,
        character_name=request.character_name,
        character_description=request.character_description,
        setting_description=request.setting_description
    )
    return {"story": response}


@app.post("/complete")
def complete_story(request: CompleteRequest):
    response = complete(
        partial_story=request.topic,
        length=request.length,
        temperature=request.temperature,
        genre=request.genre,
        narrative_perspective=request.narrative_perspective,
        character_name=request.character_name,
        character_description=request.character_description,
        setting_description=request.setting_description
    )
    return {"completed_story": response}
