const QUIZZ_DATA = {
    teams: ["Zebres", "Naruto", "Sylvanias", "Totoro"],
    shuffle_options: false,
    question_limit: 4,
    questions: [
        {
            name:"foodQ1",
            categories: ["🍣FOOD🍕"],
            type: "QCM",
            points: 200,
            content: [
                { type: "image", value: "foodQ1/FOOD_HOWL_Q.png" }
            ],
            correction: [
                { type: "image", value: "foodQ1/FOOD_HOWL_A.png" }
            ],
            is_demo: false,
            options: [
                { content: "V", valid: true },
                { content: "X", valid: false }
            ]
        },

        {
            name:"foodQ2",
            categories: ["🍣FOOD🍕"],
            type: "QCM",
            points: 200,
            content: [
                { type: "image", value: "foodQ1/FOOD_DUNGEON_MESHI_Q.png" }
            ],
            correction: [
                { type: "image", value: "foodQ1/FOOD_DUNGEON_MESHI_A.png" }
            ],
            is_demo: false,
            options: [
                { content: "V", valid: true },
                { content: "X", valid: false }
            ]
        },
        {
            name:"foodQ3",
            categories: ["🍣FOOD🍕"],
            type: "QCM",
            points: 200,
            content: [
                { type: "image", value: "foodQ1/FOOD_DUNGEON_MESHI_Q.png" }
            ],
            correction: [
                { type: "image", value: "foodQ1/FOOD_DUNGEON_MESHI_A.png" }
            ],
            is_demo: false,
            options: [
                { content: "V", valid: true },
                { content: "X", valid: false }
            ]
        }

        

    ]

}