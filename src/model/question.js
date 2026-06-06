

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
    this.get_background_image = function(){
        if(this.background.length==0){
            return 
        }
        return this.background[0]
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