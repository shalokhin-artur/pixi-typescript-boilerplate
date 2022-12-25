import { Container, Ticker } from "pixi.js";
import config from './config.json'
import * as particles from '@pixi/particle-emitter';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";


export default class Flame {
  readonly container = new Container()
  private ticker?: Ticker;

  constructor() {}

  public play() {
    const emitter = new particles.Emitter(this.container, config)
    const scale = 2
    this.container.scale.set(scale)
    emitter.updateOwnerPos(SCREEN_WIDTH / 2 / scale, SCREEN_HEIGHT / 2 / scale);

    this.ticker = Ticker.shared.add((delta) => {
      emitter.update(delta * 0.002)
    })
  }

  public clear() {
    this.ticker?.stop()
    this.ticker?.destroy()
    this.container.removeChildren()
  }
}