// ==========================
// 1. DARK THEME
// ==========================
function swapTheme() {
    const app = document.getElementById("app");
    const btn = document.getElementById("swap");

    if (app && btn) {
        if (app.className === "day") {
            app.className = "night";
            btn.className = "button_night";
        } else {
            app.className = "day";
            btn.className = "button_day";
        }
    }
}

// ==========================
// 2. DIV CREATION
// ==========================
function createDiv(width, height, text) {
    const div = document.createElement("div");

    div.style.width = width + "px";
    div.style.height = height + "px";
    div.textContent = text;

    const container = document.getElementById("container");

    if (container) {
        container.appendChild(div);
    } else {
        document.body.appendChild(div);
    }
}

// ==========================
// 3. HIDE / SHOW PARAGRAPH
// ==========================
function toggleVisibility() {
    const para = document.getElementById("useless-paragraph");

    if (para) {
        para.style.display =
            para.style.display === "none" ? "block" : "none";
    }
}

// ==========================
// 4. DYNAMIC CSS
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text-container");
    const colorBox = document.getElementById("colorbox");
    const colorBtn = document.getElementById("colorchange");
    const fontSize = document.getElementById("fontsize");
    const italicBtn = document.getElementById("italic");
    const underlineBtn = document.getElementById("underline");
    const boldBtn = document.getElementById("bold");
    const fontList = document.getElementById("list");
    const getStyleBtn = document.getElementById("getstyle");
    const cssProps = document.getElementById("css-props");

    if (colorBtn && colorBox && text) {
        colorBtn.addEventListener("click", () => {
            text.style.color = colorBox.value;
        });
    }

    if (fontSize && text) {
        fontSize.addEventListener("input", () => {
            text.style.fontSize = fontSize.value + "px";
        });
    }

    if (italicBtn && text) {
        italicBtn.addEventListener("click", () => {
            text.style.fontStyle =
                text.style.fontStyle === "italic"
                    ? "normal"
                    : "italic";
        });
    }

    if (underlineBtn && text) {
        underlineBtn.addEventListener("click", () => {
            text.style.textDecoration =
                text.style.textDecoration === "underline"
                    ? "none"
                    : "underline";
        });
    }

    if (boldBtn && text) {
        boldBtn.addEventListener("click", () => {
            text.style.fontWeight =
                text.style.fontWeight === "bold"
                    ? "normal"
                    : "bold";
        });
    }

    if (fontList && text) {
        fontList.addEventListener("change", () => {
            text.style.fontFamily = fontList.value;
        });
    }

    if (getStyleBtn && cssProps && text) {
        getStyleBtn.addEventListener("click", () => {
            cssProps.textContent =
                `color: ${text.style.color}; ` +
                `font-size: ${text.style.fontSize}; ` +
                `font-family: ${text.style.fontFamily}; ` +
                `font-style: ${text.style.fontStyle}; ` +
                `font-weight: ${text.style.fontWeight}; ` +
                `text-decoration: ${text.style.textDecoration};`;
        });
    }
});