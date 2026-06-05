


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

        var sound = game_sound.get_sound()
        if(sound===undefined){
            return 
        }
        sound = sound.asset
        var name = game_sound.name || game_sound.group

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
        this.groups[name] ??= [];
        this.groups[name].push(sound);

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
        console.log(sound)
        sound.currentTime = 0;
        sound.play();
    }
}







