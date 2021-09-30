const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = 500;
const height = 500;
const scaleFactor = 1 / 125;

plotPoint(250, 250);

canvas.addEventListener("click", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log("x", x, "y", y);
    const [r, i] = screenToWorld(x, y);
    const [_x, _y] = worldToScreen(r, i);
    console.log("r", r, "i", i, "_x", _x, "_y", _y);
    plotPoint(x, y);
    plotLine(250, 250, x, y);
});

function plotPoint(x, y, radius=5) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function plotLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function screenToWorld(x, y) {
    const r = (x - width / 2) * scaleFactor;
    const i = -(y - height / 2) * scaleFactor;
    return [r, i];
}

function worldToScreen(r, i) {
    const x = r / scaleFactor + width / 2;
    const y = -i / scaleFactor + height / 2;
    return [x, y];
}






