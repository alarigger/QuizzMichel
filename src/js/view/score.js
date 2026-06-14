
function render_scores_table() {
    let previous_scores = quizz.get_previous_scores();
    const scores = quizz.get_current_scores();

    // Create table
    let html = `
    <table id="score-table" style="
        border-collapse: collapse;
        font-size: 22px;
        margin: 10px 0;
    ">
    `;

    // First row: team names
    html += `<tr>`;
    for (const team in scores) {
        html += `
            <th style="
                border: 2px solid #444;
                padding: 10px 14px;
                background: #f0f0f0;
                text-align: center;
            ">${team}</th>
        `;
    }
    html += `</tr>`;

    // Second row: scores (animated)
    html += `<tr>`;
    for (const team in scores) {
        const old_val = previous_scores[team] ?? scores[team];
        const new_val = scores[team];

        // unique ID for each score cell
        html += `
            <td id="score-${team}" style="
                border: 2px solid #444;
                padding: 14px 18px;
                text-align: center;
                font-weight: bold;
            ">${old_val}</td>
        `;
    }
    html += `</tr></table>`;

    // Return HTML → animation happens after insertion
    setTimeout(() => {
        for (const team in scores) {
            const old_val = previous_scores[team] ?? scores[team];
            const new_val = scores[team];

            if (new_val > old_val) {
                const el = document.getElementById(`score-${team}`);
                animate_value(old_val, new_val, 400, v => {
                    el.textContent = v;
                });
            }
        }

        // store current scores for future comparisons
        previous_scores = { ...scores };
    }, 10);

    return html;
}

function animate_value(from, to, duration, callback) {
    const start = performance.now();

    function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = from + (to - from) * progress;
        callback(value);
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}


/**
 * 
 * @param {Quizz} quizz 
 * @returns 
 */
function render_scores_podium(quizz, name, glowing_teams_names, slow) {
    const previous_scores = quizz.get_previous_scores();
    const scores = quizz.get_current_scores();
    const teams = Object.keys(scores);
    const max_score = Math.max(...Object.values(scores), 1);

    var suffix = name || "score"
    var html = `
    <div id="podium" style="
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: flex-end;
        height: 260px;
        margin-top: 20px;
    ">
    `;

    teams.forEach(team => {
        const previous = 0;

        html += `
            <div style="display:flex; flex-direction:column; align-items:center;">

                <div id="score-text-${team}${suffix}" style="
                    font-size:22px;
                    font-weight:bold;
                    margin-bottom:6px;
                ">
                    ${previous}
                </div>

                <div id="bar-${team}${suffix}" style="
                    width: 60px;
                    height: ${(previous / max_score) * 200}px;
                    background: linear-gradient(180deg, #4aa3ff 0%, #1e7ae0 100%);
                    border-radius: 6px 6px 0 0;
                    transition: height 0.5s linear;
                "></div>

                <div style="margin-top:8px;font-size:20px;font-weight:bold;">
                    ${dancingLetter(team)}
                </div>
            </div>
        `;
    });

    html += `</div>`;

    const animation_time = 100
    const animation_factor = slow || 5

    // After HTML is placed in the DOM, animate the bars
    setTimeout(() => {
        console.log("TIMEOUT FIRED");
        teams.forEach(team => {
            const old_val = 0;
            const new_val = scores[team];

            const bar = document.getElementById(`bar-${team}${suffix}`);
            const scoreText = document.getElementById(`score-text-${team}${suffix}`);

            const bar_animation_time = new_val * animation_factor
            // Animate bar and score
            animate_value(old_val, new_val, bar_animation_time, v => {
                // bar height
                const maxPx = 200;
                const h = (v / max_score) * maxPx;
                bar.style.height = h + "px";

                // score number count-up
                scoreText.textContent = Math.floor(v);
            });
        });

        setTimeout(() => {
            for (const gtn of glowing_teams_names) {
                const bar = document.getElementById(`bar-${gtn}${suffix}`);
                if (bar) {
                    bar.style.animation = "pulseGlow 1s infinite";
                }
            }
        }, 10);

        // Save new scores for next animation
        //previous_scores = { ...scores };
    }, animation_time);




    return html;

}