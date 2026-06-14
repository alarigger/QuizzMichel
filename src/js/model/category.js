


function Category() {
    this.entity = "category"
    this.id = Math.floor(Math.random() * 1000000000); // 0-999,999,999
    this.name = ""
    this.title = null
    this.images = []
    this.background = []
    this.music = []

    this.get_background = function(){
        if(this.background.length==0){
            return 
        }
        return this.background[0]
    }

    this.get_title = function(){
        if(this.title.length==0){
            return 
        }
        return this.title[0].asset
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
        cat.title = this._content_manager.from_obj(data.title) || cat.name
        cat.images = this._content_manager.from_obj(data.images);
        cat.background = this._content_manager.from_obj(data.background);
        cat.music = this._content_manager.from_obj(data.music);
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
        this._content_manager.preload(category, category.title);
        this._content_manager.preload(category, category.background);
        this._content_manager.preload(category, category.music);
        this._content_manager.preload(category, category.images);
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


