function Jeopardy(quizz, game) {

    this.quizz = quizz;
    this.game = game;

    this.state = {
        categories: [],
        values: [],
        boardData: {},
        rows: 0,
        columns: 0
    };

    // --------------------------
    // BUILD MODEL
    // --------------------------
    this.build = function () {

        const questions = this.quizz.get_questions();

        // Categories
        this.state.categories = [...new Set(
            questions.flatMap(q => q.categories || [])
        )];

        // Values
        this.state.values = [...new Set(
            questions.map(q => q.points)
        )].sort((a, b) => a - b);

        // Lookup table
        this.state.boardData = {};

        questions.forEach(q => {
            (q.categories || []).forEach(category => {

                if (!this.state.boardData[category]) {
                    this.state.boardData[category] = {};
                }

                this.state.boardData[category][q.points] = q;
            });
        });

        this.state.rows = this.state.values.length;
        this.state.columns = this.state.categories.length;

        return this.state;
    };

    // --------------------------
    // RENDER BOARD
    // --------------------------
    this.render = function (containerId) {

        const board = document.createElement("div");
        board.className = "jeopardy-board";
        board.style.gridTemplateColumns =
            `repeat(${this.state.categories.length}, 1fr)`;

        // Headers
        this.state.categories.forEach(category => {

            const header = document.createElement("div");
            header.className = "jeopardy-header";
            header.textContent =
                this.quizz.get_category(category)?.title || category;

            board.appendChild(header);
        });

        // Cells
        this.state.values.forEach(value => {

            this.state.categories.forEach(category => {

                const q = this.state.boardData[category]?.[value];

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

        const container = document.getElementById(containerId);
        container.innerHTML = "";
        container.appendChild(board);

        // animation
        const items = board.querySelectorAll(
            ".jeopardy-header, .jeopardy-cell"
        );

        items.forEach((item, i) => {
            item.style.animationDelay = `${i * 30}ms`;
            item.classList.add("jeopardy-item-show");
        });

        this.board = board;

        return board;
    };

    // --------------------------
    // UPDATE SELECTION
    // --------------------------
    this.updateSelection = function () {

        const cells = this.board.querySelectorAll(".jeopardy-cell");

        cells.forEach(c => c.classList.remove("selected"));

        const index = this.game.get_selected_index();
        const selected_cell = cells[index];

        if (
            selected_cell &&
            !selected_cell.classList.contains("empty") &&
            !selected_cell.classList.contains("burned")
        ) {
            selected_cell.classList.add("selected");

            const question_id = selected_cell.dataset.questionId;
            this.quizz.select_question(question_id);
        }
    };

    // --------------------------
    // HANDLE CONFIRM (ENTER)
    // --------------------------
    this.confirm = function () {

        const cells = this.board.querySelectorAll(".jeopardy-cell");
        const index = this.game.get_selected_index();
        const selected_cell = cells[index];

        if (!selected_cell) return;

        if (
            selected_cell.classList.contains("empty") ||
            selected_cell.classList.contains("burned")
        ) return;

        this.quizz.sounds.play_random("select");

        this.game.lock();

        const popup = this.quizz.backgrounds.get_background("popup");

        if (popup !== undefined) {
            const popup_image = popup.get_random();
            image_popup(popup_image, function () {});
        }

        const question_id = selected_cell.dataset.questionId;
        const question = this.quizz.select_question(question_id);

        const category = this.quizz.get_question_category(question);

        if (category && category.name !== "BO") {
            play_point_music(question);
        }

        this.game.unlock();
        this.game.next_state();
    };
}