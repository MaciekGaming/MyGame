import Phaser from "phaser";

export default class Scene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("bg", "assets/bg.png");
    this.load.spritesheet("ldk", "assets/ldk.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.image("ship2przeciwnik", "assets/ship2przeciwnik.png");
    this.load.image("ship2przeciwnik1", "assets/ship2przeciwnik1.png");
  }

  create() {
    this.background = this.add.image(256 / 2, 272 / 2, "bg");
    this.ldk = this.add.sprite(256 / 2, 272 / 2, "ldk");
    this.shipprzeciwnicy = this.add.image(56, 56, "ship2przeciwnik");
    this.shipprzeciwnicy = this.add.image(160, 20, "ship2przeciwnik1");

    this.keys = this.input.keyboard.createCursorKeys();
    this.anims.create({
      key: "ldk_anim",
      frames: this.anims.generateFrameNumbers("ldk"),
      frameRate: 10,
      repeat: -1
    });
    this.ldk.play("ldk_anim");
  }

  update() {
    let speed = 2;
    if (this.keys.left.isDown) {
      this.ldk.x = this.ldk.x - speed;
      if (this.ldk.x < 0) {
        this.ldk.x = 0;
      }
    }
    if (this.keys.right.isDown) {
      this.ldk.x = this.ldk.x + speed;
      if (this.ldk.x > 256) {
        this.ldk.x = 256;
      }
    }
    if (this.keys.up.isDown) {
      this.ldk.flipY = false;
      this.ldk.y = this.ldk.y - speed;
      if (this.ldk.y < 0) {
        this.ldk.y = 0;
      }
    }
    if (this.keys.down.isDown) {
      this.ldk.flipY = true;
      this.ldk.y = this.ldk.y + speed;
      if (this.ldk.y > 272) {
        this.ldk.y = 272;
      }
    }
  }
}
