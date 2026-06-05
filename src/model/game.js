



function Game() {

    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.data_type ="game"
    this.name = "GAME-"+this.id
    this.transition_time = 100
    this.slides = new AnimatedSlideManager()
    this.function_table = []
    this.state_table = []
    this.current_state = null
    this.state_connections = []
    this.cursor_position = { x: 0, y: 0 }
    this.grid = { columns: 0, rows: 0 }
    this.locked = false

    /**
     * 
     * @param {string} state_name 
     * @param {function} _render_function 
     * @param {function} _update_function 
     * @returns {Game}
     */
    this.add_state = function (state_name, _render_function, _update_function, _validate_function) {
        console.log(state_name)
        console.log(_render_function)
        console.log(_update_function)
        console.log(_validate_function)
        var state = new GameState(state_name, _render_function, _update_function, _validate_function)

        this.state_table[state_name] = state
        this.slides.register(state_name, state_name)
        return this
    }
    this._apply_render_state = function (state) {

        console.log("RENDER")
        // show the state div 
        this.slides.show(state.name)

        // Check if the render function exists before calling it
        if (typeof state.render === "function") {
            state.render();
        }

        // this become the current game state ! 
        console.log("CURRENT STATE " + state.name)
        return this;
    }
    this._apply_conditionnal_state = function (state) {

        // Check if the render function exists before calling it
        if (typeof state.decide === "function") {
            var next_state = state.decide();
            this.apply_state(next_state)
        }

    }
    this.apply_state = function (name) {

        console.log("APPLY " + name)
        // Check if the current state exists in the state table
        if (this.state_table[name] === undefined) {
            console.log("state " + name + " not found")
            return this;
        }

        var state = this.state_table[name];
        this.current_state = state.name

        if (state.type == "render") {
            return this._apply_render_state(state)
        }
        if (state.type == "condition") {
            this.current_state = name
            return this._apply_conditionnal_state(state)
        }

        return this;
    }
    this.validate = function () {

        console.log("VALIDATE")
        // Check if the current state exists in the state table
        if (this.state_table[this.current_state] === undefined) {
            console.log("state not found")
            return this;
        }

        var state = this.state_table[this.current_state];
        console.log(state)


        if (state.validate === undefined) {
            console.log("update function is undefined")
            return this
        }

        // Check if the update function exists before calling it
        if (typeof state.validate !== "function") {
            console.log("no update function found")
            return this
        }
        state.validate();

        return this;
    }
    this.update = function () {

        console.log("UPDATE")
        // Check if the current state exists in the state table
        if (this.state_table[this.current_state] === undefined) {
            console.log("state not found")
            return this;
        }

        var state = this.state_table[this.current_state];

        console.log(state)

        if (state.update === undefined) {
            console.log("update function is undefined")
            return this
        }

        // Check if the update function exists before calling it
        if (typeof state.update !== "function") {
            console.log("no update function found")
            return this
        }
        state.update();

        return this;
    };
    this.connect_states = function (state_A, state_B) {
        const connection = new GameStateConnection(state_A, state_B)
        this.state_connections[state_A] = connection
    }
    this.next_state = function () {
        console.log("NEXT")
        const connection = this.state_connections[this.current_state]
        if (connection == undefined) {
            return this
        }
        const next_state = connection.next()
        this.apply_state(connection.next())

    }
    this.get_current_state = function () {
        return this.state_table[this.current_state]
    }
    this.get_rows = function () {
        const state = this.get_current_state();
        const rows = state?.rows ?? 1;
        return rows
    }
    this.get_columns = function () {
        const state = this.get_current_state();
        const cols = state?.columns ?? 1;
        return cols
    }
    this.reload_grid = function () {
        const state = this.get_current_state();
        const cols = state?.columns ?? 1;
        const rows = state?.rows ?? 1;
        this.grid = {
            columns: cols,
            rows: rows
        }
        return this
    }
    this.cursor_up = function () {
        this.cursor_position.y = Math.max(this.cursor_position.y - 1, 0);
    }
    this.cursor_down = function () {
        const rows = this.grid.rows
        this.cursor_position.y = Math.min(this.cursor_position.y + 1, rows - 1);
    }
    this.cursor_left = function () {
        this.cursor_position.x = Math.max(this.cursor_position.x - 1, 0);
    }
    this.cursor_rigth = function () {
        const cols = this.grid.columns
        this.cursor_position.x = Math.min(this.cursor_position.x + 1, cols - 1);
    }
    this.cursor_action = function () {

    }
    this.get_selected_index = function () {
        const cols = this.grid.columns
        return this.cursor_position.y * cols + this.cursor_position.x;
    }
    this.lock = function () {
        this.locked = true
    }
    this.unlock = function () {
        this.locked = false
    }


}
window.Game = Game

function GameConditionnalState(_name, _decide_func, _state_true, _state_false) {
    this.type = "condition"
    this.name = _name
    this._decide = _decide_func
    this.state_true = _state_true
    this.state_false = _state_false
    this.decide = function () {
        if (this._decide()) {
            return this._state_true
        }
        return this._state_false
    }
}
window.GameState = GameState


function GameStateConnection(_state_A, _state_B) {
    this._state_A = _state_A
    this._state_B = _state_B
    this._condtion = true
    this.next = function () {
        if (this._condtion) {
            return this._state_B
        }
    }
}
window.GameStateConnection = GameStateConnection







/**
 * 
 * @param {string} _name 
 * @param {function} _render_func 
 * @param {function} _update_func 
 * @param {function} _validate_func 
 */
function GameState(_name, _render_func, _update_func, _validate_func) {
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.type = "render"
    this.name = _name
    this.rows = null
    this.columns = null
    this._render = _render_func || function (id, state) { }
    this._update = _update_func || function (id, state) { }
    this._validate = _validate_func || function (id, state) { game.next_state(); }
    this.last_cursor_position = { x: 0, y: 0 }
    this._get_state_element = function () {
        return this.name
    }
    this.render = function () {
        var state_element = this._get_state_element()
        this._render(state_element, this)
    }
    this.update = function () {
        var state_element = this._get_state_element()
        this._update(state_element, this)
    }
    this.validate = function () {
        var state_element = this._get_state_element()
        this._validate(state_element, this)
    }
    this.load_cursor_position = function () {
        this.last_cursor_position.x = Math.max(
            0,
            Math.min(this.last_cursor_position.x, this.columns - 1)
        );
        this.last_cursor_position.y = Math.max(
            0,
            Math.min(this.last_cursor_position.y, this.rows - 1)
        );
        game.cursor.x = this.last_cursor_position.x;
        game.cursor.y = this.last_cursor_position.y;
    }
    this.save_cursor_position = function () {
        this.last_cursor_position = {
            x: game.cursor.x,
            y: game.cursor.y
        };
    }
}
window.GameState = GameState


