var pole_img1 = document.getElementById("pole_img1"); //get pole1 image
var pole_img2 = document.getElementById("pole_img2"); //get pole2 image

if(localStorage.highscore==undefined) {
  localStorage.highscore=0;
}
var counter = 0;

var Pole = function(x,gap,gap_y) {
  this.x = x;
  this.gap = gap;
  this.gap_y=gap_y;
  this.update = function() {
    this.x-=player.x_speed; //move pole backwards (creates ilusion that player is moving forwards)
    ctx.drawImage(pole_img1, this.x, this.gap_y+this.gap, player.size*1.5, canvas.height); //draw pole
    ctx.drawImage(pole_img2, this.x, 0, player.size*1.5, this.gap_y); //draw top pole
    if(this.x+player.size*1.5<=0) {
      this.x=canvas.width+player.size;
      this.gap_y=canvas.height/Math.floor((Math.random() * 10) + 2);
      counter+=1;
    }
    if(player.x+player.size>this.x&&player.x<this.x+player.size*1.5){if(player.y<this.gap_y||player.y+player.size>this.gap_y+this.gap){
      window.location.reload(true);
      if(counter>localStorage.highscore*1) {
        alert("New High Score! \n New: " + counter + "\n Previous: " + localStorage.highscore);
        localStorage.highscore = counter;
      } else {
        alert("Score: " + counter + "\n Highscore: " + localStorage.highscore);
      }
      counter=0;
      }}
  };
}
