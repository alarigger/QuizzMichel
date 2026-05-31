

// ------------------------------
// QUIZ ENGINE - MODE BUZZER
// ------------------------------
const GAME_NAME = "jeopardy"

let selected_option = 0;
let selected_team = 0;
let locked = false;
let VALID = false


var game = new Game()
var quizz = new Quizz()

quizz.load(QUIZZ_DATA)


// game. add sound
var game_sounds = {
    correct:new Audio('assets/correct.mp3'),
    incorrect:new Audio('assets/incorrect.mp3')
}


game.add_state("intro",function(id){
    quizz.restart()

    document.getElementById(id).innerHTML = "";
    addCenteredImage(id,"quizz/demo/splash_screen.png",)

})
game.add_state("menu",function(id){


},function(id){
})

// QUESTION VIEW
game.add_state("question_title",function(id){
    
    document.getElementById(id).innerHTML = "";
    
    if(quizz.is_last_question()){
        game.apply_state("result")
        return
    }
    
    if(VALID){
        game.apply_state("attribution")
        return
    }
    

    // iterate 
    quizz.next_question();
    quizz.next_team();

    const question = quizz.get_current_question()
    const team = quizz.get_current_team()
    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";
    let test = question.is_demo ? "(test)" : ""
    
    card.innerHTML = `
    <h1>Question ${quizz.get_current_question_number()} / ${quizz.get_question_total()} ${test} </h1>
    `;

    document.getElementById(id).appendChild(card);
    
    selected_option = 0;

},function(id){


})

//======================QUESTION========================
game.add_state("jeopardy",function(id) {

    const questions = quizz.get_questions();

    // Categories
    this.categories = [...new Set(
        questions.flatMap(q => q.categories || [])
    )];

    // Point values
    this.values = [...new Set(
        questions.map(q => q.points)
    )].sort((a, b) => a - b);

    // Lookup table
    this.boardData = {};

    questions.forEach(q => {

        (q.categories || []).forEach(category => {

            if (!this.boardData[category]) {
                this.boardData[category] = {};
            }

            this.boardData[category][q.points] = q;
        });
    });

    // Cursor
    this.selectedRow = 0;
    this.selectedCol = 0;

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

        this.categories.forEach(category => {

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

},
function(id) {

    const state = game.states["jeopardy"];

    const cells = document.querySelectorAll(".jeopardy-cell");

    cells.forEach(c => c.classList.remove("selected"));

    const cols = state.categories.length;

    const index =
        state.selectedRow * cols +
        state.selectedCol;

    cells[index]?.classList.add("selected");
});



//======================QUESTION========================
game.add_state("question", function(id) {

    const question = quizz.get_current_question();
    if (question!=undefined){

        const view = new QuestionView(question);
        view.render(id);
    }

    selected_option = 0;
},function(id){

    console.log(`select ${selected_option} `)
    document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
    document.querySelectorAll(".option")[selected_option].classList.add("selected");
})


//======================CORRECTION========================
game.add_state("correction", function(id) {

    const question = quizz.get_current_question();

    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    const chosen = question.options[selected_option];
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

    if (valid_option) {
        const validTitle = document.createElement("h2");
        validTitle.textContent = "Réponse correcte :";
        card.appendChild(validTitle);

        // IMPORTANT: render content properly
        card.appendChild(renderContentList(valid_option.content));
    }

    // CORRECTION (NOW PROPER CONTENT SYSTEM)
    if (question.correction) {

        const correctionTitle = document.createElement("h2");
        correctionTitle.textContent = "Explication :";
        card.appendChild(correctionTitle);
        card.appendChild(renderContentList(question.correction));
    }

    // background
    card.style.backgroundColor = VALID ? "#82e082" : "#ff8b8b";
    card.style.transition = "background-color 0.3s ease";

    const container = document.getElementById(id);
    container.innerHTML = "";
    container.appendChild(card);

    locked = false;
}, function(id){});


//======================SCORE========================
game.add_state("score",function(id){

    const chosen_team = quizz.get_team(selected_team)
    question = quizz.get_current_question();
    if(question.is_demo==false){
        chosen_team.increment_score()
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

},function(id){

})
//======================SCORE========================
game.add_state("attribution",function(id){

    const teams = quizz.get_teams()
    VALID=false

    console.log(teams)
    
    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";
    
    card.innerHTML = `
    <h1>le point est donné à </h1>
        ${teams.map((t, i) =>
        `<div class="team ${i === 0 ? "selected" : ""}" data-i="${i}">
                 Equipe ${t.name}
            </div>`
            ).join("")}
            `;

    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(card);
    
    selected_team = 0;
    
},function(id){
    document.querySelectorAll(".team").forEach(el => el.classList.remove("selected"));
    document.querySelectorAll(".team")[selected_team].classList.add("selected");

})

game.add_state("result",function(id){

    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    const winners = quizz.get_winners()
    if(winners.length>1){
        winner = " Egalité "+[winners].join("  ")
    }else{
        winner = "L' équipe "+winners[0]+" a gagné le quizz !"
    }

   card.innerHTML = `
    <h1>${render_scores_podium(quizz)}</h1>
       <h1>${winner}</h1>

   `;

    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(card);

    locked = false;

},function(id){

})




game.add_state("outro",function(id){

},function(id){

})


game.connect_states("intro","menu")
game.connect_states("menu","question_title")
game.connect_states("question_title","jeopardy")
game.connect_states("jeopardy","question")
game.connect_states("question","correction")
game.connect_states("correction","question_title")
game.connect_states("question_title","jeopardy")
game.connect_states("attribution","score")
// TODO add conditionnal states that go to state A or B 
game.connect_states("score","question_title")
game.connect_states("result","outro")
game.connect_states("outro","intro")

game.apply_state("intro")




let selected_row = 0;
let selected_col = 0;

document.addEventListener("keydown", (e) => {

    if (locked) return;

    const state = game.states[game.current_state];

    // fallback safety
    const rows = state?.rows ?? 1;
    const cols = state?.cols ?? 1;

    if (e.key === "ArrowDown") {
        selected_row = Math.min(selected_row + 1, rows - 1);
        game.update();
    }

    if (e.key === "ArrowUp") {
        selected_row = Math.max(selected_row - 1, 0);
        game.update();
    }

    if (e.key === "ArrowLeft") {
        selected_col = Math.max(selected_col - 1, 0);
        game.update();
    }

    if (e.key === "ArrowRight") {
        selected_col = Math.min(selected_col + 1, cols - 1);
        game.update();
    }

    if (e.key === "Enter") {
        console.log("ENTER");

        game.next_state?.();
    }
});

