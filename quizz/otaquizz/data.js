const QUIZZ_DATA = {
    game: {
        name: "otaquizz",
        backgrounds: [

        ],
    },
    audio: [
        {
            name: "correct",
            sound: [{ type: "audio", value: "arcade.mp3" }],
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
            name: "music",
            sound: [{ type: "audio", value: "anime.mp3" }],
        }
        , {
            name: "final",
            sound: [{ type: "audio", value: "EDN.mp3" }],
        }
    ],
    shuffle_options: false,
    question_limit: 30,
    teams: ["Zebres", "Naruto", "Sylvanias", "Totoro"],
    categories: [
        {
            name: "FOOD",
            title: "🍣Buffet🍕",
            hero_image: { type: "image", value: "FOOD_HOWL_Q.png" },
            background_image: [{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music: []
        },
        {
            name: "LIT",
            title: "💬Lost In Translation💬",
            hero_image: { type: "image", value: "FOOD_HOWL_Q.png" },
            background_image: [{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music: []
        },
        {
            name: "BO",
            title: "🎶Pon Pon Pouet🎶",
            hero_image: { type: "image", value: "FOOD_HOWL_Q.png" },
            background_image: [{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music: []
        },
        {
            name: "BG",
            title: "🏔️Shoutout à l'équipe BG🏔️",
            hero_image: { type: "image", value: "FOOD_HOWL_Q.png" },
            background_image: [{ type: "image", value: "BG_Wallpaper.PNG" }],
            background_music: []
        },
        {
            name: "TRO",
            title: "👀Trop près👀",
            hero_image: { type: "image", value: "FOOD_HOWL_Q.png" },
            background_image: [{ type: "image", value: "TOOCLOSEwallpaper.PNG" }],
            background_music: []
        },
        {
            name: "POKE",
            title: "Who's that pokemon ? ",
            hero_image: { type: "image", value: "FOOD_HOWL_Q.png" },
            background_image: [{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music: []
        },        
        {
            name: "IKE",
            title: "🤓Ikemen à lunettes🤓",
            hero_image: { type: "image", value: "FOOD_HOWL_Q.png" },
            background_image: [{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music: []
        },
    ],
    questions: [
        {
            name: "foodQ1",
            categories: ["FOOD"],
            type: "QCM",
            points: 100,
            content: [
                { type: "image", value: "FOOD_HOWL_Q.png" }
            ],
            correction: [
                { type: "image", value: "FOOD_HOWL_A.png" }
            ],
            background: [
                { type: "image", value: "FOOD_HOWL_A.png" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        },
        {
            name: "foodQ2",
            categories: ["FOOD"],
            type: "QCM",
            points: 200,
            content: [
                { type: "image", value: "FOOD_DUNGEON_MESHI_Q.webp" }
            ],
            correction: [
                { type: "image", value: "FOOD_DUNGEON_MESHI_A.jpeg" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        },
        {
            name: "foodQ3",
            categories: ["FOOD"],
            type: "QCM",
            points: 300,
            content: [
                { type: "image", value: "FOOD_TOKYOGF_Q.png" }
            ],
            correction: [
                { type: "image", value: "FOOD_TOKYOGF_A.jpg" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        },
        {
            name: "foodQ4",
            categories: ["FOOD"],
            type: "QCM",
            points: 400,
            content: [
                { type: "image", value: "FOOD_FRIEREN_Q.png" }
            ],
            correction: [
                { type: "image", value: "FOOD_FRIEREN_A.png" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "foodQ5",
            categories: ["FOOD"],
            type: "QCM",
            points: 500,
            content: [
                { type: "image", value: "FOOD_SPIRITEDAWAY_Q.PNG" }
            ],
            correction: [
                { type: "image", value: "FOOD_SPIRITEDAWAY_A.png" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        , {
            name: "foodQ6",
            categories: ["FOOD"],
            type: "QCM",
            points: 600,
            content: [
                { type: "image", value: "FOOD_DEATHNOTE_Q.PNG" }
            ],
            correction: [
                { type: "image", value: "FOOD_DEATHNOTE_A.gif" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        , {
            name: "foodQ7",
            categories: ["FOOD"],
            type: "QCM",
            points: 700,
            content: [
                { type: "image", value: "FOOD_ONEPIECE_Q.webp" }
            ],
            correction: [
                { type: "image", value: "FOOD_ONEPIECE_A.jpg" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        /*----------------------------------------------------------LIT----------------------------*/
        , {
            name: "LITQ1",
            categories: ["LIT"],
            type: "QCM",
            points: 100,
            content: [
                { type: "image", value: "LIT_Q1_Q.PNG" }
            ],
            correction: [
                { type: "image", value: "LIT_Q1_A.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }

        , {
            name: "LITQ2",
            categories: ["LIT"],
            type: "QCM",
            points: 200,
            content: [
                { type: "image", value: "LIT_Q2_Q.PNG" }
            ],
            correction: [
                { type: "image", value: "LIT_Q2_A.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }

        , {
            name: "LITQ3",
            categories: ["LIT"],
            type: "QCM",
            points: 300,
            content: [
                { type: "image", value: "LIT_Q3_Q.PNG" }
            ],
            correction: [
                { type: "image", value: "LIT_Q3_A.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }

        , {
            name: "LITQ4",
            categories: ["LIT"],
            type: "QCM",
            points: 400,
            content: [
                { type: "image", value: "LIT_Q4_Q.PNG" }
            ],
            correction: [
                { type: "image", value: "LIT_Q4_A.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }

        , {
            name: "LITQ5",
            categories: ["LIT"],
            type: "QCM",
            points: 500,
            content: [
                { type: "image", value: "LIT_Q5_Q.PNG" }
            ],
            correction: [
                { type: "image", value: "LIT_Q5_A.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }

        , {
            name: "LITQ6",
            categories: ["LIT"],
            type: "QCM",
            points: 600,
            content: [
                { type: "image", value: "LIT_Q6_Q.PNG" }
            ],
            correction: [
                { type: "image", value: "LIT_Q6_A.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }

        , {
            name: "LITQ7",
            categories: ["LIT"],
            type: "QCM",
            points: 700,
            content: [
                { type: "image", value: "LIT_Q7_Q.PNG" }
            ],
            correction: [
                { type: "image", value: "LIT_Q7_A.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        /***********************************************************IK******************************************************** */
        , {
            name: "IKEQ1",
            categories: ["IKE"],
            type: "QCM",
            points: 100,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q1wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        , {
            name: "IKEQ2",
            categories: ["IKE"],
            type: "QCM",
            points: 200,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q2wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        , {
            name: "IKEQ3",
            categories: ["IKE"],
            type: "QCM",
            points: 300,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q3wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        , {
            name: "IKEQ4",
            categories: ["IKE"],
            type: "QCM",
            points: 400,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q4wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        , {
            name: "IKEQ5",
            categories: ["IKE"],
            type: "QCM",
            points: 500,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q5wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        , {
            name: "IKEQ6",
            categories: ["IKE"],
            type: "QCM",
            points: 600,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q6wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        , {
            name: "IKEQ7",
            categories: ["IKE"],
            type: "QCM",
            points: 700,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q7wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        /*********************************************************TRO*************************************************** */
        , {
            name: "TROQ1",
            categories: ["TRO"],
            type: "QCM",
            points: 100,
            content: [
                { type: "image", value: "Q.gif" }
            ],
            correction: [
                { type: "image", value: "A.gif" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "TROQ2",
            categories: ["TRO"],
            type: "QCM",
            points: 200,
            content: [
                { type: "image", value: "Q.gif" }
            ],
            correction: [
                { type: "image", value: "A.gif" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "TROQ3",
            categories: ["IKE"],
            type: "QCM",
            points: 300,
            content: [
                { type: "image", value: "Q.gif" }
            ],
            correction: [
                { type: "image", value: "A.gif" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "TROQ4",
            categories: ["TRO"],
            type: "QCM",
            points: 400,
            content: [
                { type: "image", value: "Q.gif" }
            ],
            correction: [
                { type: "image", value: "A.gif" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "TROQ5",
            categories: ["TRO"],
            type: "QCM",
            points: 500,
            content: [
                { type: "image", value: "Q.gif" }
            ],
            correction: [
                { type: "image", value: "A.gif" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "TROQ6",
            categories: ["IKE"],
            type: "QCM",
            points: 600,
            content: [
                { type: "image", value: "Q.gif" }
            ],
            correction: [
                { type: "image", value: "A.gif" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "TROQ7",
            categories: ["TRO"],
            type: "QCM",
            points: 700,
            content: [
                { type: "image", value: "Q.gif" }
            ],
            correction: [
                { type: "image", value: "A.gif" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
        /**************************************BO************** */
, {
            name: "BOQ1",
            categories: ["BO"],
            type: "QCM",
            points: 100,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q1wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "BOQ2",
            categories: ["BO"],
            type: "QCM",
            points: 200,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q2wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "BOQ3",
            categories: ["BO"],
            type: "QCM",
            points: 300,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q3wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "BOQ4",
            categories: ["BO"],
            type: "QCM",
            points: 400,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q4wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "BOQ5",
            categories: ["BO"],
            type: "QCM",
            points: 500,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q5wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "BOQ6",
            categories: ["BO"],
            type: "QCM",
            points: 600,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q6wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }, {
            name: "BOQ7",
            categories: ["BO"],
            type: "QCM",
            points: 700,
            content: [
                { type: "image", value: "Q.PNG" }
            ],
            correction: [
                { type: "image", value: "A.PNG" }
            ],
            background: [
                { type: "image", value: "Q7wallpaper.PNG" }
            ],
            is_demo: false,
            options: [
                { content: "👍", valid: true },
                { content: "👎", valid: false }
            ]
        }
    ]

}