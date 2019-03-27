function Ball(x, y, vx, vy, color, radius) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = radius;
  this.color = color;

  //vẽ bóng
  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  //bóng di chuyển
  this.move = function () {
    this.x += this.vx;
    this.y += this.vy;
  }

  this.update = function() {
    this.draw();
    this.move();
    this.wallCollision();
  }
  
  this.hitWall = function() {
    if ((this.x + this.radius) >= width) {
      this.vx = -(this.vx);
    }
  
    if ((this.x - this.radius) <= 0) {
      this.vx = -(this.vx);
    }
  
    if ((this.y - this.radius) <= 0) {
      this.vy = -(this.vy);
    }
    if ((this.y + this.radius) >= height) {
      this.vy = -(this.vy);
    }
  }

}