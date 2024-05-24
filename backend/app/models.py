from pydantic import BaseModel
from sqlmodel import Field, Relationship, SQLModel


# Shared properties
# TODO replace email str with EmailStr when sqlmodel supports it
class UserBase(SQLModel):
    email: str = Field(unique=True, index=True)
    is_active: bool = True
    is_superuser: bool = False
    full_name: str | None = None


# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str


# TODO replace email str with EmailStr when sqlmodel supports it
class UserRegister(SQLModel):
    email: str
    password: str
    full_name: str | None = None


# Properties to receive via API on update, all are optional
# TODO replace email str with EmailStr when sqlmodel supports it
class UserUpdate(UserBase):
    email: str | None = None  # type: ignore
    password: str | None = None


# TODO replace email str with EmailStr when sqlmodel supports it
class UserUpdateMe(SQLModel):
    full_name: str | None = None
    email: str | None = None


class UpdatePassword(SQLModel):
    current_password: str
    new_password: str


# Database model, database table inferred from class name
class User(UserBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    hashed_password: str
    items: list["Item"] = Relationship(back_populates="owner")


# Properties to return via API, id is always required
class UserPublic(UserBase):
    id: int


class UsersPublic(SQLModel):
    data: list[UserPublic]
    count: int


# Shared properties
class ItemBase(SQLModel):
    title: str
    description: str | None = None


# Properties to receive on item creation
class ItemCreate(ItemBase):
    title: str


# Properties to receive on item update
class ItemUpdate(ItemBase):
    title: str | None = None  # type: ignore


# Database model, database table inferred from class name
class Item(ItemBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str
    owner_id: int | None = Field(default=None, foreign_key="user.id", nullable=False)
    owner: User | None = Relationship(back_populates="items")


# Properties to return via API, id is always required
class ItemPublic(ItemBase):
    id: int
    owner_id: int


class ItemsPublic(SQLModel):
    data: list[ItemPublic]
    count: int


# Generic message
class Message(SQLModel):
    message: str


# JSON payload containing access token
class Token(SQLModel):
    access_token: str
    token_type: str = "bearer"


# Contents of JWT token
class TokenPayload(SQLModel):
    sub: int | None = None


class NewPassword(SQLModel):
    token: str
    new_password: str



"""
    "informace": [
        {
            "typ": [
                "Digitální objekt",
                "Informace na úřední desce"
            ],
            "url": "https://www.kr-ustecky.cz/usneseni-z-40-rady-usteckeho-kraje-v-volebni-obdobi-2016-2020-konane-23-5-2018/d-1725339",
            "iri": "https://www.kr-ustecky.cz/usneseni-z-40-rady-usteckeho-kraje-v-volebni-obdobi-2016-2020-konane-23-5-2018/d-1725339",
            "název": {
                "cs": "Usnesení z 40. Rady Ústeckého kraje - V. volební období 2016 - 2020, konané 23.5.2018"
            },
            "vyvěšení": {
                "typ": "Časový okamžik",
                "datum": "2018-05-31"
            },
            "relevantní_do": {
                "typ": "Časový okamžik",
                "nespecifikovaný": true
            },
            "dokument": [
                {
                    "typ": "Digitální objekt",
                    "název": {
                        "cs": "usneseni 40. RUK 23. 5. 2018 black"
                    },
                    "url": "https://www.kr-ustecky.cz/assets/File.ashx?id_org=450018&amp;id_dokumenty=1725340"
                }
            ]
        },

"""


class Subject(BaseModel):
    type: list[str]
    url: str
    iri: str
    name: str
    display: dict[str, str]
    relevant: dict[str, str] | bool
    document: list[dict[str, dict[str, str]]] | None


class SubjectsListResponse(BaseModel):
    data: list[Subject]
    count: int
