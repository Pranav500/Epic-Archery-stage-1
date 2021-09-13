class Base {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.width = 100;
      this.height = 100;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("base1.png");
      World.add(world, this.body);

    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("brown");
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  
