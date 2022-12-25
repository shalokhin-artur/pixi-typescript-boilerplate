import { Container, Loader, Sprite, Ticker } from "pixi.js";
import { Group, Tween } from "tweedle.js";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";

const excludedKeys = ['assets/cards/backB.png', 'assets/cards/backR.png']
const PADDING = 50
const CARD_SHIFT = 20
const CARD_AMOUNT = 144

export default class CardStack {
  readonly container = new Container()
  private interval: NodeJS.Timer | null = null
  ticker?: Ticker

  constructor () {
    this.container.sortableChildren = true
  }

  public render() {
    let countCards = CARD_AMOUNT;
    const resources = Loader.shared.resources;
    let cursor = 0
    let texturePaths = Object.keys(resources.cards.textures!).filter((key: string) => !excludedKeys.includes(key));
    const tail = texturePaths.splice(0, 16)
    texturePaths = [...texturePaths, ...tail]

    while (countCards > 0) {
      const cardSprite = new Sprite(resources.cards.textures![texturePaths[cursor]])
      const ratio = cardSprite.width / cardSprite.height
      cardSprite.width = SCREEN_WIDTH * 0.2
      cardSprite.height = cardSprite.width / ratio
      cardSprite.x = PADDING
      cardSprite.y = SCREEN_HEIGHT - cardSprite.height - PADDING - (countCards * CARD_SHIFT)

      this.container.addChild(cardSprite)

      countCards -= 1

      if (cursor === texturePaths.length) {
        cursor = 0
      } else {
        cursor += 1
      }
    }
  }
  
  public clear() {
    this.ticker?.stop()
    this.ticker?.destroy()
    this.container.removeChildren()
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  public play() {
    let cursor = CARD_AMOUNT;
    let zIndex = 0;

    this.ticker = Ticker.shared.add(() => {
      Group.shared.update();
    })

    this.interval = setInterval(() => {
      const sprite = this.container.children[cursor - 1] as Sprite
      sprite.zIndex = zIndex
      new Tween(sprite)
        .to({ 
          x: SCREEN_WIDTH - PADDING - sprite.width,
          y: SCREEN_HEIGHT - sprite.height - PADDING - ((zIndex + 1) * CARD_SHIFT)
        }, 2000)
        .start()
      
      cursor -= 1
      zIndex += 1
    }, 1000)
  }
}