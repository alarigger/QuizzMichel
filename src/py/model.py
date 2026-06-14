from dataclasses import dataclass, field, asdict
from typing import List


@dataclass
class Content:
    type: str
    value: str


@dataclass
class Option:
    content: List["Content"] = field(default_factory=list)
    valid: bool = False


@dataclass
class Audio:
    name: str
    sound: List[Content] = field(default_factory=list)


@dataclass
class Background:
    name: str
    image: List[Content] = field(default_factory=list)


@dataclass
class Category:
    name: str

    title: List[Content] = field(default_factory=list)
    background: List[Content] = field(default_factory=list)
    images: List[Content] = field(default_factory=list)
    music: List[Content] = field(default_factory=list)
    description: List[Content] = field(default_factory=list)


@dataclass
class Question:
    name: str
    categories: List[str] = field(default_factory=list)
    points: int = 100
    content: List[Content] = field(default_factory=list)
    correction: List[Content] = field(default_factory=list)
    is_demo: bool = False
    options: List[Option] = field(default_factory=list)


@dataclass
class QuizOptions:
    shuffle_options: bool = False
    question_limit: int = 0



@dataclass
class Quiz:
    name: str

    options: QuizOptions = field(default_factory=QuizOptions)
    teams: List[str] = field(default_factory=list)

    audio: List[Audio] = field(default_factory=list)
    backgrounds: List[Background] = field(default_factory=list)
    categories: List[Category] = field(default_factory=list)

    questions: List[Question] = field(default_factory=list)

    def to_dict(self):
        return asdict(self)