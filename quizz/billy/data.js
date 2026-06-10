const QUIZZ_DATA = {
    game: {
        name: "billy"
    },
    shuffle_options: true,
    question_limit: 30,
    teams: ["JC", "Billy", "Jack", "Suzie"],
    backgrounds: [
        { name: "result", image: [{ type: "image", value: "dance_anime.webp" }] }
        ,
        {
            name: "popup", image: [
                { type: "image", value: "stickman.png" },
                { type: "image", value: "blob_2.png" },
                { type: "image", value: "square.png" },
                { type: "image", value: "blob.png" }
            ]
        }
    ],
    audio: [
        {
            name: "music_intro",
            sound: [{ type: "audio", value: "GG.mp3" }],
        },
        {
            name: "waaw",
            sound: [{ type: "audio", value: "waaaw.mp3" }],
        },
        {
            name: "select",
            sound: [{ type: "audio", value: "coin.mp3" }],
        }
        , {
            name: "correct",
            sound: [{ type: "audio", value: "waaaw.mp3" }],
        }
        , {
            name: "correct",
            sound: [{ type: "audio", value: "french.mp3" }],
        }
        , {
            name: "correct",
            sound: [{ type: "audio", value: "mario.mp3" }],
        }
        , {
            name: "incorrect",
            sound: [{ type: "audio", value: "erro.mp3" }],
        }
        , {
            name: "incorrect",
            sound: [{ type: "audio", value: "nani.mp3" }],
        }
        , {
            name: "incorrect",
            sound: [{ type: "audio", value: "samourai.mp3" }],
        }
        , {
            name: "incorrect",
            sound: [{ type: "audio", value: "anime.mp3" }],
        }
        , {
            name: "move",
            sound: [{ type: "audio", value: "grid_move.mp3" }],
        }
        , {
            name: "option",
            sound: [{ type: "audio", value: "option.mp3" }],
        }
        , {
            name: "attribution",
            sound: [{ type: "audio", value: "bloub.mp3" }],
        }
        , {
            name: "music_easy",
            sound: [{ type: "audio", value: "AC.mp3" }],
        }
        , {
            name: "music_medium",
            sound: [{ type: "audio", value: "FW.mp3" }],
        }
        , {
            name: "music_medium",
            sound: [{ type: "audio", value: "BBB.mp3" }],
        }
        , {
            name: "music_hard",
            sound: [{ type: "audio", value: "SF.mp3" }],
        }, {
            name: "music_hard",
            sound: [{ type: "audio", value: "FFVII.mp3" }],
        }, {
            name: "music_epic",
            sound: [{ type: "audio", value: "AA.mp3" }],
        }
        , {
            name: "final",
            sound: [{ type: "audio", value: "EDN.mp3" }],
        }
        , {
            name: "music_outro",
            sound: [{ type: "audio", value: "ENG.mp3" }],
        }
    ],
    categories: [
        {
            name: "RIG",
            title: "Hyper RIGoureux",
            background_image: [{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music: []
        },
        {
            name: "JTB",
            title: "J'ai tout binge watché!",
            background_image: [{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music: []
        },
        {
            name: "EC",
            title: "Expert Comptable",
            background_image: [{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music: []
        }
    ],
    questions: [
        {
            name: "JTB1",
            categories: ["JTB"],
            points: 100,
            content: [
                { type: "image", value: "Question.png" },
                { type: "text", value: "Question.txt" }
            ],
            correction: [
                { type: "image", value: "Answer.png" },
                { type: "text", value: "Answer.txt" },
            ],
            is_demo: false,
            options: [
                { content: [{ type: "text", value: "Correct.txt" }], valid: true },
                { content: [{ type: "text", value: "Incorrect1.txt" }], valid: false },
                { content: [{ type: "text", value: "Incorrect2.txt" }], valid: false }
            ]
        },
        {
            name: "RIG1",
            categories: ["RIG"],
            points: 100,
            content: [
                { type: "image", value: "Question.png" },
                { type: "text", value: "Question.txt" }
            ],
            correction: [
                { type: "image", value: "Answer.png" },
                { type: "text", value: "Answer.txt" },
            ],
            is_demo: false,
            options: [
                { content: [{ type: "text", value: "Correct.txt" }], valid: true },
                { content: [{ type: "text", value: "Incorrect1.txt" }], valid: false },
                { content: [{ type: "text", value: "Incorrect2.txt" }], valid: false }
            ]
        },
    ]

}