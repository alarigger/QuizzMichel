function Quizz(name){

    /* LOADING */
    var _content_manager = new QuizzContentManager(name, {
        onLoadStart: () => this._registerLoad(),
        onLoadEnd: () => this._finishLoad()
    });
    this._pendingLoads = 0;
    this._registerLoad = function(){
        this._pendingLoads++;
    };

    this._finishLoad = function(){
        this._pendingLoads--;

        if(this._pendingLoads === 0){
            this.valid = true;
            console.log("ALL QUIZ ASSETS LOADED");
        }
    };

    this.teams = new TeamsManager(_content_manager)
    this.questions = new QuestionManager(_content_manager)
    this.categories = new CategoryManager(_content_manager)
    this.sounds = new GameSoundManager(_content_manager)
    this.backgrounds = new BackgroundManager(_content_manager)
    this.valid = false

    this.load= function(quizz_data,folder_policy){
        _content_manager.set_policy(folder_policy || "entity/content_type/name")
        this.sounds.load(quizz_data.audio)
        this.categories.load(quizz_data.categories)
        this.questions.load(quizz_data.questions)
        this.teams.load(quizz_data.teams)
        this.backgrounds.load(quizz_data.backgrounds)
        this.questions.set_limit(quizz_data.options.question_limit)
        if(quizz_data.options.shuffle_options){
            this.questions.shuffle_options()
        }
        console.log("quizz data loaded ")
    }

    this.restart = function(){
        this.questions.restart()
        this.teams.restart()
    }
    this.add_team = function(name){
        this.teams.add(name)
    }
    this.next_team = function(){
        return this.teams.next()
    }        
    this.increment_score  = function(_team){
        return this.teams.increment_score ()
    }    
    this.get_current_team= function(){
        return this.teams.get_current()
    }    
    this.set_current_team= function(name){
        return this.teams.set_current(name)
    }
    this.get_current_scores=function(){
        return this.teams.get_current_scores()
    }   
    this.get_previous_scores =function(){
        return this.teams.get_previous_scores ()
    }
    this.load_questions = function(list){
        this.questions.load(list)
    }
    this.next_question = function(){
        return this.questions.next()
    }    
    /**
     * 
     * @returns {Question}
     */
    this.get_current_question = function(){
        return this.questions.get_current()
    }    
    this.get_current_question_number = function(){
        return this.questions.current_index+1
    }    
    this.get_question_total = function(){
        return this.questions.limit
    }
    this.is_last_question = function(){
        return this.questions.is_last()
    }    
    this.mid_question = function(){
        return this.questions.is_middle()
    }
    this.increment_current_team_score = function(){
        this.teams.inscrement_score()
    }
    this.get_winners = function(){
        return this.teams.get_winners()
    }    
    this.get_teams = function(){
        return this.teams.get_teams()
    }    
    /**
     * 
     * @returns {Team}
     */
    this.get_team= function(index){
        return this.teams.get_team(index)
    }
    this.get_questions = function(){
        return this.questions.limited()
    }   
    this.get_all_questions = function(){
        return this.questions.all()
    }    
    this.select_question = function(id){
        return this.questions.select_question(id)
    }    
    /**
     * 
     * @param {*} id 
     * @returns {Team}
     */
    this.select_team = function(id){
        return this.teams.select_team(id)
    }    
    this.all_burned = function(){
        return this.questions.all_burned()
    }

    
    /**
     * 
     * @param {Question} question 
     * @returns {Category}
     */
    this.get_question_category = function(question){
        if(question.categories.length==0){
            return 
        }
        var first_cat = question.categories[0]
        return this.categories.get_category(first_cat)
    }    
    /**
     * 
     * @param {string} name 
     * @returns {Category}
     */
    this.get_category = function(name){
        return this.categories.get_category(name)
    }


}
window.Quizz = Quizz


