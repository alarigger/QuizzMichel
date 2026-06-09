



function addCenteredImage(slideId, imageSrc, width = "600px") {
    const slide = document.getElementById(slideId);
    if (!slide) return console.error("Slide not found:", slideId);

    // Create wrapper (ensures perfect centering)
    const wrapper = document.createElement("div");
    wrapper.className = "image-center-wrapper";

    // Create image
    const img = document.createElement("img");
    img.src = imageSrc;
    img.style.width = width;
    img.style.maxWidth = "90%";
    img.style.height = "auto";

    // Append
    wrapper.appendChild(img);
    slide.innerHTML = "";  // clear slide
    slide.appendChild(wrapper);
}

class ImageCarousel {
    constructor(containerSelector, imageList) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) throw new Error("Carousel container not found.");

        this.images = imageList;
        this.index = 0;

        this.imgElement = document.createElement("img");
        this.imgElement.style.width = "100%";
        this.imgElement.style.height = "100%";
        this.imgElement.style.objectFit = "cover";
        this.imgElement.style.transition = "opacity 0.3s";

        this.container.appendChild(this.imgElement);

        this.showImage(0);
    }

    // internal method
    showImage(i) {
        this.imgElement.style.opacity = 0;

        setTimeout(() => {
            this.imgElement.src = this.images[i];
            this.imgElement.style.opacity = 1;
        }, 200);
    }

    next() {
        this.index = (this.index + 1) % this.images.length;
        this.showImage(this.index);
    }

    prev() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        this.showImage(this.index);
    }
}
window.ImageCarousel = ImageCarousel




const palettes = [
    "linear-gradient(135deg,#1a2a6c,#b21f1f,#fdbb2d)",
    "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    "linear-gradient(135deg,#ff416c,#ff4b2b,#ffe259)",
    "linear-gradient(135deg,#667db6,#0082c8,#667db6)"
];

function setRandomBg() {
    document.body.style.transition = "background 1s ease";
    document.body.style.background = palettes[Math.floor(Math.random() * palettes.length)];
}


/**
 * @param {HTMLImageElement} image
 */
function set_background_image(image) {
    const container = document.getElementById("snow-container");

    container.style.backgroundImage = `url("${image.src}")`;
    container.style.backgroundRepeat = "repeat";

    const tileWidth = image.naturalWidth;
    const tileHeight = image.naturalHeight;

    let y = 0;
    const speed = 0.3; // pixels per frame

    function animate() {
        y = (y + speed) % tileHeight;
        container.style.backgroundPosition = `0 ${y}px`;
        requestAnimationFrame(animate);
    }

    animate();
}
function reset_background() {
    const container = document.getElementById("snow-container");

    container.style.backgroundImage = "none";
    container.style.backgroundPosition = "";
    container.style.backgroundSize = "";
    container.style.backgroundRepeat = "";
}





const ImagePopup = (() => {

    let overlay = null;
    let popup = null;

    function init() {
        overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.pointerEvents = "none";
        overlay.style.zIndex = "9999";
        overlay.style.overflow = "hidden";

        popup = document.createElement("img");
        popup.style.position = "absolute";
        popup.style.left = "50%";
        popup.style.maxWidth = "60vw";
        popup.style.maxHeight = "60vh";

        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    }

    function show(img, on_finish = null) {

        if (!overlay) init();

        const x_pos_range = ["60%", "55%", "50%", "30%", "80%", "20%"];
        const x = x_pos_range[Math.floor(Math.random() * x_pos_range.length)];
        const rot = (Math.random() * 30) - 15;

        popup.src = img.src;

        popup.style.left = x;

        requestAnimationFrame(() => {

            const h = popup.getBoundingClientRect().height;

            // Completely hidden below screen
            popup.style.bottom = `${-h}px`;

            popup.style.transition =
                "bottom 0.6s cubic-bezier(.2,.9,.3,1.2), transform 0.6s ease";

            const up_speed = 800
            const down_speed = up_speed * 1.5

            requestAnimationFrame(() => {

                const up_position = Math.round(0 - (h * 0.01))
                const scale = 1 + Math.random() * 0.6; // 0.8 → 1.4
                const rx = x_pos_range[Math.floor(Math.random() * x_pos_range.length)];
                popup.style.transform = `translateX(${"-" + rx}) scale(${scale}) rotate(${rot}deg)`;

                // Visible position
                popup.style.bottom = `${up_position}px`;

                setTimeout(() => {

                    // Completely hidden again
                    popup.style.bottom = `${-h}px`;
                    popup.style.transform =
                        "translateX(-50%) rotate(-8deg)";

                    setTimeout(() => {
                        overlay.remove();
                        if (on_finish) on_finish();
                    }, down_speed);

                }, up_speed);
            });
        });
    }

    return { show };
})();



/**
 * 
 * @param {Image} img 
 */
/**
 * @param {HTMLImageElement|Image} img
 */
function image_popup(img, on_finish = null) {

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.pointerEvents = "none";
    overlay.style.zIndex = "9999";
    overlay.style.overflow = "hidden";

    const popup = img.cloneNode(true);

    const x_pos_range = ["50%", "30%", "80%", "20%"];

    const x = x_pos_range[Math.floor(Math.random() * x_pos_range.length)];

    popup.style.position = "absolute";
    popup.style.left = x;
    popup.style.maxWidth = "60vw";
    popup.style.maxHeight = "60vh";
    const random_rot = (Math.random() * 30) - 15; // -15 → +15
    popup.style.transform = `translateX(-50%) rotate(${random_rot}deg)`;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {

        const h = popup.getBoundingClientRect().height;

        // Completely hidden below screen
        popup.style.bottom = `${-h}px`;

        popup.style.transition =
            "bottom 0.6s cubic-bezier(.2,.9,.3,1.2), transform 0.6s ease";

        const up_speed = 800
        const down_speed = up_speed * 1.5

        requestAnimationFrame(() => {

            const up_position = Math.round(0 - (h * 0.3))

            // Visible position
            popup.style.bottom = `${up_position}px`;
            popup.style.transform =
                "translateX(-50%) rotate(8deg)";

            setTimeout(() => {

                // Completely hidden again
                popup.style.bottom = `${-h}px`;
                popup.style.transform =
                    "translateX(-50%) rotate(-8deg)";

                setTimeout(() => {
                    overlay.remove();
                    if (on_finish) on_finish();
                }, down_speed);

            }, up_speed);
        });
    });
}

