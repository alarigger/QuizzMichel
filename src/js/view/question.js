/**
 * 
 * @param {QuestionOption} option 
 * @param {*} index 
 * @returns 
 */
function renderOption(option, index) {

    const el = document.createElement("div");
    el.className = "option";
    el.dataset.i = index;

    el.appendChild(numberCircleIconHTML(index + 1));
    el.appendChild(renderContentList(option.content));

    return el;
}

function renderOptionSimple(option) {

    const el = document.createElement("div");
    el.className = "option";
    el.appendChild(renderContentList(option.content));

    return el;
}
/**
 * @param {Question} question
 */
function QuestionView(question) {

    this.question = question;
    this.render = function (containerId) {

        const card = document.createElement("div");
        card.className = "card";
        card.style.position = "relative"; // important for top-right positioning

        const meta = document.createElement("div");
        meta.className = "question-meta";

        // Shiny points pill
        const points = document.createElement("div");
        points.className = "points-pill";
        points.innerHTML = `🏆 ${question.points ?? 0} pts`;
        meta.appendChild(points);

        // Name pill
        const qname = document.createElement("div");
        qname.className = "category-pill";
        qname.innerHTML = `${question.name ?? 0}`;
        meta.appendChild(qname);

        // Category pills
        (question.categories || []).forEach(cat => {
            const tag = document.createElement("div");
            tag.className = "category-pill";
            tag.textContent = cat;
            meta.appendChild(tag);
        });

        card.appendChild(meta);

        // ===== QUESTION CONTENT =====
        const title = document.createElement("h1");
        title.className = "question-content";
        title.appendChild(renderContentList(question.content));
        card.appendChild(title);

        // ===== OPTIONS =====
        question.options.forEach((opt, i) => {
            card.appendChild(renderOption(opt, i));
        });

        const container = document.getElementById(containerId);
        container.innerHTML = "";
        container.appendChild(card);

        if (question.background.length > 0) {
            set_background_image(question.background[0].asset)
        }
    };

}


