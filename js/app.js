class Enemy{
  constructor (x, y, speed){
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
  }

  update(dt){
    this.x += this.speed * dt;

    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 512);
    }

    if (player.x < this.x + 60 &&
        player.x + 37 > this.x &&
        player.y < this.y + 25 &&
        30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
  }

  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

}

class Player{
  constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = 'images/char-boy.png';
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

      if (this.y < 0) {
        this.x = 200;
        this.y = 380;

      }
  }

  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(pressedKey) {
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

  let allEnemies = [];
  const enemyPosition = [60, 140, 220];
  let player = new Player(200, 380, 50);
  let enemy;
  for(pos of enemyPosition){
    enemy = new Enemy(0, pos, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
  }

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
