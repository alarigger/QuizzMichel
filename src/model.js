
/**
 * 
 * @param {string} _name 
 * @param {function} _render_func 
 * @param {function} _update_func 
 * @param {function} _validate_func 
 */
function GameState(_name, _render_func, _update_func,_validate_func) {
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.type = "render"
    this.name = _name
    this.rows = null
    this.columns = null
    this._render = _render_func || function(id,state){ }
    this._update = _update_func || function(id,state){}
    this._validate = _validate_func || function(id,state){game.next_state();}
    this.last_cursor_position = {x:0,y:0}
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

function Game() {
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
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
    this.add_state = function (state_name, _render_function, _update_function,_validate_function) {
        console.log(state_name)
        console.log(_render_function)
        console.log(_update_function)
        console.log(_validate_function)
        var state = new GameState(state_name, _render_function, _update_function,_validate_function)

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

        console.log("APPLY "+name)
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
    this.lock = function(){
        this.locked = true
    }    
    this.unlock = function(){
        this.locked = false
    }

}
window.Game = Game

/**
 * 
 * @param {string} type 
 * @param {*} value 
 */
function QuestionContent(type, value) {
    this.type = type;
    this.value = value;
    this.asset = null;
    this.getPath = function () {
        const folders = {
            image: "images/",
            video: "videos/",
            sound: "sounds/"
        };

        return (folders[this.type] || "") + this.value;
    };

    this.preload = function () {

        if (this.type === "image") {
            this.asset = new Image();
            this.asset.src = this.getPath();
        }

        if (this.type === "video") {
            this.asset = document.createElement("video");
            this.asset.src = this.getPath();
            this.asset.preload = "auto";
        }

        if (this.type === "sound") {
            this.asset = new Audio();
            this.asset.src = this.getPath();
            this.asset.preload = "auto";
        }
    };
}


/**
 * 
 * @param {QuestionContent} content 
 * @param {bool} valid 
 */
function QuestionOption(content, valid) {
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.content = content;
    this.valid = valid;
    this.selectable = true;
    this.isValid = function () {
        return this.valid === true;
    };
    this.get_content = function () {
        return this.content.value
    }
}


/**
 * 
 * @param {string} name 
 */
function QuestionCategory(name) {
    this.name = name
}


function QuestionFactory() {

    /**
     * 
     * @param {Object} data 
     * @returns {Question}
     */
    this.create = function (data) {

        const quest = new Question();
        quest.name = data.name || quest.id
        quest.content = this._parse_content(data.content);
        quest.points = data.points || 1;
        quest.categories = data.categories || [];
        quest.options = data.options.map(option => {
            const content = this._parse_content(option.content);
            return new QuestionOption(content, option.valid);
        });
        quest.correction = this._parse_content(data.correction);
        quest.is_demo = data.is_demo || false;

        return quest;
    };

    /**
     * 
     * @param {Object} content_data 
     * @returns {QuestionContent[]}
     */
    this._parse_content = function (content_data) {

        // 1) STRING → single text node array
        if (typeof content_data === "string") {
            return [new QuestionContent("text", content_data)];
        }

        // 2) ARRAY → normalize each item
        if (Array.isArray(content_data)) {

            const result = [];

            content_data.forEach(item => {
                result.push(...this._parse_content(item));
            });

            return result;
        }

        // 3) OBJECT → single content block
        if (content_data && typeof content_data === "object") {

            if (content_data.type && content_data.value) {
                return [new QuestionContent(content_data.type, content_data.value)];
            }

            // legacy flexible format support (optional but useful)
            if (content_data.text) {
                return [new QuestionContent("text", content_data.text)];
            }

            if (content_data.image) {
                return [new QuestionContent("image", content_data.image)];
            }

            if (content_data.video) {
                return [new QuestionContent("video", content_data.video)];
            }

            if (content_data.sound) {
                return [new QuestionContent("sound", content_data.sound)];
            }
        }

        // 4) fallback safe output (never break UI)
        console.warn("Unknown content format:", content_data);
        return [];
    };
}



function Question() {
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.name = ""
    this.content = null
    this.options = []
    this.correction = null
    this.categories = []
    this.points = []
    this.atempts = 0
    this.is_burned = false
    this.is_demo = false
    this.get_valid_option = function () {
        for (var a in this.options) {
            if (this.options[a].valid) {
                return this.options[a].value
            }
        }
    }
    this.try = function(){
        this.atempts+=1
        return this
    }
    /**
     * 
     * @returns {QuestionContent}
     */
    this.get_content = function () {
        return this.content.value
    }
    this.burn = function(){
        this.is_burned = true
        return this
    }
}

function QuestionManager() {
    this.current_index = -1
    this.limit = undefined
    this._factory = new QuestionFactory()
    this.questions = []

    /**
     * @param {Object[]} _list
     */
    this.load = function (_list) {
        for (var q in _list) {
            const qdata = _list[q]
            var nquest = this._factory.create(qdata)
            this._preload_question_data(nquest)
            this.questions.push(nquest)
        }
        this.limit = this.questions.length
        return this
    }

    /**
     * @param {Question} question
     */
    this._preload_question_data = function (question) {
        this.preload_content(question.content);
        this.preload_content(question.correction);
        question.options.forEach(option => {
            this.preload_content(option.content);
        });
    };

    /**
     * @param {Question} question
     * @param {QuestionContent} content
     * @returns {string}
     */
    this._resolve_question_resource_path = function (question,content) {
        const root = "quizz" 
        const game_name =  GAME_NAME || "default"
        const question_name = question.name || "all"
        const content_type = content.type || "default"
        var path = []
        path.push(root)
        path.push(game_name)
        path.push(question_name)
        path.push(content_type)
        return path.join("/")
    }


    /**
     * 
     * @returns {bool}
     */
    function isUrl(value) {
        return /^https?:\/\//i.test(value);
    }

    this.preload_content = function (content,question) {

        if (!content) return;

        
        // ARRAY SUPPORT
        if (Array.isArray(content)) {
            content.forEach(c => this.preload_content(c));
            return;
        }
        
        if (!content.type) return;
        
        switch (content.type) {
            
            case "image": {

                var game_folder = this._resolve_question_resource_path(question,content);

                const src = isUrl(content.value)
                    ? content.value
                    : `${game_folder}/images/${content.value}`;

                content.asset = new Image();
                content.asset.src = src;
                break;
            }

            case "video": {

                var game_folder = this._resolve_question_resource_path(question,content);

                const src = isUrl(content.value)
                    ? content.value
                    : `${game_folder}/videos/${content.value}`;

                content.asset = document.createElement("video");
                content.asset.preload = "auto";
                content.asset.src = src;
                break;
            }

            case "audio": {

                var game_folder = this._resolve_question_resource_path(question,content);

                const src = isUrl(content.value)
                    ? content.value
                    : `${game_folder}/audio/${content.value}`;

                content.asset = new Audio();
                content.asset.preload = "auto";
                content.asset.src = src;
                break;
            }
        }
        return this
    };

    /**
     * @param {int} _int 
     */
    this.set_limit = function (_int) {
        if (_int > this.questions.length) {
            this.limit = this.questions.length
        }
        this.limit = _int
        return this
    }

    this.restart = function () {
        this.current_index = -1
        return this.current_index
    }
    /**
     * 
     * @returns {Question}
     */
    this.next = function () {
        if (this.current_index < this.limit - 1) {
            this.current_index += 1
            return this.questions[this.current_index]
        }
        this.current_index = 0
        return this.questions[this.current_index]
    }
    /**
     * 
     * @returns {bool}
     */
    this.is_last = function () {
        return this.current_index == this.limit - 1
    }    
    /**
     * 
     * @returns {bool}
     */
    this.all_burned = function () {
        var burned = 0
        for(var q = 0 ; q < this.questions.length ; q++){
            if(this.questions[q].is_burned===true){
                burned+=1
            }
        }
        if(burned>=this.limit){
            return true
        }
        if(burned==this.questions.length){
            return true
        }
        return false
    }



    /**
     * 
     * @returns {bool}
     */
    this.is_middle = function () {
        return this.current_index === Math.floor((this.limit - 1) / 2);
    }



    /**
     * 
     * @returns {Question}
     */
    this.get_current = function () {
        return this.questions[this.current_index]
    }

    /**
     * 
     * @param {int} id 
     * @returns {Question}
     */
    this.select_question = function (id) {
        var selected = null
        var selected_index = 0
        for(var q = 0 ; q < this.questions.length ; q++){
            if(this.questions[q].id == id){
                selected_index = q
                break
            }
        }
        this.current_index = selected_index
        return this.questions[selected_index]
    }

    this.shuffle_options = function () {
        this.questions.forEach(q => shuffleArray(q.options));
        return this
    }

    /**
     * 
     * @returns {Question[]}
     */
    this.all = function () {
        return this.questions
    }    
    
    /**
     * 
     * @returns {Question[]}
     */
    this.limited = function () {
        var list = []
        for(var q = 0 ; q < this.questions.length ; q++){
            if(q+1 > this.limit){
                break;
            }
            list.push(this.questions[q])
        }
        return list
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }



}
window.QuestionManager = QuestionManager

function Team(name) {
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.name = name
    this.score = 0
    this.increment_score = function (points) {
        var delta = points || 1
        this.score += delta
    }
    this.reset = function () {
        this.score = 0
    }
}

function TeamsManager() {
    this.current_index = -1
    this.teams = []
    this._score_history = []
    this.reset = function () {
        this.teams = []
    }
    this.load = function (team_name_list) {
        for (var t in team_name_list) {
            this.teams.push(new Team(team_name_list[t]))
        }
        return this
    }
    this.add = function (name) {
        this.teams.push(new Team(name))
        return this
    }
    this.get_teams = function () {
        return this.teams
    }
    this.get_team = function (index) {
        return this.teams[index]
    }
    this.reset_scores = function () {
        for (var t = 0; t < this.teams.length; t++) {
            this.teams[t].reset()
        }
    }
    this.restart = function () {
        this.current_index = -1
        this.reset_scores()
        return this
    }
    this.next = function () {
        console.log("NEXT")
        console.log(this.current_index)

        if (this.current_index < this.teams.length - 1) {
            this.current_index += 1
            return this.teams[this.current_index]
        }
        //loop
        this.current_index = 0
        return this.teams[this.current_index]
    }
    this.get_current = function () {
        return this.teams[this.current_index]
    }
    this.select_team = function(id){
        var selected = null
        var selected_index = 0
        for(var q = 0 ; q < this.teams.length ; q++){
            if(this.teams[q].id == id){
                selected_index = q
                break
            }
        }
        this.current_index = selected_index
        return this.teams[selected_index]
    }
    this.set_current = function (name) {
        index = name != undefined && this.teams.indexOf(name) != -1 ? this.teams.indexOf(name) : 0
        return this
    }
    this.increment_score = function (name) {
        const index = name != undefined && this.teams.indexOf(name) != -1 ? this.teams.indexOf(name) : this.current_index
        this.teams[index].score += 1
        return this
    }
    this.get_current_scores = function () {
        var scores = {}
        for (t = 0; t < this.teams.length; t++) {
            scores[this.teams[t].name] = this.teams[t].score
        }
        return scores
    }
    this.get_previous_scores = function () {
        return this._score_history[this._score_history.length - 1]
    }

    this.get_winners = function () {
        let high_score = -Infinity;
        let winners = [];

        for (t = 0; t < this.teams.length; t++) {
            const cur_team = this.teams[t]
            console.log(cur_team.score)
            if (cur_team.score > high_score) {
                high_score = cur_team.score
                winners = [cur_team.name]
                continue
            }
            if (high_score != 0 && cur_team.score == high_score) {
                winners.push(cur_team.name)
            }
        }

        return winners
    }

}
window.TeamsManager = TeamsManager

