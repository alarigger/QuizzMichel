
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


