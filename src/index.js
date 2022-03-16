import Phaser from "phaser";
import { dogPhaser } from "./scenes/dogPhaser.js";

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 900,
  parent: "container",
  // autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  pixelArt: true,
  scene: [dogPhaser],
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 200
      }
    }
  }
};

// eslint-disable-next-line
const game = new Phaser.Game(config);
