

// ------------------------------
// QUIZ ENGINE - MODE BUZZER
// ------------------------------
const GAME_NAME = "jeopardy"

let selected_option = 0;
let selected_team = 0;
let locked = false;
var VALID = false


var game = new Game()
var quizz = new Quizz()

quizz.load(QUIZZ_DATA)


// game. add sound
var game_sounds = {
    correct: new Audio('assets/correct.mp3'),
    incorrect: new Audio('assets/incorrect.mp3')
}


game.add_state("intro", function (id) {
    quizz.restart()

    document.getElementById(id).innerHTML = "";
    addCenteredImage(id, "quizz/demo/splash_screen.png",)

})
game.add_state("menu", function (id) {

}, function (id) {
    game.next_state();
})


//======================QUESTION========================
game.add_state("jeopardy", function (id, state) {

    const questions = quizz.get_questions();

    // Categories
    state.categories = [...new Set(
        questions.flatMap(q => q.categories || [])
    )];

    // Point values
    state.values = [...new Set(
        questions.map(q => q.points)
    )].sort((a, b) => a - b);

    // Lookup table
    state.boardData = {};

    questions.forEach(q => {
        (q.categories || []).forEach(category => {

            if (!state.boardData[category]) {
                state.boardData[category] = {};
            }

            state.boardData[category][q.points] = q;
        });
    });

    state.rows = state.values.length
    state.columns = state.categories.length
    game.reload_grid()

    // Render board
    const board = document.createElement("div");
    board.className = "jeopardy-board";

    board.style.gridTemplateColumns =
        `repeat(${this.categories.length}, 1fr)`;

    // Headers
    this.categories.forEach(category => {

        const header = document.createElement("div");
        header.className = "jeopardy-header";
        header.textContent = category;

        board.appendChild(header);
    });

    // Cells
    this.values.forEach(value => {

        state.categories.forEach(category => {

            const q = this.boardData[category]?.[value];

            const cell = document.createElement("div");
            cell.className = "jeopardy-cell";

            if (q) {
                cell.textContent = value;
                cell.dataset.questionId = q.id;
            } else {
                cell.classList.add("empty");
            }

            board.appendChild(cell);
        });
    });

    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(board);


},function (id, state) {

    const cells = document.querySelectorAll(".jeopardy-cell");

    cells.forEach(c => c.classList.remove("selected"));

    const index = game.get_selected_index();
    console.log(`select ${index}`);

    const selected_cell = cells[index];

    if (selected_cell) {
        selected_cell.classList.add("selected");

        const question_id = selected_cell.dataset.questionId;
        console.log(question_id);

        quizz.select_question(question_id);
    }
},function (id, state) {
    game.next_state();

});



//======================QUESTION========================
game.add_state("question", function (id, state) {
    VALID = false
    const question = quizz.get_current_question();
    if (question != undefined) {
        const view = new QuestionView(question);
        view.render(id);
    }

    state.rows = question.options.length
    state.columns = 1
    game.reload_grid()

}, function (id) {
    game.cursor_position.x = 0
    const index = game.get_selected_index()
    console.log(`select ${index} `)
    document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
    document.querySelectorAll(".option")[index].classList.add("selected");
},function (id, state) {
    game.next_state();
    
});



//======================CORRECTION========================
game.add_state("correction", function (id) {

    const question = quizz.get_current_question();

    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    const chosen = question.options[game.cursor_position.y];
    VALID = chosen.valid === true;

    // sound
    if (VALID) {
        game_sounds.correct.play();
    } else {
        game_sounds.incorrect.play();
    }

    const verdict = document.createElement("h1");
    verdict.textContent = VALID ? "Bonne réponse !" : "Mauvaise réponse !";

    card.appendChild(verdict);

    // VALID OPTION (USE YOUR SYSTEM)
    const valid_option = question.get_valid_option();

    if (!VALID) {
        if (valid_option) {
            const validTitle = document.createElement("h2");
            validTitle.textContent = "Incorrect ! ";
            card.appendChild(validTitle);

            if (question.correction) {
                const correctionTitle = document.createElement("h2");
                correctionTitle.textContent = "Bonne réponse ";
                card.appendChild(correctionTitle);
                card.appendChild(renderContentList(question.correction));
            }
        }
    }

    // background
    card.style.backgroundColor = VALID ? "#82e082" : "#ff8b8b";
    card.style.transition = "background-color 0.3s ease";

    const container = document.getElementById(id);
    container.innerHTML = "";
    container.appendChild(card);

    locked = false;
}, function (id) { 

},function (id, state) {
    if(VALID){
        game.apply_state("attribution");
    }else{
        game.apply_state("score");
    }
});
;


//======================SCORE========================
game.add_state("score", function (id) {

    const chosen_team = quizz.get_current_team()
    var question = quizz.get_current_question();
    var points = question.points
    if (VALID == true && question.is_demo == false) {
        chosen_team.increment_score(points)
    }

    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    card.innerHTML = `
        <h1>${render_scores_podium(quizz)}</h1>
    `;

    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(card);

    locked = false;

}, function (id) {

},function (id, state) {
    game.next_state();
    
});

//======================ATTRIBUTION========================
game.add_state("attribution", function (id, state) {

    console.log("VALID "+VALID)

    const teams = quizz.get_teams()

    state.rows = teams.length
    state.columns = 1
    game.reload_grid()

    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    card.innerHTML = `
    <h1>Le point est donné à</h1>
    ${teams.map((t, i) =>
        `<div class="team ${i === 0 ? "selected" : ""}"
              data-i="${i}"
              data-team-id="${t.id}">
            Equipe ${t.name}
        </div>`
    ).join("")}
    `;

    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(card);

}, function (id) {
    const index = game.get_selected_index();
    const teams = document.querySelectorAll(".team");
    teams.forEach(el => el.classList.remove("selected"));
    const selectedTeam = teams[index];

    if (selectedTeam) {
        selectedTeam.classList.add("selected");
        const teamId = selectedTeam.dataset.teamId; // or Number(...)
        quizz.select_team(teamId);
    }
},function (id, state) {
    game.next_state();
    
});


game.add_state("result", function (id) {

    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    const winners = quizz.get_winners()
    if (winners.length > 1) {
        winner = " Egalité " + [winners].join("  ")
    } else {
        winner = "L' équipe " + winners[0] + " a gagné le quizz !"
    }

    card.innerHTML = `
    <h1>${render_scores_podium(quizz)}</h1>
       <h1>${winner}</h1>

   `;

    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(card);

    locked = false;

}, function (id) {

},function (id, state) {
    
    
});





game.add_state("outro", function (id) {

}, function (id) {

},function (id, state) {
    
    
});



game.connect_states("intro", "menu")
game.connect_states("menu", "jeopardy")
game.connect_states("jeopardy", "question")
game.connect_states("question", "correction")
game.connect_states("correction", "attribution")
game.connect_states("attribution", "score")
// TODO add conditionnal states that go to state A or B 
game.connect_states("score", "jeopardy")
game.connect_states("result", "outro")
game.connect_states("outro", "intro")

game.apply_state("intro")




let selected_row = 0;
let selected_col = 0;





document.addEventListener("keydown", (e) => {

    if (locked) return;


    // fallback safety
    const rows = game.get_rows();
    const cols = game.get_columns();

    if (e.key === "ArrowDown") {
        game.cursor_down()
        game.update();
    }

    if (e.key === "ArrowUp") {
        game.cursor_up()
        game.update();
    }

    if (e.key === "ArrowLeft") {
        game.cursor_left()
        game.update();
    }

    if (e.key === "ArrowRight") {
        game.cursor_rigth()
        game.update();
    }

    if (e.key === "Enter") {
        console.log("ENTER");
        game.cursor_action()
        game.validate()
        
    }

    console.log("------------------------------------")
    console.log(game.cursor_position)
    console.log("------------------------------------")
});
