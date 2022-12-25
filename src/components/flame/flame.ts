import { Container } from "pixi.js";
import config from './config.json'
import * as particles from '@pixi/particle-emitter';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { Emitter } from "@pixi/particle-emitter";


export default class Flame {
  readonly container = new Container()
  private emitter?: Emitter

  constructor() {}

  public play() {
    this.emitter = new particles.Emitter(this.container, config)
    const scale = 2
    this.container.scale.set(scale)
    this.emitter.updateOwnerPos(SCREEN_WIDTH / 2 / scale, SCREEN_HEIGHT / 2 / scale);
  }

  public clear() {
    this.emitter?.destroy()
    this.container.removeChildren()
  }

  public update(delta: number) {
    this.emitter?.update(delta * 0.008)
  }
}