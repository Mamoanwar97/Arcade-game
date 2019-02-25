class Enemy{
  constructor (x, y, speed){
    this.x = x; //Enemy x coordinate
    this.y = y; //Enemy Y coordinate
    this.speed = speed; //Enemy speed
    this.sprite = 'images/enemy-bug.png'; // Enemy photo
  }

  update(dt){
    this.x += this.speed * dt; //Enemy moves randomly

    if (this.x > 550) { //reset the enemies' coordinate when cross the window boundaries
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 512);
    }

    if(player.x <= this.x + 61 &&  //check if x within range of playe's x-coordinate start and end
        player.x + 38 >= this.x &&
        player.y <= this.y + 25 &&  //check if y within range of player's y-coordinate start and end
        30 + player.y >= this.y){ //reset
        player.x = 200;
        player.y = 380;
    }
  }

  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

}

class Player{
  constructor(x, y, speed) { // x-coordinate, y-coordinate, speed
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = 'images/char-boy.png'; //player image
  }

  update() {
      // Prevent player from moving beyond canvas wall boundaries
      if (this.y > 380) {
          this.y = 380;
      }

      if (this.x > 400) {
          this.x = 400;
      }

      if (this.x < 0) {
          this.x = 0;
      }

      if (this.y < 0) { //Win condition
        alert('Congratulations! You have done it :D');
        this.x = 200;
        this.y = 380;
      }
  }

  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(pressedKey) { //keys' control
      switch (pressedKey) {
          case 'left':
              this.x -= this.speed + 50;
              break;
          case 'up':
              this.y -= this.speed + 30;
              break;
          case 'right':
              this.x += this.speed + 50;
              break;
          case 'down':
              this.y += this.speed + 30;
              break;
      }
  }
}

  let allEnemies = [new Enemy(0, 60, 100 + Math.floor(Math.random() * 512)),
                    new Enemy(0, 140, 100 + Math.floor(Math.random() * 512)),
                    new Enemy(0, 220, 100 + Math.floor(Math.random() * 512))];

  let player = new Player(200, 380, 50); //set player coordinate and speed


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
