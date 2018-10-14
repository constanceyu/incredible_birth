var song, analyzer, time;
var system;

function preload() {
  song = loadSound('Falling Out.mp3');
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 255);
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  system = new ParticleSystem(createVector(width / 2, height / 2));
}

function draw() {
  background(0, 30, 100);
  noStroke();
  // textAlign(LEFT);
  // textSize(12);
  // fill(0);
  // text(song.duration(), 10, 20);
  // text(song.currentTime(), 10, 40);

  time = song.currentTime();
  var amp = analyzer.getLevel();

  if (time < 5.4) {
    flashingRects();
  }
  if (time > 5.4 && time < 15.7) {
    randomQuad();
  }
  if (time > 15.7) {
    frameRate(60);
    if (time < 29) {
      push();
      colorMode(RGB, 255, 255, 255);
      fill(255, 255, 255, 80);
      ellipse(width / 2, height / 2, amp * 200, amp * 200);
      ellipse(width / 2, height / 2, amp * 500, amp * 500);
      if (time > 17.6)
        ellipse(width / 2, height / 2, amp * 950, amp * 950);
      if (time > 19.3)
        ellipse(width / 2, height / 2, amp * 1500, amp * 1500);
      if (time > 21.1)
        ellipse(width / 2, height / 2, amp * 2000, amp * 2000);
      pop();
    }
    if (time > 22.2) {
      if (time < 26.2) {
        system.addParticle();
      }
      system.run();
    }

    if (time > 29.5) {
      if (time < 32.5) {
        for (i = 0; i < 5; i++)
          system.addParticle();
      }
      if (time > 29.6) {
        push();
        colorMode(RGB, 255, 255, 255);
        fill(255, 255, 255, 80);
        ellipse(width / 2, height / 2, amp * 200, amp * 200);
        ellipse(width / 2, height / 2, amp * 400, amp * 400);
        ellipse(width / 2, height / 2, amp * 600, amp * 600);
        ellipse(width / 2, height / 2, amp * 800, amp * 800);
        ellipse(width / 2, height / 2, amp * 1000, amp * 1000);
        pop();
      }
      system.run();
    }
  }
}

function randomQuad() {
  background(255);
  frameRate(2.3);
  from = color(0, 10, 255, 255 * 0.8);
  to = color(360, 60, 100, 255 * 0.8);
  c1 = lerpColor(from, to, 0.33);
  c2 = lerpColor(from, to, 0.66);

  if (time > 5.5) {
    for (var i = 0; i < 3; i++) {
      fill(from);
      quad(random(0, 340), random(height / 2 + 40),
        random(0, 340), random(height / 2 + 40),
        random(0, 340), random(height / 2 + 40),
        random(0, 340), random(height / 2 + 40));
    }
  }
  if (time > 8.8) {
    for (var i = 0; i < 3; i++) {
      fill(c1);
      quad(random(260, 600), random(height / 2 + 40),
        random(260, 600), random(height / 2 + 40),
        random(260, 600), random(height / 2 + 40),
        random(260, 600), random(height / 2 + 40));
    }
  }
  if (time > 12.3) {
    for (var i = 0; i < 3; i++) {
      fill(c2);
      quad(random(260, 600), random(height / 2 - 40, height),
        random(260, 600), random(height / 2 - 40, height),
        random(260, 600), random(height / 2 - 40, height),
        random(260, 600), random(height / 2 - 40, height));
    }
  }
  if (time > 14) {
    for (var i = 0; i < 3; i++) {
      fill(to);
      quad(random(0, 340), random(height / 2 - 40, height),
        random(0, 340), random(height / 2 - 40, height),
        random(0, 340), random(height / 2 - 40, height),
        random(0, 340), random(height / 2 - 40, height));
    }
  }


}

function flashingRects() {
  noStroke();
  if (time < 1.5) {
    rectMode(CENTER);
    for (var i = 0; i < 11; i++) {
      var x = 50 + i * 50;
      var y = 300;
      var h = 350;
      var s = random(0, 60);
      var alpha = 255 - ((time - 2) * 69);

      if (time < 2)
        fill(h, s, 100, 255);
      else
        fill(h, s, 100, alpha);
      if (time > i * 0.1)
        rect(x, y, 40, 40);
    }
  }

  if (time > 1.5) {
    rectMode(CORNER);
    for (var i = 0; i < 5; i++) {
      if (i == 2)
        continue;
      var x = 200 + i * 40;
      var s = random(0, 60);
      var alpha = 255 - ((time - 2) * 78);
      if (time < 2)
        fill(350, s, 100, 255);
      else
        fill(350, s, 100, alpha);
      rect(x, 180, 40, 40);
    }

    for (var i = 0; i < 7; i++) {
      var x = 160 + i * 40;
      var s = random(0, 60);
      var alpha = 255 - ((time - 2) * 78);
      if (time < 2)
        fill(350, s, 100, 255);
      else
        fill(350, s, 100, alpha);
      rect(x, 220, 40, 40);
    }

    for (var i = 0; i < 7; i++) {
      var x = 160 + i * 40;
      var s = random(0, 60);
      var alpha = 255 - ((time - 2) * 78);
      if (time < 2)
        fill(350, s, 100, 255);
      else
        fill(350, s, 100, alpha);
      rect(x, 260, 40, 40);
    }

    for (var i = 0; i < 5; i++) {
      var x = 200 + i * 40;
      var s = random(0, 60);
      var alpha = 255 - ((time - 2) * 78);
      if (time < 2)
        fill(350, s, 100, 255);
      else
        fill(350, s, 100, alpha);
      rect(x, 300, 40, 40);
    }

    for (var i = 0; i < 3; i++) {
      var x = 240 + i * 40;
      var s = random(0, 60);
      var alpha = 255 - ((time - 2) * 78);
      if (time < 2)
        fill(350, s, 100, 255);
      else
        fill(350, s, 100, alpha);
      rect(x, 340, 40, 40);
    }

    var x = 160 + i * 40;
    var s = random(0, 60);

    var alpha = 255 - ((time - 2) * 78);
    if (time < 2)
      fill(350, s, 100, 255);
    else
      fill(350, s, 100, alpha);
    rect(x, 380, 40, 40);
  }

}

// A simple Particle class
// ! Change Velocity to change direction!
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-15, 15), random(-15, 15));
  if (time > 22.7 && time < 23.5)
    this.velocity = createVector(random(-15, 0), random(-15, 0));
  if (time > 23.5 && time < 24.4)
    this.velocity = createVector(random(0, 15), random(-15, 0));
  if (time > 24.4 && time < 25.2)
    this.velocity = createVector(random(0, 15), random(0, 15));
  if (time > 25.2 && time < 26.2)
    this.velocity = createVector(random(-15, 0), random(0, 15));
  this.position = position.copy();
  this.lifespan = 100.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 3;
};

// Method to display
// !Where to change the color and gradiant!
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(360, this.lifespan * 0.5, 100);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function() {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};