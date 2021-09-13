class Archer {
    constructor(x, y) {
      var options = {
        isStatic: false,
        restitution: 0.6
      };
      this.width = 100;
      this.height = 150;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("Archer.png");
      World.add(world, this.body);

    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
