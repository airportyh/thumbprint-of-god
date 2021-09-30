const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = 500;
const height = 500;

plotPoint(250, 250);

canvas.addEventListener("click", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log("x", x, "y", y);
    plotPoint(x, y);
});

function plotPoint(x, y, radius=5) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}






