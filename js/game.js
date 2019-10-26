import Phaser from "phaser";
import Scene from "./scene.js";

let config = {
  width: 256,
  height: 272,
  backgroundColor: 0x000000,
  scene: [Scene],
  pixelArt: true
};

let game = new Phaser.Game(config);
