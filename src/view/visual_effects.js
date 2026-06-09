

function numberToEmoji(num) {
    const map = {
        0: "0️⃣",
        1: "1️⃣",
        2: "2️⃣",
        3: "3️⃣",
        4: "4️⃣",
        5: "5️⃣",
        6: "6️⃣",
        7: "7️⃣",
        8: "8️⃣",
        9: "9️⃣",
        10: "🔟"
    };

    if (num in map) return map[num];

    // Optional: build emoji for numbers > 10 (11 -> "1️⃣1️⃣")  
    return String(num)
        .split("")
        .map(d => map[d] || d)
        .join("");
}

function numberCircleIconHTML(num, size = 24, bg = "#4CAF50", color = "#fff") {

    const span = document.createElement("span");

    span.style.display = "inline-flex";
    span.style.justifyContent = "center";
    span.style.alignItems = "center";
    span.style.width = size + "px";
    span.style.height = size + "px";
    span.style.borderRadius = "50%";
    span.style.backgroundColor = bg;
    span.style.color = color;
    span.style.fontWeight = "bold";
    span.style.fontSize = Math.floor(size * 0.6) + "px";
    span.style.fontFamily = "sans-serif";
    span.style.textAlign = "center";
    span.style.lineHeight = "1";

    span.textContent = num;

    return span;
}


/**
 * Inserts line breaks into a long text at roughly maxLineLength characters,
 * breaking only at spaces to avoid splitting words.
 * @param {string} text - The long text
 * @param {number} maxLineLength - Approx max chars per line
 * @returns {string} - Text with <br> inserted
 */
function addLineBreaks(text, maxLineLength = 50) {
    const words = text.split(" ");
    let line = "";
    let result = "";

    for (const word of words) {
        if ((line + word).length > maxLineLength) {
            result += line.trim() + "<br>";
            line = "";
        }
        line += word + " ";
    }
    result += line.trim(); // add remaining
    return result;
}

/**
 * Insert <br> in text at:
 * - periods, exclamation, question marks
 * - before uppercase words (new sentences)
 */
function smartLineBreak(text) {
    // 1. Break after punctuation marks
    let result = text.replace(/([.!?])\s+/g, "$1<br>");

    // 2. Optional: break before uppercase words not at start
    result = result.replace(/(\S)\s+([A-Z][a-z]+)/g, "$1<br>$2");

    return result;

}

function spawn_confetti() {
    for (let i = 0; i < 100; i++) {
        const c = document.createElement("div");
        c.style.position = "fixed";
        c.style.left = Math.random() * window.innerWidth + "px";
        c.style.top = "-10px";
        c.style.width = "6px";
        c.style.height = "10px";
        c.style.background = ["#4aa3ff", "#ff4ad8", "#ffe14a"][Math.random() * 3 | 0];
        c.style.opacity = "0.9";
        c.style.transform = "rotate(45deg)";
        c.style.zIndex = 9999;

        document.body.appendChild(c);

        let y = 0;
        let x = (Math.random() - 0.5) * 2;
        c.vy = 1 + (Math.random() * 1)

        const fall = setInterval(() => {
            var vx = (Math.random() * 2) - 1
            x += vx
            y += c.vy;
            c.style.top = y + "px";
            c.style.left = parseFloat(c.style.left) + vx + "px";

            if (y > window.innerHeight) {
                clearInterval(fall);
                c.remove();
            }
        }, 16);
    }
}

function spawn_candles() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const radius = 450; // circle size

    const candles = [];

    for (let i = 0; i < 40; i++) {
        const candle = document.createElement("div");

        candle.textContent = "🕯️";
        candle.style.position = "fixed";
        candle.style.fontSize = (20 + Math.random() * 12) + "px";
        candle.style.zIndex = 9999;
        candle.style.pointerEvents = "none";

        document.body.appendChild(candle);

        candles.push({
            el: candle,
            angle: (i / 40) * Math.PI * 2, // evenly spaced
            speed: 0.001 + Math.random() * 0.001, // rotation speed
            radius: radius + (Math.random() * 40 - 20) // slight variation
        });
    }

    function animate() {
        for (const c of candles) {
            c.angle += c.speed;

            const x = centerX + Math.cos(c.angle) * c.radius;
            const y = centerY + Math.sin(c.angle) * c.radius;

            c.el.style.left = x + "px";
            c.el.style.top = y + "px";
        }

        requestAnimationFrame(animate);
    }

    animate();
}




function dancingLetter(text) {
    return [...text]
        .map((c, i) => {
            const display = c === " " ? "&nbsp;" : c;

            const duration = (0.8 + Math.random() * 0.8).toFixed(2);
            const delay = (Math.random() * 0.5).toFixed(2);
            const rotate = Math.floor(Math.random() * 20 - 10);
            const jump = Math.floor(Math.random() * 12 + 4);

            return `
                <span
                    class="dancing-letter"
                    style="
                        --rot:${rotate}deg;
                        --jump:${jump}px;
                        animation-duration:${duration}s;
                        animation-delay:${delay}s;
                    "
                >
                    ${display}
                </span>
            `;
        })
        .join("");
}