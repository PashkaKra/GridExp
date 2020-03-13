
//alert("h");
function init(){
  var panda = document.getElementById("panda");
  panda.addEventListener("dragstart", dragged, false);
  var pandast = document.getElementById("pandast");
  drop = document.getElementById("box");
  drop.addEventListener("dragenter", (e)=>{e.preventDefault();}, false);
  drop.addEventListener("dragover", (e)=>{e.preventDefault();}, false);
  drop.addEventListener("drop", dropped, false);

}

function dragged(e){
  var code = "<img src='"+panda.src+"'/>";
  e.dataTransfer.effectAllowed='move';
  e.dataTransfer.setData("Text", code);
}

function dropped(e){
  e.preventDefault();
  //var drop = document.getElementById("box");
  drop.innerHTML = e.dataTransfer.getData('Text');
}
window.addEventListener("load", init, false);
