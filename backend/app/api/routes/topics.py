import json
from functools import cache, lru_cache
from typing import Any

from fastapi import APIRouter

from app.api.deps import SessionDep
from app.models import Subject, SubjectsListResponse

router = APIRouter()


@lru_cache()
def get_parsed_dataset():
    data = open('./dataset.json')
    data = json.load(data)
    return data


@router.get("/")
def read_topics(
        session: SessionDep, skip: int = 0, limit: int = 100
) -> Any:
    parsed_dataset = get_parsed_dataset()


    # parsed_topics = [Subject(**dict(
    #     type=topic['typ'],
    #     name=topic['název']['cs'],
    #     url=topic['url'],
    #     iri=topic['iri'],
    #     display=topic['vyvěšení'],
    #     relevant=topic['relevantní_do'],
    #     document=topic.get('dokument', None)
    # )) for topic in parsed_dataset['informace']]

    return parsed_dataset['informace']

    return SubjectsListResponse(
        data=parsed_dataset['informace'],
        count=len(parsed_dataset['informace'])
    )
