

// ------------------------------
// QUIZ ENGINE - MODE BUZZER
// ------------------------------
const GAME_NAME = "otaquizz"

let selected_option = 0;
let selected_team = 0;
var VALID = false


var game = new Game()
var quizz = new Quizz()
game.unlock()

quizz.load(QUIZZ_DATA)


// game. add sound
var game_sounds = {
    correct: new Audio('assets/correct.mp3'),
    incorrect: new Audio('assets/incorrect.mp3')
}


game.add_state("intro", function (id) {
    quizz.restart()

    reset_background()
    document.getElementById(id).innerHTML = "";
    addCenteredImage(id, "quizz/otaquizz/splash_screen.png",)

})
game.add_state("menu", function (id) {

}, function (id) {
    game.next_state();
})


//======================QUESTION========================
game.add_state("jeopardy", function (id, state) {

    reset_background()

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
    board.style.gridTemplateColumns =`repeat(${this.categories.length}, 1fr)`;

    // Headers
    this.categories.forEach(category => {
        const header = document.createElement("div");
        header.className = "jeopardy-header";
        header.textContent = quizz.get_category(category)?.title || category;
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

                if (q.is_burned) {
                    cell.classList.add("burned");
                    cell.dataset.burned = "true";
                }
            } else {
                cell.classList.add("empty");
            }

            board.appendChild(cell);
        });
    });

    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(board);
    const items = board.querySelectorAll(
        ".jeopardy-header, .jeopardy-cell"
    );

    items.forEach((item, i) => {
        item.style.animationDelay = `${i * 30}ms`;
        item.classList.add("jeopardy-item-show");
    });

    const cells = document.querySelectorAll(".jeopardy-cell");
    cells.forEach(c => c.classList.remove("selected"));
    const index = game.get_selected_index();
    const selected_cell = cells[index];
    if (
        selected_cell &&
        !selected_cell.classList.contains("empty") &&
        !selected_cell.classList.contains("burned")
    ) {
        selected_cell.classList.add("selected");
        const question_id = selected_cell.dataset.questionId;
        quizz.select_question(question_id);
    }


}, function (id, state) {

    const cells = document.querySelectorAll(".jeopardy-cell");
    cells.forEach(c => c.classList.remove("selected"));
    const index = game.get_selected_index();
    const selected_cell = cells[index];
    if (selected_cell){
        selected_cell.classList.add("selected");
    }

}, function (id, state) {
    
    const cells = document.querySelectorAll(".jeopardy-cell");
    const index = game.get_selected_index();
    const selected_cell = cells[index];
    if (selected_cell){
        if(
            !selected_cell.classList.contains("empty") &&
            !selected_cell.classList.contains("burned")
        ){
            const question_id = selected_cell.dataset.questionId;
            quizz.select_question(question_id);
            game.next_state();
        }
    }

});



//======================QUESTION========================
game.add_state("question", function (id, state) {


    VALID = false
    const question = quizz.get_current_question();

    const category = quizz.get_question_category(question)

    console.log(category)
    console.log(category.get_background_image())

    set_background_image(category.get_background_image().asset)

    if (question != undefined) {
        const view = new QuestionView(question);
        view.render(id);

    }

    state.rows = question.options.length
    state.columns = 1
    game.reload_grid()
    game.cursor_position.x = 0
    game.cursor_position.y = 0
    const index = game.get_selected_index()
    console.log(`select ${index} `)
    document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
    document.querySelectorAll(".option")[index].classList.add("selected");

}, function (id) {

    game.cursor_position.x = 0
    const index = game.get_selected_index()
    console.log(`select ${index} `)
    document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
    document.querySelectorAll(".option")[index].classList.add("selected");

}, function (id, state) {
    const question = quizz.get_current_question();
    if(question){
        question.try()
    }
    game.next_state();

});



//======================CORRECTION========================
game.add_state("correction", function (id) {

    const question = quizz.get_current_question();
    const card = document.createElement("div");
    card.className = "card correction";
    card.id = "card";
    const chosen = question.options[game.get_selected_index()];
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

    if (VALID) {
        question.burn()
        if (question.correction) {
            card.appendChild(renderContentList(question.correction));
        }
    
    }

    // background
    card.style.backgroundColor = VALID ? "#82e082" : "#ff8b8b";
    card.style.transition = "background-color 0.3s ease";
    const container = document.getElementById(id);
    container.innerHTML = "";
    container.appendChild(card);

    game.unlock()

}, function (id) {

}, function (id, state) {
    const max_retry = 2
    const question = quizz.get_current_question();
    console.log("ATEMPS")
    console.log(question.atempts)
    if (VALID) {
        game.apply_state("attribution");
    } else {
        if(question.atempts <= max_retry){
            game.apply_state("question");
        }else{
            question.burn()
            game.apply_state("score");
        }
        
    }
});
;




//======================ATTRIBUTION========================
game.add_state("attribution", function (id, state) {

    reset_background()

    console.log("VALID " + VALID)

    const teams = quizz.get_teams()

    state.rows = teams.length
    state.columns = 1
    game.reload_grid()

    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    card.innerHTML = `
    <h1>${dancingLetter("Le point est donné à")}</h1>
    ${teams.map((t, i) =>
        `<div class="team ${i === 0 ? "selected" : ""} "
              data-i="${i}"
              data-team-id="${t.id}">
            ${dancingLetter(t.name)}
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
        selectedTeam.classList.add("selected"); 1
    }
}, function (id, state) {
    const index = game.get_selected_index();
    const teams = document.querySelectorAll(".team");
    teams.forEach(el => el.classList.remove("selected"));
    const selectedTeam = teams[index];
    if (selectedTeam) {
        const teamId = selectedTeam.dataset.teamId; // or Number(...)
        quizz.select_team(teamId);
    }
    if(quizz.all_burned()){
        game.apply_state("result");
    }else{
        game.next_state();
    }
});



//======================SCORE========================
game.add_state("score", function (id, state) {

    reset_background()
    game.lock()

    const chosen_team = quizz.get_current_team()
    const question = quizz.get_current_question();
    var points = question.points
    if (VALID == true && question.is_demo == false) {
        chosen_team.increment_score(points)
    }
    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";
    card.innerHTML = render_scores_podium(quizz,"score",[chosen_team.name]);
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(card);

    game.unlock()

}, function (id, state) {

}, function (id, state) {

    game.next_state();

});

//======================RESULT========================
game.add_state("result", function (id, state) {

    reset_background()
    game.lock()
    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";
    var winner_team_names = quizz.get_winners()

    const winner_text = winner_team_names.length > 1
        ? `Égalité entre ${winner_team_names.join(" & ")} !`
        : `Team ${winner_team_names[0]} remporte le quizz !`;

    card.innerHTML = `
        <div class="winner-overlay">
            ${dancingLetter(winner_text)}
        </div>

        <div class="winner-card">
            ${render_scores_podium(quizz, "final", winner_team_names, 15)}
        </div>
    `;
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(card);



    spawn_confetti()

    setRandomBg()

    game.unlock()

}, function (id, state) {

}, function (id, state) {

});


//======================OUTRO========================
game.add_state("outro", function (id) {

}, function (id, state) {

}, function (id, state) {

});

// Connections 
game.connect_states("intro", "menu")
game.connect_states("menu", "jeopardy")
game.connect_states("jeopardy", "question")
game.connect_states("question", "correction")
game.connect_states("correction", "attribution")
game.connect_states("attribution", "score")
game.connect_states("score", "jeopardy")
game.connect_states("result", "outro")
game.connect_states("outro", "intro")
game.apply_state("intro")

document.addEventListener("keydown", (e) => {

    if (game.locked) return;


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

});
