const QUIZZ_DATA = {
    sounds : {

    },
    teams: ["Zebres", "Naruto", "Sylvanias", "Totoro"],
    shuffle_options: false,
    question_limit: 30,
    categories:[
        {
            name: "food",
            title: "🍣FOOD🍕",
            hero_image:{ type: "image", value: "FOOD_HOWL_Q.png" },
            background_image:[{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music:[]
        },        
        {
            name: "LIT",
            title: "Lost In Translation",
            hero_image:{ type: "image", value: "FOOD_HOWL_Q.png" },
            background_image:[{ type: "image", value: "FOOD_WALLPAPER.PNG" }],
            background_music:[]
        },
    ],
    questions: [
        {
            name: "foodQ1",
            categories: ["food"],
            type: "QCM",
            points: 100,
            content: [
                { type: "image", value: "FOOD_HOWL_Q.png" }
            ],
            correction: [
                { type: "image", value: "FOOD_HOWL_A.png" }
            ],
            background : [
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
            categories: ["food"],
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
            categories: ["food"],
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
            categories: ["food"],
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
            categories: ["food"],
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
            categories: ["food"],
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
            categories: ["food"],
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
    
    ]

}