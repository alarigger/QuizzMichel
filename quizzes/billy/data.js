const QUIZZ_DATA = {
    "name": "billy",
    "options": {
        "shuffle_options": true,
        "question_limit": 30
    },
    "teams": [
        "JC",
        "Billy",
        "Jack",
        "Suzie"
    ],
    "audio": [
        {
            "name": "attribution",
            "sound": [
                {
                    "type": "audio",
                    "value": "bloub.mp3"
                }
            ]
        },
        {
            "name": "correct",
            "sound": [
                {
                    "type": "audio",
                    "value": "arcade.mp3"
                },
                {
                    "type": "audio",
                    "value": "french.mp3"
                },
                {
                    "type": "audio",
                    "value": "mario.mp3"
                },
                {
                    "type": "audio",
                    "value": "waaaw.mp3"
                }
            ]
        },
        {
            "name": "final",
            "sound": [
                {
                    "type": "audio",
                    "value": "EDN.mp3"
                }
            ]
        },
        {
            "name": "incorrect",
            "sound": [
                {
                    "type": "audio",
                    "value": "anime.mp3"
                },
                {
                    "type": "audio",
                    "value": "erro.mp3"
                },
                {
                    "type": "audio",
                    "value": "nani.mp3"
                },
                {
                    "type": "audio",
                    "value": "samourai.mp3"
                }
            ]
        },
        {
            "name": "move",
            "sound": [
                {
                    "type": "audio",
                    "value": "grid_move.mp3"
                }
            ]
        },
        {
            "name": "music_easy",
            "sound": [
                {
                    "type": "audio",
                    "value": "AC.mp3"
                }
            ]
        },
        {
            "name": "music_epic",
            "sound": [
                {
                    "type": "audio",
                    "value": "AA.mp3"
                }
            ]
        },
        {
            "name": "music_hard",
            "sound": [
                {
                    "type": "audio",
                    "value": "FFVII.mp3"
                },
                {
                    "type": "audio",
                    "value": "SF.mp3"
                }
            ]
        },
        {
            "name": "music_intro",
            "sound": [
                {
                    "type": "audio",
                    "value": "GG.mp3"
                }
            ]
        },
        {
            "name": "music_medium",
            "sound": [
                {
                    "type": "audio",
                    "value": "BBB.mp3"
                },
                {
                    "type": "audio",
                    "value": "FW.mp3"
                }
            ]
        },
        {
            "name": "music_outro",
            "sound": [
                {
                    "type": "audio",
                    "value": "ENG.mp3"
                }
            ]
        },
        {
            "name": "option",
            "sound": [
                {
                    "type": "audio",
                    "value": "option.mp3"
                }
            ]
        },
        {
            "name": "select",
            "sound": [
                {
                    "type": "audio",
                    "value": "coin.mp3"
                },
                {
                    "type": "audio",
                    "value": "shine.mp3"
                }
            ]
        },
        {
            "name": "waaw",
            "sound": [
                {
                    "type": "audio",
                    "value": "waaaw.mp3"
                }
            ]
        }
    ],
    "backgrounds": [
        {
            "name": "intro",
            "image": []
        },
        {
            "name": "jeopardy",
            "image": []
        },
        {
            "name": "outro",
            "image": []
        }
    ],
    "categories": [
        {
            "name": "JTB",
            "title": [
                {
                    "type": "text",
                    "value": "Title.txt"
                }
            ],
            "background": [],
            "images": [],
            "music": [],
            "description": []
        },
        {
            "name": "QSC",
            "title": [
                {
                    "type": "text",
                    "value": "Title.txt"
                }
            ],
            "background": [],
            "images": [],
            "music": [],
            "description": []
        },
        {
            "name": "RIG",
            "title": [
                {
                    "type": "text",
                    "value": "Title.txt"
                }
            ],
            "background": [],
            "images": [],
            "music": [],
            "description": []
        }
    ],
    "questions": [
        {
            "name": "JTB1",
            "categories": [
                "JTB"
            ],
            "points": 100,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Answer.txt"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "JTB2",
            "categories": [
                "JTB"
            ],
            "points": 200,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Answer.txt"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "JTB3",
            "categories": [
                "JTB"
            ],
            "points": 300,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Answer.txt"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "JTB4",
            "categories": [
                "JTB"
            ],
            "points": 400,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Answer.txt"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "QSC1",
            "categories": [
                "QSC"
            ],
            "points": 100,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Answer.txt"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "QSC2",
            "categories": [
                "QSC"
            ],
            "points": 200,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Answer.txt"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "QSC3",
            "categories": [
                "QSC"
            ],
            "points": 300,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Answer.txt"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "QSC4",
            "categories": [
                "QSC"
            ],
            "points": 400,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Answer.txt"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "RIG1",
            "categories": [
                "RIG"
            ],
            "points": 100,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "RIG2",
            "categories": [
                "RIG"
            ],
            "points": 200,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "RIG3",
            "categories": [
                "RIG"
            ],
            "points": 300,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "RIG4",
            "categories": [
                "RIG"
            ],
            "points": 400,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "RIG5",
            "categories": [
                "RIG"
            ],
            "points": 500,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "Question.txt"
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Correct.txt"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect1.txt"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Incorrect2.txt"
                        }
                    ],
                    "valid": false
                }
            ]
        }
    ]
};