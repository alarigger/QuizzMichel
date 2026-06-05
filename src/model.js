



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




function GameSound(){
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.data_type="audio"
    this.group="all"
    this.name=this.id
    this.sound=[]
    this.get_sound = function(){
        if(this.sound.length==0){
            return 
        }
        return this.sound[0]
    }
}


function GameSoundFactory(content_manager){
    /**
     * 
     * @param {Object} data 
     * @returns {GameSound}
     */
    this._content_manager = content_manager || new QuizzContentManager()
    this.create = function (data) {
        const sound = new GameSound();
        sound.name = data.name || sound.id
        sound.group = data.group || sound.group
        sound.sound = this._content_manager.from_obj(data.sound);
        return sound
    };
}
/**
 * @param {QuizzContentManager} content_manager
 */
function GameSoundManager(content_manager){
    this._factory = new GameSoundFactory(content_manager)
    this._bank = new SoundBank()
    this._content_manager = content_manager || new QuizzContentManager()
    this.load = function(data){
        for (var s = 0 ; s < data.length ;s++){
            const sound_data = data[s]
            const game_sound = this._factory.create(sound_data)
            this._content_manager.preload(game_sound,game_sound.sound)
            this._bank.register(game_sound)
        } 
    }
    this.play_random = function(group_name){
        this._bank.playRandom(group_name)
    }
    this.play = function(name){
        this._bank.play(name)
    }


}
class SoundBank {
    constructor() {
        this.sounds = {};
        this.groups = {};
    }

    getSoundName(path) {
        return path.split('/').pop().replace(/\.[^/.]+$/, '');
        // "assets/audio/correct1.mp3" -> "correct1"
    }

    /**
     * 
     * @param {GameSound} 
     * @returns 
     */
    register(game_sound) {

        const group = game_sound.group
        var sound = game_sound.get_sound()
        if(sound===undefined){
            return 
        }
        sound = sound.asset
        var name = game_sound.name || game_sound.id

        console.log("")
        console.log(game_sound)
        console.log(sound)

        if (typeof sound === "string") {
            name = this.getSoundName(sound);
            sound = new Audio(sound);
        }

        if (!sound || typeof sound.play !== "function") {
            throw new TypeError("Invalid sound");
        }

        this.sounds[name] = sound;

        this.groups[group] ??= [];
        this.groups[group].push(sound);

        return sound;
    }

    play(name) {
        const sound = this.sounds[name];

        if (!sound) {
            console.warn(`Sound '${name}' not found`);
            return;
        }

        sound.currentTime = 0;
        sound.play();
    }
    playRandom(group) {
        const list = this.groups[group];
        if (!list?.length) return;

        const sound = list[Math.floor(Math.random() * list.length)];
        sound.currentTime = 0;
        sound.play();
    }
}








/**
 * 
 * @param {string} type 
 * @param {*} value 
 */
function QuizzContent(type, value) {
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.type = type;
    this.value = value;
    this.asset = null;
}

function QuizzContentManager(game_name) {

    this._game_name = game_name || "default"
    /**
     * 
     * @param {Object} content_data 
     * @returns {QuizzContent[]}
     */
    this.from_obj = function (content_data) {

        // 1) STRING → single text node array
        if (typeof content_data === "string") {
            return [new QuizzContent("text", content_data)];
        }

        // 2) ARRAY → normalize each item
        if (Array.isArray(content_data)) {

            const result = [];

            content_data.forEach(item => {
                result.push(...this.from_obj(item));
            });

            return result;
        }

        // 3) OBJECT → single content block
        if (content_data && typeof content_data === "object") {

            if (content_data.type && content_data.value) {
                return [new QuizzContent(content_data.type, content_data.value)];
            }

            // legacy flexible format support (optional but useful)
            if (content_data.text) {
                return [new QuizzContent("text", content_data.text)];
            }

            if (content_data.image) {
                return [new QuizzContent("image", content_data.image)];
            }

            if (content_data.video) {
                return [new QuizzContent("video", content_data.video)];
            }

            if (content_data.sound) {
                return [new QuizzContent("sound", content_data.sound)];
            }
        }

        // 4) fallback safe output (never break UI)
        console.log(content_data);
        console.log("Unknown content format:", content_data);
        return [];
    };

    /**
     * @param {Question | Category} data_object
     * @param {QuizzContent} content
     * @returns {string}
     */
    this._resolve_content_path = function (data_object, content) {
        const root = "quizz"
        const game_name = this._game_name 
        const data_type_folder = data_object.data_type || "default"
        const data_name = data_object.name || "all"
        const content_type = content.type + "s" || "default"
        var path = []
        path.push(root)
        path.push(game_name)
        path.push(data_type_folder)
        path.push(content_type)
        path.push(data_name)
        var joined = path.join("/")
        return joined
    }


    /**
     * 
     * @returns {bool}
     */
    function isUrl(value) {
        return /^https?:\/\//i.test(value);
    }

    this.preload = function (data_object, content) {
        if (!content) return;
        // ARRAY SUPPORT
        if (Array.isArray(content)) {
            content.forEach(co => this.preload(data_object, co));
            return;
        }
        if (!content.type) return;

        switch (content.type) {
            case "image": {
                var resource_folder = this._resolve_content_path(data_object, content);
                const src = isUrl(content.value)
                    ? content.value
                    : `${resource_folder}/${content.value}`;

                content.asset = new Image();
                content.asset.src = src;
                break;
            }
            case "video": {
                var resource_folder = this._resolve_content_path(data_object, content);
                const src = isUrl(content.value)
                    ? content.value
                    : `${resource_folder}/${content.value}`;

                content.asset = document.createElement("video");
                content.asset.preload = "auto";
                content.asset.src = src;
                break;
            }
            case "audio": {
                var resource_folder = this._resolve_content_path(data_object, content);
                const src = isUrl(content.value)
                    ? content.value
                    : `${resource_folder}/${content.value}`;

                content.asset = new Audio();
                content.asset.preload = "auto";
                content.asset.src = src;
                break;
            }
        }
        return this
    };

}




function Category() {
    this.data_type = "category"
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.name = ""
    this.title = null
    this.background_image = []
    this.background_music = []

    this.get_background_image = function(){
        if(this.background_image.length==0){
            return 
        }
        return this.background_image[0]
    }
}


function CategoryFactory(content_manager) {

    /**
     * 
     * @param {Object} data 
     * @returns {Category}
     */

    this._content_manager = content_manager || new QuizzContentManager()
    this.create = function (data) {
        const cat = new Category();
        cat.name = data.name || cat.id
        cat.title = data.title || cat.name
        cat.background_image = this._content_manager.from_obj(data.background_image);
        cat.background_music = this._content_manager.from_obj(data.background_music);
        return cat
    };


}


/**
 * @param {QuizzContentManager} content_manager
 */
function CategoryManager(content_manager) {

    this._content_manager = content_manager || new QuizzContentManager()
    this._factory = new CategoryFactory(content_manager)
    this.categories = []

    /**
     * @param {Object[]} _list
     */
    this.load = function (_list) {
        for (var q in _list) {
            const cdata = _list[q]
            const ncat = this._factory.create(cdata)
            console.log(ncat.name)
            this._preload_category_data(ncat)
            this.categories.push(ncat)
        }
        return this
    }

    /**
     * @param {Category} category
    */
    this._preload_category_data = function (category) {
        console.log("preload content")
        this._content_manager.preload(category, category.background_image);
        this._content_manager.preload(category, category.background_music);
        return this
    };

    this.get_category = function (name) {
        console.log(this.categories)
        for (var c = 0; c < this.categories.length; c++) {
            if (this.categories[c].name == name) {
                return this.categories[c]
            }
        }
    }


}






/**
 * 
 * @param {QuizzContent} content 
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





function QuestionFactory(content_manager) {

    /**
     * 
     * @param {Object} data 
     * @returns {Question}
     */
    this._content_manager = content_manager || new QuizzContentManager()
    this.create = function (data) {

        const quest = new Question();
        quest.name = data.name || quest.id
        quest.content = this._content_manager.from_obj(data.content);
        quest.points = data.points || 1;
        quest.categories = data.categories || [];
        quest.background = data.background || [];
        quest.options = data.options.map(option => {
            const content = this._content_manager.from_obj(option.content);
            return new QuestionOption(content, option.valid);
        });
        quest.correction = this._content_manager.from_obj(data.correction);
        quest.is_demo = data.is_demo || false;



        return quest;
    };

}





function Question() {
    this.data_type = "question"
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
    this.background = []
    this.get_valid_option = function () {
        for (var a in this.options) {
            if (this.options[a].valid) {
                return this.options[a].value
            }
        }
    }
    this.try = function () {
        this.atempts += 1
        return this
    }
    /**
     * 
     * @returns {QuizzContent}
     */
    this.get_content = function () {
        return this.content.value
    }
    this.burn = function () {
        this.is_burned = true
        return this
    }
}


/**
 * @param {QuizzContentManager} content_manager
 */
function QuestionManager(content_manager) {

    this.current_index = -1
    this.limit = undefined
    this._factory = new QuestionFactory()
    this._content_manager = content_manager || new QuizzContentManager()
    this.questions = []

    /**
     * @param {Object[]} _list
     */
    this.load = function (_list) {
        for (var q in _list) {
            const qdata = _list[q]
            var nquest = this._factory.create(qdata)
            console.log(nquest.name)
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
        console.log("preload content")
        this._content_manager.preload(question, question.content);
        this._content_manager.preload(question, question.correction);
        this._content_manager.preload(question, question.background);
        question.options.forEach(option => {
            this._content_manager.preload(question, option.content);
        });
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
        for (var q = 0; q < this.questions.length; q++) {
            if (this.questions[q].is_burned === true) {
                burned += 1
            }
        }
        if (burned >= this.limit) {
            return true
        }
        if (burned == this.questions.length) {
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
        for (var q = 0; q < this.questions.length; q++) {
            if (this.questions[q].id == id) {
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
        for (var q = 0; q < this.questions.length; q++) {
            if (q + 1 > this.limit) {
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
/**
 * @param {QuizzContentManager} content_manager
 */
function TeamsManager(content_manager) {
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
    this.select_team = function (id) {
        var selected = null
        var selected_index = 0
        for (var q = 0; q < this.teams.length; q++) {
            if (this.teams[q].id == id) {
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



