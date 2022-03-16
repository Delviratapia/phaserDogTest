import Phaser from "phaser";

export class dogPhaser extends Phaser.Scene {
  constructor() {
    super({ key: "dogPhaser", active: true });
  }

  preload() {
    // Background
    this.load.image("whiteClouds", "assets/images/clouds-white.png");
    this.load.image("whiteCloudsSmall", "assets/images/clouds-white-small.png");
    this.load.image("bg", "assets/backgrounds/Full-Background.png");

    // Images
    this.load.image("tramp", "assets/images/tramp.png");

    // Sprite
    this.load.aseprite({
      key: "dogRun",
      textureURL: "assets/sprites/dogRun.png",
      atlasURL: "assets/sprites/dogRun.json"
    });
  }

  create() {
    // Background

    this.bg = this.add.image(500, 200, "bg");

    // images

    this.tramp1 = this.add.image(250, 700, "tramp").setScale(0.8);
    this.tramp2 = this.add.image(1650, 700, "tramp").setScale(0.8);
    this.whiteClouds = this.add.tileSprite(640, 200, 1280, 400, "whiteClouds");
    this.whiteCloudsSmall = this.add.tileSprite(640, 200, 1280, 400, "whiteCloudsSmall");


    // Camera
    // this.cameras.main.setBounds(0, 0, bg.displayWidth, bg.displayHeight);
    // this.cameras.main.setSize(bg.displayWidth, bg.displayHeight);
    // this.cameras.main.setViewport(0, 0, 800, 600);

    // Sprite
    this.anims.createFromAseprite("dogRun", ["idle", "run"]);
    this.anims.get("run").repeat = -1;
    this.dogRun = this.physics.add.sprite(900, 650, "dogRun")
      .setScale(0.5)
      .play("idle");

    this.dogRun.setCollideWorldBounds(true);
    // Input
    this.cursors = this.input.keyboard.createCursorKeys();
    // this.cameras.main.startFollow(this.dogRun, false);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.dogRun.x -= 18;
      this.dogRun.play("run", true).setFlipX(true);
    } else if (this.cursors.right.isDown) {
      this.dogRun.x += 18;
      this.dogRun.play("run", true).setFlipX(false);
    } else {
      this.dogRun.play("idle", true);
    }

    this.whiteClouds.tilePositionX += 0.5;
    this.whiteCloudsSmall.tilePositionX += 0.25;

    // this.moveDog();
    // if (this.cursors.up.isDown && this.dogRun.body.touching.down) {
    //   this.dogRun.body.velocity.y = -100;
    // }
  }

  // moveDog() {
  //   if (this.cursors.left.isDown) {
  //     this.dogRun.setVelocityX(-300);
  //   } else if (this.cursors.right.isDown) {
  //     this.dogRun.setVelocityX(300);
  //   } else {
  //     this.dogRun.setVelocityX(0);
  //     this.dogRun.setVelocityY(0);
  //   }
  //   if (this.cursors.up.isDown && this.dogRun.body.touching.down) {
  //     this.dogRun.setVelocityY(-300);
  //   }
  // }
}
