const QUIZZ_DATA = {
    teams: ["A", "B", "C"],
    shuffle_options: false,
    question_limit: 20,
    questions: [

        {
            categories:["general","quizz"],
            type:"QCM",
            points:200,
            content: "D’où vient le mot « quiz » ?",
            correction: "Le mot « quiz » est apparu au XVIIIe siècle en Angleterre, bien que son origine exacte reste débattue.",
            is_demo: false,
            options: [
                {content: "Du latin", valid: false },
                {content: "De l’anglais", valid: true },
                {content: "Du grec ancien", valid: false }
            ]
        },

        {
            categories:["general","quizz"],
            type:"QCM",
            content: [
                { type: "text", value: "Comment s'appelle ce type de pâtes ?" },
                { type: "image", value: "pasta.png" }
            ],
            correction: "Spagethi ! ",
            is_demo: false,
            options: [
                {content: "Spagethi", valid: true },
                {content: "Farafles", valid: false },
                {content: "Pene", valid: false }
            ]
        },

        {
            categories:["general","quizz"],
            type:"QCM",
            content: [
                { type: "text", value: "Comment s'appelle cet animal ?" },
                { type: "image", value: "zebra.gif" }
            ],
            correction: "Spagethi ! ",
            is_demo: false,
            options: [
                {content: "Zebre", valid: true },
                {content: "Cheval", valid: false },
                {content: "Chat", valid: false }
            ]
        }

    ]

}