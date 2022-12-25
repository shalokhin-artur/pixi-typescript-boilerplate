import { Container, Ticker } from "pixi.js";
import config from './config.json'
import * as particles from '@pixi/particle-emitter';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { Emitter } from "@pixi/particle-emitter";


export default class Flame {
  readonly container = new Container()
  private ticker?: Ticker;
  private emitter?: Emitter

  constructor() {}

  public play() {
    this.emitter = new particles.Emitter(this.container, config)
    const scale = 2
    this.container.scale.set(scale)
    this.emitter.updateOwnerPos(SCREEN_WIDTH / 2 / scale, SCREEN_HEIGHT / 2 / scale);

    if (this.emitter) {
      this.ticker = Ticker.shared.add((delta) => {
        this.emitter!.update(delta * 0.002)
      })
    }
  }

  public clear() {
    this.emitter?.destroy()
    this.ticker?.stop()
    this.ticker?.destroy()
    this.container.removeChildren()
  }
}