var player_img = document.getElementById("player_img"); //get player image

var Player = function(x,y,size,x_speed,y_speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.x_speed = x_speed;
  this.y_speed = y_speed;
  this.update = function() {
    ctx.drawImage(player_img, this.x, this.y, this.size, this.size); //draw player
  };
}
