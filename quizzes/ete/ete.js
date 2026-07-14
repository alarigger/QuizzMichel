

// ------------------------------
// QUIZ ENGINE - MODE BUZZER
// ------------------------------

const QUIZZ_NAME = "billy"
//const QUIIZZ_DATA = await fetch("/quizzes/"+QUIZZ_NAME+"/data.json").then(r => r.json());

/* loading game data */
var quizz = new Quizz(name)
quizz.load(QUIZZ_DATA,"entity/name")

var game = new Game()
game.unlock()

// question answered correctly 
quizz.valid = false

function play_point_music(question) {
    quizz.sounds.stop_music();
    const music_name =
        [
            { name: "music_easy", points: [10] },
            { name: "music_medium", points: [20,30] },
            { name: "music_hard", points: [40,50] },
            { name: "music_epic", points: [60] }
        ].find(m => m.points.includes(question.points))?.name ?? "music_easy";

    quizz.sounds.play_music(music_name);
}

function stopAllSounds() {
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

/*======================INTRO===========================*/
game.add_state("intro", function (id) {
    quizz.restart()
    reset_background()
    document.getElementById(id).innerHTML = "";
    addCenteredImage(id, quizz.backgrounds.get_background("intro").get_image().src)
}, function (id) {

}, function (id) {
    game.next_state();
})
game.add_state("menu", function (id) {

}, function (id) {


}, function (id) {
    game.next_state();
})


//======================QUESTION========================
game.add_state("jeopardy", function (id, state) {

    reset_background()
    quizz.sounds.stop_music()
    quizz.sounds.play_music("music_grid")

    addCenteredImage(id, quizz.backgrounds.get_background("jeopardy").get_image())

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
    board.style.gridTemplateColumns = `repeat(${this.categories.length}, 1fr)`;

    // Headers
    this.categories.forEach(category => {
        const header = document.createElement("div");
        header.className = "jeopardy-header";
        header.textContent = quizz.get_category(category)?.get_title() || category;
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

    quizz.sounds.play("move")
    const cells = document.querySelectorAll(".jeopardy-cell");
    cells.forEach(c => c.classList.remove("selected"));
    const index = game.get_selected_index();
    const selected_cell = cells[index];
    if (selected_cell) {
        const question_id = selected_cell.dataset.questionId;
        const question = quizz.select_question(question_id);
        console.log(question.name)
        selected_cell.classList.add("selected");
        console.log()
    }

}, function (id, state) {

    const cells = document.querySelectorAll(".jeopardy-cell");
    const index = game.get_selected_index();
    const selected_cell = cells[index];

    if (selected_cell) {
        if (
            !selected_cell.classList.contains("empty") &&
            !selected_cell.classList.contains("burned")
        ) {
            quizz.sounds.play_random("select")
            
            game.lock()
            const popup = quizz.backgrounds.get_background("popup")
            if(popup!==undefined){
                popup_image = popup.get_random()
                image_popup(popup_image,function(){});
            }

            const question_id = selected_cell.dataset.questionId;
            const question = quizz.select_question(question_id);
            const category = quizz.get_question_category(question)
            if (category!=undefined){
                if (category.name != "BLIND") {
                    play_point_music(question)
                }
            }
            game.unlock()
            game.next_state();

        }
    }

});



//======================QUESTION========================
game.add_state("question", function (id, state) {
    quizz.valid = false
    const question = quizz.get_current_question();
    const category = quizz.get_question_category(question)
    var cat_bg = undefined
    if (category!=undefined){
        cat_bg = category.get_background()
        if(category.name =="BLIND"){
            stopAllSounds()
        }
    }
    var background = question.get_background_image() || cat_bg
    if (background) {
        set_background_image(background.asset)
    }

    if (question != undefined) {
        const view = new QuestionView(question);
        view.render(id);
        state.current_view = view
        if(question.name.indexOf("BLIND")!=-1){
            state.current_view.startSound()
        }

    }


    state.rows = question.options.length
    state.columns = 1
    game.reload_grid()
    game.cursor_position.x = 0
    game.cursor_position.y = 0
    const index = game.get_selected_index()
    document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
    document.querySelectorAll(".option")[index].classList.add("selected");

}, function (id) {
    quizz.sounds.play("option")
    game.cursor_position.x = 0
    const index = game.get_selected_index()
    document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
    document.querySelectorAll(".option")[index].classList.add("selected");

}, function (id, state) {
    const question = quizz.get_current_question();
    stopAllSounds()
    if (question) {
        question.try()
    }
     state.current_view = null
    game.next_state();

});



//======================CORRECTION========================
game.add_state("correction", function (id) {

    quizz.sounds.pause_music()

    const question = quizz.get_current_question();
    const card = document.createElement("div");
    card.className = "card correction";
    card.id = "card";
    const chosen = question.options[game.get_selected_index()];
    quizz.valid = chosen.valid === true;
    // sound
    if (quizz.valid) {
        quizz.sounds.play_random("correct")
    } else {
        quizz.sounds.play_random("incorrect")
    }

    const verdict = document.createElement("h1");
    verdict.textContent = quizz.valid ? "Bonne réponse !" : "Mauvaise réponse !";
    card.appendChild(verdict);

    const popup = quizz.backgrounds.get_background("popup")
    if(popup!==undefined){
        popup_image = popup.get_random()
        image_popup(popup_image,function(){});
    }
    question.burn()
    if (question.correction) {
        card.appendChild(renderContentList(question.correction));
        card.appendChild(renderOptionSimple(question.get_valid_option(),1));
    }


    // background
    card.style.backgroundColor = quizz.valid ? "#82e082" : "#ff8b8b";
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
    quizz.sounds.resume_music()
    if (quizz.valid) {
        game.apply_state("attribution");
    } else {
        question.burn()
        if(quizz.all_burned()){
            game.apply_state("result")
        }else{
            game.apply_state("score");
        }
        
    }
});
;




//======================ATTRIBUTION========================
game.add_state("attribution", function (id, state) {

    reset_background()
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
    quizz.sounds.play("move")
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
    quizz.sounds.play("attribution")
    if (selectedTeam) {
        const teamId = selectedTeam.dataset.teamId; // or Number(...)
        const chosen_team = quizz.select_team(teamId);
        const question = quizz.get_current_question();
        var points = question.points
        if (quizz.valid == true && question.is_demo == false) {
            chosen_team.increment_score(points)
        }
    }
    if (quizz.all_burned()) {
        game.apply_state("result");
    } else {
        game.next_state();
    }
});



//======================SCORE========================
game.add_state("score", function (id, state) {

    reset_background()
    game.lock()

    const chosen_team = quizz.get_current_team()
    if(chosen_team!==undefined){

        const card = document.createElement("div");
        card.className = "card";
        card.id = "card";
        card.innerHTML = render_scores_podium(quizz, "score", [chosen_team.name]);
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).appendChild(card);
    }


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

    quizz.sounds.play_music("final")
    var final_background = quizz.backgrounds.get_background("result")
    if(final_background!=undefined){
        console.log(final_background)
        set_background_image(final_background.get_image())
    }

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
    game.unlock()

}, function (id, state) {
    quizz.sounds.play_random("waaw")
    spawn_confetti()
}, function (id, state) {
    game.next_state();
});


//======================OUTRO========================
game.add_state("outro", function (id) {
    quizz.restart()
    quizz.sounds.play_music("music_outro")
    reset_background()
    document.getElementById(id).innerHTML = "";
    addCenteredImage(id, "quizz/otaquizz/otaquizz.jpg")

}, function (id, state) {
    quizz.sounds.play_random("waaw")
    spawn_candles()
}, function (id, state) {
    game.next_state();
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
