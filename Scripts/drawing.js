let drawing = false;
let drawingX = 0;
let drawingY = 0;

document.getElementById("dctx").addEventListener('mousedown', () =>{
   drawing = true;
});
document.getElementById("dctx").addEventListener('mouseup', () =>{
    drawing = false;
    drawingArray = [];
});
document.getElementById("dctx").addEventListener('mouseleave', () =>{
    drawing = false;
    drawingArray = [];
});
document.getElementById("dctx").addEventListener('mousemove', (e) =>{
    drawingX = (e.pageX - drawingCanvas.offsetLeft);
    drawingY = (e.pageY - drawingCanvas.offsetTop);

});
document.getElementById('clr').onclick = function(){
    dctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  dctx.fillStyle = 'black';
  dctx.fillRect(0,0, drawingCanvas.width, drawingCanvas.height);
};
draw();