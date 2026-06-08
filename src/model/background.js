


function Background() {
    this.data_type = "background"
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.name = ""
    this.image = []
    /**
     * 
     * @returns {Image}
     */
    this.get_image = function(){
        if(this.image.length==0){
            return 
        }
        return this.image[0].asset
    }    
    /**
     * 
     * @returns {Image}
     */
    this.get_random = function () {
        if (this.image.length === 0) return;

        const index = Math.floor(Math.random() * this.image.length);
        return this.image[index].asset;
    }
}


function BackgroundFactory(content_manager) {

    /**
     * 
     * @param {Object} data 
     * @returns {Background}
     */

    this._content_manager = content_manager || new QuizzContentManager()
    this.create = function (data) {
        const bg = new Background();
        bg.name = data.name || bg.id
        bg.image = this._content_manager.from_obj(data.image);
        return bg
    };


}


/**
 * @param {QuizzContentManager} content_manager
 */
function BackgroundManager(content_manager) {

    this._content_manager = content_manager || new QuizzContentManager()
    this._factory = new BackgroundFactory(content_manager)
    this.backgrounds = []

    /**
     * @param {Object[]} _list
     */
    this.load = function (_list) {
        for (var q in _list) {
            const data = _list[q]
            const nbg = this._factory.create(data)
            this._preload(nbg)
            this.backgrounds.push(nbg)
        }
        return this
    }

    /**
     * @param {Background} category
    */
    this._preload = function (background) {
        this._content_manager.preload(background, background.image);
        return this
    };

    /**
     * 
     * @param {string} name 
     * @returns {Background}
     */
    this.get_background = function (name) {
        for (var c = 0; c < this.backgrounds.length; c++) {
            if (this.backgrounds[c].name == name) {
                return this.backgrounds[c]
            }
        }
    }


}

