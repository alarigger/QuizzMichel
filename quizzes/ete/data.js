const QUIZZ_DATA = {
    "name": "ete",
    "options": {
        "shuffle_options": true,
        "question_limit": 300
    },
    "teams": [
        "A",
        "B",
        "C"
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
                    "value": "Background.jpg"
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
            "name": "BLIND_01",
            "categories": [
                "BLIND"
            ],
            "points": 10,
            "content": [
                {
                    "type": "audio",
                    "value": "Question.mp3"
                },
                {
                    "type": "text",
                    "value": "Niveau 1 : De quelle série est issu ce générique ? (Version 8 bit)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Il s'agit du générique de Neon Genesis Evangelion, A cruel Angel Thesis."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": " Neon Genesis Evangelion"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Gundam Seed"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Macross Frontier"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "BLIND_02",
            "categories": [
                "BLIND"
            ],
            "points": 20,
            "content": [
                {
                    "type": "audio",
                    "value": "Question.mp3"
                },
                {
                    "type": "text",
                    "value": " De quelle série est issu ce générique ? (Version Zumba Drill Remix)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Les Ratz, avec des rats qui font du rap."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Les Ratz"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Oggy et les cafards"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Zig et Sharko"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "BLIND_03",
            "categories": [
                "BLIND"
            ],
            "points": 30,
            "content": [
                {
                    "type": "audio",
                    "value": "Question.mp3"
                },
                {
                    "type": "text",
                    "value": "De quelle série est issu ce générique ? (Nightcore Remix)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Gravity Falls est la bonne réponse !"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Gravity Falls"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Bob’s Burger"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Over the Garden Wall"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "BLIND_04",
            "categories": [
                "BLIND"
            ],
            "points": 40,
            "content": [
                {
                    "type": "audio",
                    "value": "Question.mp3"
                },
                {
                    "type": "text",
                    "value": "De quelle série est issu ce générique ? (Version Acapella)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "C'est l'anime Death Parade, avec ses barmans et barmaid cools qui vous envoient au purgatoires"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Death Parade"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Death Note"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Death Mount Death Play"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "BLIND_05",
            "categories": [
                "BLIND"
            ],
            "points": 50,
            "content": [
                {
                    "type": "audio",
                    "value": "Question.mp3"
                },
                {
                    "type": "text",
                    "value": "De quelle série est issu ce générique de fin ? ( C’est France Gall)\n"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Il s'agit du mystérieux ending de Hisone to Matosan, une série suivant la vie d'une base militaire où les avions sont en fait des dragons."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Hisone to Masotan"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Ergo Proxy"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": " Eden of the east"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "BLIND_06",
            "categories": [
                "BLIND"
            ],
            "points": 60,
            "content": [
                {
                    "type": "audio",
                    "value": "Question.mp3"
                },
                {
                    "type": "text",
                    "value": "De quelle série est issu ce générique ? ( Version Italienne)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "C'est un étrange mashup italien crée pour le dessin animé Lupin 3, appelé Edgard de la cambriole en France, mais avec la musique du générique japonais et français de Olive et Tom (Capitaine Tsubasa). On ne ratait pas que les traductions à cet époque d'import massif d'anime"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Edgar de la Cambriole"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Olive et Tom"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Magical Doremi"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "CRITIQ_01",
            "categories": [
                "CRITIQ"
            ],
            "points": 10,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette critique allociné ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Les Indestructibles"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": " Les Indestructibles"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Les nouveaux héros"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Volt, star malgré lui"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "CRITIQ_02",
            "categories": [
                "CRITIQ"
            ],
            "points": 20,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette critique allociné ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "L'illusionniste"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "L'illusionniste"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Les triplettes de Belleville"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Marcel et monsieur Pagnol"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "CRITIQ_03",
            "categories": [
                "CRITIQ"
            ],
            "points": 30,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette critique allociné ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Flow"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Flow"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Madagascar"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "La prophétie des Grenouilles"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "CRITIQ_04",
            "categories": [
                "CRITIQ"
            ],
            "points": 40,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette critique allociné ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Les contes de la princesse Kaguya"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": ""
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "La tortue Rouge"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "L’oeuf de l’ange"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "CRITIQ_05",
            "categories": [
                "CRITIQ"
            ],
            "points": 50,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette critique allociné ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Persépolis"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Persépolis"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Téhéran Tabou"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Parvana, une enfance en afghanistan"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "CRITIQ_06",
            "categories": [
                "CRITIQ"
            ],
            "points": 60,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage français est issu cette critique allociné ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Renaissance : Paris 2054"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Renaissance : Paris 2054"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "J’ai perdu mon corps"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Minuscule : La Vallée des fourmis perdues"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "DROIT_01",
            "categories": [
                "DROIT"
            ],
            "points": 10,
            "content": [
                {
                    "type": "text",
                    "value": "En quelle année a été créée la convention collective du film d’animation ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "2004"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "2004"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "2012"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "1995"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "DROIT_02",
            "categories": [
                "DROIT"
            ],
            "points": 20,
            "content": [
                {
                    "type": "text",
                    "value": " Quel service public permet de bénéficier de congés payés en étant intermittent·e du spectacle ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Les Congés Spectacles. On peut bénéficier de 2 semaines de congés, payées en fonction de notre taux annuel. A poser à partir du 1er mai chaque année où l'on est au régime intermittent."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Les Congés Spectacles"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Audiens, la mutuelle des intermittent·es"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Le service Seine et Marne de France travail "
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "DROIT_03",
            "categories": [
                "DROIT"
            ],
            "points": 30,
            "content": [
                {
                    "type": "text",
                    "value": "Depuis quelle année les entreprises de cinéma sont-elles obligées d’avoir des référent·es pour lutter contre les VSS (violences sexistes et sexuelles) ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "2021. Depuis chaque entreprise est tenue d'avoir un·e référent·e VSS, un protocole d'accompagnement des victimes, ainsi qu'un affichage obligatoire au sein de l'entreprise. Les aides du CNC sont conditionnées à ce que tout soit mis en place dans l'entreprise."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "2021"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "2017"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Depuis toujours évidemment"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "DROIT_04",
            "categories": [
                "DROIT"
            ],
            "points": 40,
            "content": [
                {
                    "type": "text",
                    "value": "Quel pourcentage de film d’animation français, tout format confondu, a t il été réalisé par des femmes ou personnes en minorité de genre sur la dernière décennie? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "21% sur la décennie 2015/2026. Le court métrage est bien plus inclusif que la série ou le long métrage. Ce pourcentage était de 4,2% sur la décennie 2005/2015. Les 50% restent un objectif à atteindre et à défendre."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "21%"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "4,2%"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "50% "
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "DROIT_05",
            "categories": [
                "DROIT"
            ],
            "points": 50,
            "content": [
                {
                    "type": "text",
                    "value": "Quelles sont les conditions pour bénéficier de la clause de rattrapage pour bénéficier de 6 mois supplémentaires pour cumuler des heures travaillées ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "2535 h de travails cumulées ou 5 années  au régime intermittent sur les dix dernières années. Il faut également avoir cumulé entre 338h et 506h pour pouvoir bénéficier de cette clause qui étendra votre protection sociale sur 6 mois pour finir de cumuler des heures. "
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": " 2535 h de travails cumulées ou 5 années consécutives au régime intermittent"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Avoir un contrat prouvant que les 507h seront effectuées sous 6 mois"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Plus de 10 années d’intermittence validées sans interruption"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "DROIT_06",
            "categories": [
                "DROIT"
            ],
            "points": 60,
            "content": [
                {
                    "type": "text",
                    "value": "En 2025 de combien ont  augmenté les minimas sociaux en animation ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": ""
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "0% pour l’ensemble de la profession"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "2% pour les nons-cadres et 1,8% pour les cadres "
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "2€ sur l’ensemble de la grille salariale"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "HIST_01",
            "categories": [
                "HIST"
            ],
            "points": 10,
            "content": [
                {
                    "type": "text",
                    "value": "Quel est le titre de la première version du roi et l’oiseau ? "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "La bergère et le ramoneur"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "La bergère et le ramoneur"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Le roi et le robot"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "L’oiseau et la ville"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "HIST_02",
            "categories": [
                "HIST"
            ],
            "points": 20,
            "content": [
                {
                    "type": "text",
                    "value": "Quel est le premier film d’animation a avoir fait l’ouverture du festival de Cannes ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Là-haut"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Là-haut"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Valse avec Bachir"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Ma vie de Courgette"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "HIST_03",
            "categories": [
                "HIST"
            ],
            "points": 30,
            "content": [
                {
                    "type": "text",
                    "value": "Le cristal du long métrage d’animation d’Annecy n’a été donné qu’une seule fois ex aequo entre deux films, mais lesquels ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Coraline et Mary & Max, en 2009\nDeux films en stop motion salués pour leurs propositions innovantes dans le domaine. Inversement le jury du festival a refusé de donner un cristal en 2000, évoquant le manque de modernité des films en compétition."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Coraline et Mary & Max, en 2009"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": " Le Chat du rabbin et Une vie de chat, en 2011"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "La traversée et Flee, en 2021"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "HIST_04",
            "categories": [
                "HIST"
            ],
            "points": 40,
            "content": [
                {
                    "type": "text",
                    "value": "Dans quel pays a été fabriqué une large partie du long-métrage Gandahar, de René Laloux "
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": ""
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Corée du nord"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Chine"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "République Tchèque"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "HIST_05",
            "categories": [
                "HIST"
            ],
            "points": 50,
            "content": [
                {
                    "type": "text",
                    "value": "Quel est l’auteur du court métrage Le hérisson dans la brume ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Youri Norstein"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Youri Norstein"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Ladislas Starewitch "
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Jan Švankmajer"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "HIST_06",
            "categories": [
                "HIST"
            ],
            "points": 60,
            "content": [
                {
                    "type": "text",
                    "value": "Quel est le nom du premier dinosaure jamais animé, créé par Winsor McCay?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Gertie"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Gertie"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Little Foot"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Oswald"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "IMAGE_01",
            "categories": [
                "IMAGE"
            ],
            "points": 10,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette image ? (Edition Spider-man)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Spider-Man : Across the Spider-Verse"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Spider-Man : Across the Spider-Verse"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Spider-Man : New generations"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Spider-Man: Beyond the Spider-Verse"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "IMAGE_02",
            "categories": [
                "IMAGE"
            ],
            "points": 20,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette image ? (Edition Silhouette Films)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Les aventures du prince Ahmed"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Les aventures du prince Ahmed"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Princes et Princesses"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Le Pharaon, le Sauvage et la Princesse"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "IMAGE_03",
            "categories": [
                "IMAGE"
            ],
            "points": 30,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette image ? (Edition Disney)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Ralph 2.0, où toutes les princesses Disney viennent à la rescousse de Ralph en plein brainrot sur internet."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Ralph 2.0 "
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Zootopie 2"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "La reine des neiges 2"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "IMAGE_04",
            "categories": [
                "IMAGE"
            ],
            "points": 40,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette image ? (Edition René Laloux)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Gandahar, les années lumières"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Gandahar, les années lumières"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "La planète Sauvage"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Les maîtres du temps"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "IMAGE_05",
            "categories": [
                "IMAGE"
            ],
            "points": 50,
            "content": [
                {
                    "type": "image",
                    "value": "Question.png"
                },
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette image ? (Edition Ghibli)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Si tu tends l’oreille"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Si tu tends l’oreille"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Souvenir goutte à goutte"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Je peux entendre l’océan"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "IMAGE_06",
            "categories": [
                "IMAGE"
            ],
            "points": 60,
            "content": [
                {
                    "type": "text",
                    "value": "De quel long métrage est issu cette image ? (Edition Jean François Laguionie)"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Slocum et moi. L'ultime film de Laguionie, où il revient sur son enfant et le rêve de ses parents de construire un bateau pour prendre la mer comme le marin Slocum. La mer est resté un thème emblématique à travers toute son oeuvre de 7 longs métrages."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Slocum et moi"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Louise en hiver"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "L’ile de Black Mór"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "TECH_01",
            "categories": [
                "TECH"
            ],
            "points": 10,
            "content": [
                {
                    "type": "text",
                    "value": "Lequel de ces logiciels d’animation 2D fonctionne en Bitmap ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": " Tvpaint utilise des brushs bitmap, approchant ses rendus de l'animation traditionnelle tracée à la main."
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": " Tvpaint"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Adobe Animate"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Toon Boom Harmony"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "TECH_02",
            "categories": [
                "TECH"
            ],
            "points": 20,
            "content": [
                {
                    "type": "text",
                    "value": "Quelle technique d’animation est définie ainsi : “ ____ est une technique d'animation en volume, où des acteurs ou objets réels sont filmés image par image.  ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "La pixilation "
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "La pixilation "
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Le Phénakistiscope"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "La claymation"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "TECH_03",
            "categories": [
                "TECH"
            ],
            "points": 30,
            "content": [
                {
                    "type": "text",
                    "value": " En compositing, qu’est ce que l’effet de parallaxe ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Différents niveaux de l’image qui bougent à des vitesses variables"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Différents niveaux de l’image qui bougent à des vitesses variables"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Un FX de simulation qui suit une direction donné"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "2 animations au timing parfaitement synchronisées"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "TECH_04",
            "categories": [
                "TECH"
            ],
            "points": 40,
            "content": [
                {
                    "type": "text",
                    "value": "En moyenne en 2025, combien coûte une minute d’animation en France (tous formats confondus) ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "14 943 € par minute, lissé entre série, court et long métrage. Un seconde coute donc 249 €"
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "14 943 €"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "23 808 € "
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "8 956 €"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "TECH_05",
            "categories": [
                "TECH"
            ],
            "points": 50,
            "content": [
                {
                    "type": "text",
                    "value": "En optique, que désigne la transluminescence ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": "Une lumière qui est réfléchie imparfaitement à travers un objet translucide. Par exemple la lumière du soleil qui traverse des parties fines du corps comme les oreilles ou les doigts. "
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Une lumière qui est réfléchie imparfaitement à travers un objet non opaque"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": " Une lumière qui brille dans la nuit dans des fréquence UV"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Une lumière réfléchie par un objet dans l’air et les objets environnant"
                        }
                    ],
                    "valid": false
                }
            ]
        },
        {
            "name": "TECH_06",
            "categories": [
                "TECH"
            ],
            "points": 60,
            "content": [
                {
                    "type": "text",
                    "value": "En modélisation 3D que signifie le terme voxel ?"
                }
            ],
            "correction": [
                {
                    "type": "text",
                    "value": ""
                }
            ],
            "is_demo": false,
            "options": [
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Le composant élémentaire d'un environnement numérique 3D"
                        }
                    ],
                    "valid": true
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Un synonyme d’un polygone 3D low poly"
                        }
                    ],
                    "valid": false
                },
                {
                    "content": [
                        {
                            "type": "text",
                            "value": "Un rendu 3D d’un modèle avec son mesh"
                        }
                    ],
                    "valid": false
                }
            ]
        }
    ]
};