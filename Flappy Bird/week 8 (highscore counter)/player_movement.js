var moveup = false;
function movement() {
  //player controll
  document.onmousedown = function(e) { //detect when canvas is clicked
    player.y += -player.y_speed;
    moveup = true;
  };
  if(moveup==false) {
    player.y -= -player.y_speed/4;
  }
  moveup = false;
}
