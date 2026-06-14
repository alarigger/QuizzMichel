
/**
 * 
 * @param {string} type 
 * @param {*} value 
 */
function QuizzContent(type, value) {
    this.id = Math.floor(Math.random() * 1000000000);
    this.type = type;
    this.value = value;

    this.asset = null;
    this.loaded = false;
}
/**
 * 
 * @param {string} game_name 
 * @param {string} folder_policy 
 * @param {function[]} hooks 
 */
function QuizzContentManager(game_name, folder_policy, hooks) {

    this._game_name = game_name || "default";
    this._folder_policy = folder_policy || "entity/name";

    this._hooks = hooks || {};
    this._call = function(name, ...args){
        if (this._hooks && typeof this._hooks[name] === "function") {
            this._hooks[name](...args);
        }
    };

    this._game_name = game_name || "default";
    this._folder_policy = folder_policy || "entity/content_type/name";
    this._folder_policies = ["entity/name","entity/content_type/name","entity/name/content_type"]
    this.set_policy = function(str){
        this._folder_policy = str
    }

    this._pending = 0;
    this._onReady = null;

    this.whenReady = function (callback) {
        this._onReady = callback;
    };

    this._checkReady = function () {
        if (this._pending === 0 && this._onReady) {
            this._onReady();
        }
    };





    this._game_name = game_name || "default"
    /**
     * 
     * @param {Object} content_data 
     * @returns {QuizzContent[]}
     */
    this.from_obj = function (content_data) {

        if(!content_data){
            console.warn("Undefined content data:", content_data);
            return []
        }

        if (typeof content_data === "string") {
            return [new QuizzContent("text", content_data)];
        }

        if (Array.isArray(content_data)) {
            let result = [];
            content_data.forEach(item => {
                result = result.concat(this.from_obj(item));
            });
            return result;
        }

        if (content_data && typeof content_data === "object") {

            if (content_data.type && content_data.value) {
                return [new QuizzContent(content_data.type, content_data.value)];
            }

            if (content_data.text)   return [new QuizzContent("text", content_data.text)];
            if (content_data.image)  return [new QuizzContent("image", content_data.image)];
            if (content_data.video)  return [new QuizzContent("video", content_data.video)];
            if (content_data.sound)  return [new QuizzContent("audio", content_data.sound)];
        }

        console.warn("Unknown content format:", content_data);
        return [];
    };

    this.validate = function(content_data){
        if (!content_data || !content_data.type || !content_data.value) {
            console.warn("Invalid content object:", content_data);
            return false;
        }
        return true
    }

    /**
     * @param {Question | Category} data_object
     * @param {QuizzContent} content
     * @returns {string}
     */
    this._resolve_content_path = function (data_object, content) {

        const map = {
            data_folder: "data",
            entity: data_object.entity || "default",
            name: data_object.name || "all",
            content_type: content.type ? content.type + "s" : "default"
        };

        const base = [
            map.data_folder
        ];

        const parts = this._folder_policy.split("/").filter(Boolean);

        for (const key of parts) {
            base.push(map[key] !== undefined ? map[key] : "default");
        }

        return base.join("/");
    };




    /**
     * 
     * @returns {bool}
     */
    function isUrl(value) {
        return /^https?:\/\//i.test(value);
    }

    this.preload = function (data_object, content) {

        if (!content) return;

        if (Array.isArray(content)) {
            content.forEach(c => this.preload(data_object, c));
            return this;
        }

        if (!content.type) return this;
        if (!content) return this;

        if (content.type === "image") {

            const folder = this._resolve_content_path(data_object, content);
            const src = isUrl(content.value)
                ? content.value
                : `${folder}/${content.value}`;

            this._pending++;

            const img = new Image();
            content.asset = img;

            img.onload = () => {
                content.loaded = true;
                this._call("onLoadEnd", content);
            };

            img.src = src;
        }
        if (content.type === "video") {

            const folder = this._resolve_content_path(data_object, content);
            const src = isUrl(content.value)
                ? content.value
                : `${folder}/${content.value}`;

            this._pending++;

            const video = document.createElement("video");
            video.preload = "auto";

            content.asset = video;

            video.onloadeddata = () => {
                content.loaded = true;
                this._call("onLoadEnd", content);
            };

            video.src = src;
        }

        if (content.type === "audio") {

            const folder = this._resolve_content_path(data_object, content);
            const src = isUrl(content.value)
                ? content.value
                : `${folder}/${content.value}`;

            this._pending++;

            const audio = new Audio();
            audio.preload = "auto";

            content.asset = audio;

            audio.oncanplaythrough = () => {
                content.loaded = true;
                this._call("onLoadEnd", content);
            };

            audio.src = src;
        }

        if (content.type === "text") {

            const value = content.value || "";

            // Plain text value -> use directly
            if (!value.toLowerCase().endsWith(".txt")) {
                content.asset = value;
                content.loaded = true;
                this._call("onLoadEnd", content);
                return this;
            }

            const folder = this._resolve_content_path(data_object, content);

            const src = isUrl(content.value)
                ? content.value
                : `${folder}/${content.value}`;
            

            this._pending++;

            fetch(src)
                .then(r => r.text())
                .then(text => {
                    content.asset = text;
                    content.loaded = true;
                })
                .catch(err => {
                    console.warn("Text load failed:", src, err);
                    content.asset = "";
                })
                .finally(() => {
                    this._call("onLoadEnd", content);
                });
        }

        return this
    };

}


