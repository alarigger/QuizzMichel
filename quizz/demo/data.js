const QUIZZ_DATA = {
    teams: ["A", "B", "C"],
    shuffle_answers: false,
    question_limit: 20,
    questions: [

        {
            text: "D’où vient le mot « quiz » ?",
            correction: "Le mot « quiz » est apparu au XVIIIe siècle en Angleterre, bien que son origine exacte reste débattue.",
            is_demo: false,
            answers: [
                { text: "Du latin", valid: false },
                { text: "De l’anglais", valid: true },
                { text: "Du grec ancien", valid: false }
            ]
        },

        {
            text: "Quel est le but principal d’un quiz ?",
            correction: "Un quiz sert généralement à tester les connaissances ou à divertir.",
            is_demo: false,
            answers: [
                { text: "Tester les connaissances", valid: true },
                { text: "Créer des images", valid: false },
                { text: "Programmer un logiciel", valid: false }
            ]
        },

        {
            text: "Quel type de quiz propose plusieurs réponses possibles avec une seule correcte ?",
            correction: "C’est le principe du QCM (questionnaire à choix multiples).",
            is_demo: false,
            answers: [
                { text: "Question ouverte", valid: false },
                { text: "QCM", valid: true },
                { text: "Sondage", valid: false }
            ]
        },

        {
            text: "Quel jeu télévisé français est basé sur un format de quiz de culture générale ?",
            correction: "« Questions pour un champion » est un célèbre jeu de quiz en France.",
            is_demo: false,
            answers: [
                { text: "Fort Boyard", valid: false },
                { text: "Questions pour un champion", valid: true },
                { text: "Koh-Lanta", valid: false }
            ]
        },

        {
            text: "Quel élément est essentiel dans un quiz interactif ?",
            correction: "Les réponses proposées permettent à l’utilisateur d’interagir avec le quiz.",
            is_demo: false,
            answers: [
                { text: "Des réponses", valid: true },
                { text: "Une vidéo", valid: false },
                { text: "Un téléchargement", valid: false }
            ]
        },

        {
            text: "Comment appelle-t-on un quiz en ligne joué en temps réel avec d'autres joueurs ?",
            correction: "On parle souvent de quiz en direct ou multijoueur.",
            is_demo: false,
            answers: [
                { text: "Quiz passif", valid: false },
                { text: "Quiz multijoueur", valid: true },
                { text: "Quiz statique", valid: false }
            ]
        },

        {
            text: "Quel outil en ligne est célèbre pour créer des quiz interactifs en classe ?",
            correction: "Kahoot! est très utilisé dans les écoles pour créer des quiz ludiques.",
            is_demo: false,
            answers: [
                { text: "Photoshop", valid: false },
                { text: "Kahoot!", valid: true },
                { text: "Excel", valid: false }
            ]
        },

        {
            text: "Quel est le principal avantage d’un quiz pour l’apprentissage ?",
            correction: "Les quiz permettent de renforcer la mémorisation de manière active.",
            is_demo: false,
            answers: [
                { text: "Rendre passif", valid: false },
                { text: "Renforcer la mémorisation", valid: true },
                { text: "Supprimer les erreurs", valid: false }
            ]
        },

        {
            text: "Dans un quiz, que signifie « bonne réponse » ?",
            correction: "C’est la réponse correcte à la question posée.",
            is_demo: false,
            answers: [
                { text: "Une réponse aléatoire", valid: false },
                { text: "La réponse correcte", valid: true },
                { text: "La réponse la plus longue", valid: false }
            ]
        },

        {
            text: "Quel type de question demande une réponse libre sans choix proposé ?",
            correction: "C’est une question ouverte.",
            is_demo: false,
            answers: [
                { text: "QCM", valid: false },
                { text: "Question ouverte", valid: true },
                { text: "Vrai/Faux", valid: false }
            ]
        }

    ]

}