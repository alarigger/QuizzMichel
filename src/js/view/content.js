

function BaseContentRenderer() {
    this.render = function (content) {
        throw new Error("render() not implemented");
    };
}

function TextContentRenderer() {
    this.render = function (content) {
        const el = document.createElement("span");
        el.classList.add("question-content", "question-content--text");
        if(content.asset){
            el.innerHTML = content.asset ?? "Loading...";
        }
        return el;
    };
}
function ImageContentRenderer() {
    this.render = function (content) {
        const img = content.asset || new Image();
        img.classList.add("question-content", "question-content--image");
        if (!content.asset) {
            img.src = "images/" + content.value;
        }
        return img;
    };
}
function VideoContentRenderer() {
    this.render = function (content) {
        const video = content.asset || document.createElement("video");
        video.classList.add("question-content", "question-content--video");
        video.controls = true;
        if (!content.asset) {
            video.src = "videos/" + content.value;
        }

        return video;
    };
}

function AudioContentRenderer() {
    this.render = function (content) {
        const audio = content.asset || document.createElement("audio");

        audio.classList.add(
            "question-content",
            "question-content--audio"
        );

        audio.controls = true;

        if (!content.asset) {
            audio.src = "audio/" + content.value;
        }

        // Autoplay
        audio.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });

        return audio;
    };
}
const ContentRendererRegistry = {
    text: new TextContentRenderer(),
    image: new ImageContentRenderer(),
    video: new VideoContentRenderer(),
    audio: new AudioContentRenderer()
};
function renderContent(content) {
    const renderer = ContentRendererRegistry[content.type];
    if (!renderer) {
        console.warn("No renderer for type:", content.type);
        return document.createTextNode("");
    }
    return renderer.render(content);
}



/**
 * @param {QuestionContent|QuestionContent[]} contents
 * @returns {HTMLDivElement}
 */
function renderContentList(contents) {
    contents = Array.isArray(contents) ? contents : [contents];
    const wrapper = document.createElement("span");
    wrapper.className = "";
    const sorted = [...contents].sort((a, b) => {
        const rank = {
            image: 0,
            audio: 3,
            text: 1
        };
        return (rank[a.type] || 0) - (rank[b.type] || 0);
    });
    sorted.forEach(c => {
        wrapper.appendChild(renderContent(c));
    });
    return wrapper;
}

