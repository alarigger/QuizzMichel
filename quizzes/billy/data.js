const QUIZZ_DATA = {
    "name": "billy",
    "options": {
        "shuffle_options": true,
        "question_limit": 300
    },
    "teams": [
        "Blitz",
        "Didier"
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
            "image": [
                {
                    "type": "image",
                    "value": "Background.png"
                }
            ]
        },
        {
            "name": "jeopardy",
            "image": [
                {
                    "type": "image",
                    "value": "Background.png"
                }
            ]
        },
        {
            "name": "outro",
            "image": [
                {
                    "type": "image",
                    "value": "Background copy.webp"
                }
            ]
        },
        {
            "name": "result",
            "image": [
                {
                    "type": "image",
                    "value": "dance_anime.webp"
                }
            ]
        }
    ],
    "categories": [
        {
            "name": "DEL",
            "title": [
                {
                    "type": "text",
                    "value": "🧠Deep Lore🧠"
                }
            ],
            "background": [
                {
                    "type": "image",
                    "value": "Background.gif"
                }
            ],
            "images": [],
            "music": [],
            "description": []
        },
        {
            "name": "EXC",
            "title": [
                {
                    "type": "text",
                    "value": "📈Expert Comptable📉"
                }
            ],
            "background": [
                {
                    "type": "image",
                    "value": "Background.PNG"
                }
            ],
            "images": [],
            "music": [],
            "description": []
        },
        {
            "name": "JTB",
            "title": [
                {
                    "type": "text",
                    "value": "🎲Pifomètre🎲"
                }
            ],
            "background": [
                {
                    "type": "image",
                    "value": "Background.gif"
                }
            ],
            "images": [],
            "music": [],
            "description": []
        },
        {
            "name": "QSC",
            "title": [
                {
                    "type": "text",
                    "value": "🙈Qui Se Cache ?🙉 "
                }
            ],
            "background": [
                {
                    "type": "image",
                    "value": "Background.gif"
                }
            ],
            "images": [],
            "music": [],
            "description": []
        },
        {
            "name": "RIG",
            "title": [
                {
                    "type": "text",
                    "value": "🤖Rig Vision🤖"
                }
            ],
            "background": [
                {
                    "type": "image",
                    "value": "Background.gif"
                }
            ],
            "images": [],
            "music": [],
            "description": []
        }
    ],
    "questions": [
        {
            "name": "DEL1",
            "categories": [
                "DEL"
            ],
            "points": 10,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Comment s'appelle le hiboux dans l'épisode 22 saison 1 ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Comment s'appelle le hiboux dans l'épisode 22 saison 1 ? "
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Juliuis"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Claudius"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Sibelius"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "DEL2",
            "categories": [
                "DEL"
            ],
            "points": 20,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Quel est le surnom que la mère de grosdur donne à son fils ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "dudu\n"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "grodounet"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "roro"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "DEL3",
            "categories": [
                "DEL"
            ],
            "points": 30,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Quel est le prénom de l' ecureuil Foulafrousse ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "gaston"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "victor"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "boris"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "DEL4",
            "categories": [
                "DEL"
            ],
            "points": 40,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Comment s'appelle l'idole d'enfance de jessy dog ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "kid coyotte\n"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "marshal dustin"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "capitaine cactus"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "EXC1",
            "categories": [
                "EXC"
            ],
            "points": 10,
            "content": [
                {
                    "type": "text",
                    "value": "Combien de props dépouillés sur saison1 et 2 ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.png"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "685"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "705"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "1852"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "EXC2",
            "categories": [
                "EXC"
            ],
            "points": 20,
            "content": [
                {
                    "type": "text",
                    "value": "Combien de personnages (rhab compris) dépouillés sur saison1 et 2 ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.png"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "373"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "542\n"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "133"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "EXC3",
            "categories": [
                "EXC"
            ],
            "points": 30,
            "content": [
                {
                    "type": "text",
                    "value": "Combien de décors (reut compris) dépouillés sur saison1 et 2 ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.png"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "8295"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "2630\n"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "3695"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "EXC4",
            "categories": [
                "EXC"
            ],
            "points": 40,
            "content": [
                {
                    "type": "text",
                    "value": "Combien de personnages (sans rhab) dans la saison 1 et 2 ? "
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "41"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "53"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "102"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "JTB1",
            "categories": [
                "JTB"
            ],
            "points": 10,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Comment s'appelle l'araignée dans l'épisode 9 saison 1 ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Bernadette !"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Bernadette "
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Renée"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Ursule"
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
            "points": 20,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Dans l'épisode 9 saison 1 Jean-Claude échappe à gros dur en se déguisant en ..."
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "..."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Caca"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Branche\n"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Serpent\n"
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
            "points": 30,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Dans l'épisode 6 saison 1 à qui appartient la plume que trouve billy ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "La pie Agatha !"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Agatha"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Jack"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Ursule"
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
            "points": 40,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Dans l'episode \"un aprés midi animé\" quel est le super pouvoir de Jean Claude ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Avoir des bras ! "
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "avoir des bras"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "faire fondre la glace"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "voler "
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
            "points": 10,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Qui est le monstre dans la brume de l'épisode 13 saison 1 ?"
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "bison"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "grosdur"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "marla et marvin"
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
            "points": 20,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Dans l'épisode 9 saison 1 Billy et Suzie chassent Grosdur de la fontaine en... "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "..."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Se déguisant en fantômes !"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "En imittant sa mère"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "En l'attaquant avec l'aide d'une fourmillière"
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
            "points": 30,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Qui est le Croque-mitaine de l'episode D'Halloween ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "Marla et Marvin ! "
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Marla et Marvin "
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Gros dur"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Foulafrousse"
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
            "points": 40,
            "content": [
                {
                    "type": "image",
                    "value": "Question.PNG"
                },
                {
                    "type": "text",
                    "value": "Qui se cache dans le jouet maudit ? "
                }
            ],
            "correction": [
                {
                    "type": "image",
                    "value": "Answer.PNG"
                },
                {
                    "type": "text",
                    "value": "C'est Rémi le bousier qui était prisonnier du jouet ! "
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Remi le bousier"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Isabelle la lubellule"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Marie la fourmie "
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
            "points": 10,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "A quel personnage appartient ce rig ? "
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "jean-claude"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "marla"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "marvin"
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
            "points": 20,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "A quel personnage appartient ce rig ? "
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "jack\n"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "scott"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "kurt"
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
            "points": 30,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "A quel personnage appartient ce rig ? "
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "scott\n"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "billy"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "kurt"
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
            "points": 40,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "A quel personnage appartient ce rig ? "
                }
            ],
            "correction": [],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "billy"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "scott"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "suzie"
                        }
                    ],
                    "valid": false
                }
            ]
        }
    ]
};