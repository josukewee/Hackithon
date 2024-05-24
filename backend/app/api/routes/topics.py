import json
from typing import Any

from fastapi import APIRouter

from app.api.deps import SessionDep
from app.models import Subject, SubjectsListResponse

router = APIRouter()


@router.get("/", response_model=Subject)
def read_topics(
    session: SessionDep, skip: int = 0, limit: int = 100
) -> Any:

    data = open('./dataset.json')
    data = json.load(data)

    data = [SubjectsListResponse.json(**raw_data) for raw_data in data['informace']]

    return SubjectsListResponse(
        data=data,
        count=len(data)
    )
