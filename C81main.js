canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "red";
linewidth = 2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    linewidth = document.getElementById("width").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("x = "+ mouse_x + "y = "+ mouse_y);
    circle(mouse_x, mouse_y);

}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke()
}
function clear(){
    ctx.clearRect(0, 0, canvas.Width, canvas.Height)
}

