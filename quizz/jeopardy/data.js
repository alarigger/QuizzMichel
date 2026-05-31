const QUIZZ_DATA = {
    teams: ["A", "B", "C"],
    shuffle_options: false,
    question_limit: 20,
    questions: [
        {
            categories:["anime","japon"],
            type:"QCM",
            points:100,
            content:"Quel studio a produit l'anime Naruto ?",
            correction:"Naruto a été produit par le studio Pierrot.",
            is_demo:false,
            options:[
                {content:"Pierrot", valid:true},
                {content:"Madhouse", valid:false},
                {content:"Bones", valid:false}
            ]
        },

        {
            categories:["anime","japon"],
            type:"QCM",
            points:200,
            content:[
                {type:"text", value:"Quel personnage est représenté ici ?"},
                {type:"image", value:"https://upload.wikimedia.org/wikipedia/en/6/66/Goku2007.jpg"}
            ],
            correction:"Il s'agit de Son Goku, héros principal de Dragon Ball.",
            is_demo:false,
            options:[
                {content:"Son Goku", valid:true},
                {content:"Vegeta", valid:false},
                {content:"Naruto", valid:false}
            ]
        },

        {
            categories:["anime","japon"],
            type:"QCM",
            points:300,
            content:"Dans Death Note, quel est le nom du dieu de la mort qui accompagne Light ?",
            correction:"Ryuk est le Shinigami qui laisse tomber son Death Note dans le monde humain.",
            is_demo:false,
            options:[
                {content:"Ryuk", valid:true},
                {content:"Rem", valid:false},
                {content:"Gelus", valid:false}
            ]
        },

        {
            categories:["anime","japon"],
            type:"QCM",
            points:400,
            content:"Quel anime raconte l'histoire des frères Elric ?",
            correction:"Fullmetal Alchemist suit Edward et Alphonse Elric.",
            is_demo:false,
            options:[
                {content:"Fullmetal Alchemist", valid:true},
                {content:"Attack on Titan", valid:false},
                {content:"Bleach", valid:false}
            ]
        },

        {
            categories:["anime","japon"],
            type:"QCM",
            points:500,
            content:"Quel est le nom du trésor recherché par Luffy dans One Piece ?",
            correction:"Le One Piece est le trésor légendaire laissé par Gol D. Roger.",
            is_demo:false,
            options:[
                {content:"One Piece", valid:true},
                {content:"Grand Line", valid:false},
                {content:"Red Line", valid:false}
            ]
        },

        {
            categories:["anime","films"],
            type:"QCM",
            points:100,
            content:"Quel réalisateur est à l'origine du Voyage de Chihiro ?",
            correction:"Hayao Miyazaki a réalisé Le Voyage de Chihiro.",
            is_demo:false,
            options:[
                {content:"Hayao Miyazaki", valid:true},
                {content:"Makoto Shinkai", valid:false},
                {content:"Mamoru Hosoda", valid:false}
            ]
        },

        {
            categories:["anime","films"],
            type:"QCM",
            points:200,
            content:"Dans Mon Voisin Totoro, comment s'appelle la créature géante de la forêt ?",
            correction:"Totoro est l'esprit protecteur de la forêt.",
            is_demo:false,
            options:[
                {content:"Totoro", valid:true},
                {content:"Jiji", valid:false},
                {content:"Calcifer", valid:false}
            ]
        },

        {
            categories:["anime","films"],
            type:"QCM",
            points:300,
            content:"Quel film d'animation japonais a popularisé Makoto Shinkai dans le monde entier en 2016 ?",
            correction:"Your Name (Kimi no Na wa) est devenu un phénomène mondial.",
            is_demo:false,
            options:[
                {content:"Your Name", valid:true},
                {content:"Weathering With You", valid:false},
                {content:"Suzume", valid:false}
            ]
        },

        {
            categories:["anime","personnages"],
            type:"QCM",
            points:400,
            content:"Quel personnage porte le chapeau de paille ?",
            correction:"Monkey D. Luffy est le célèbre pirate au chapeau de paille.",
            is_demo:false,
            options:[
                {content:"Monkey D. Luffy", valid:true},
                {content:"Roronoa Zoro", valid:false},
                {content:"Shanks", valid:false}
            ]
        },

        {
            categories:["anime","personnages"],
            type:"QCM",
            points:500,
            content:"Dans Attack on Titan, qui possède le Titan Assaillant au début de l'histoire ?",
            correction:"Eren Jaeger hérite du Titan Assaillant.",
            is_demo:false,
            options:[
                {content:"Eren Jaeger", valid:true},
                {content:"Levi Ackerman", valid:false},
                {content:"Armin Arlert", valid:false}
            ]
        }

    ]

}