const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2;

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(60, 10);
ctx.lineTo(60, 140);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(120, 10);
ctx.lineTo(120, 140);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(180, 10);
ctx.lineTo(180, 140);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#014301";
ctx.moveTo(240, 10);
ctx.lineTo(240, 140);
ctx.stroke();
ctx.closePath();