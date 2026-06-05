

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



