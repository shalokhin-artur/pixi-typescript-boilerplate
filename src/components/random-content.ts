import { Container, Loader, Sprite, Text } from "pixi.js";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";
import { between } from '../utils';

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const words = loremIpsum.split(' ');

export default class RandomContent {
  readonly container = new Container()
  readonly elemsContainer = new Container()
  private interval?: NodeJS.Timer;

  constructor() {}

  public render() {
    const resources = Loader.shared.resources;
    const texturePaths = Object.keys(resources.cards.textures!);
    const randomFontSize = between(20, 41);
    const length = 3
    
    for (let i = 0; i < length; i++) {
      const shiftX = (i > 0 && i < length) ? this.elemsContainer.width + 20 : this.elemsContainer.width;
      const randomInt = between(0, 2)
      
      if (randomInt) {
        const randomInt = between(0, words.length + 1);
        const randomWord = words[randomInt];
        const text = new Text(randomWord, {
          fontSize: SCREEN_WIDTH / randomFontSize,
          fill: 'white',
        })

        text.position.set(SCREEN_WIDTH / 2 + shiftX, SCREEN_HEIGHT / 2 - (text.height / 2))
        this.elemsContainer.addChild(text)
      } else {
        const randomInt = between(0, texturePaths.length)
        const randomTextureName = texturePaths[randomInt];
        const sprite = new Sprite(resources.cards.textures![randomTextureName])
        const ratio = sprite.width / sprite.height
        sprite.width = SCREEN_WIDTH * 0.2
        sprite.height = sprite.width / ratio
        sprite.position.set(SCREEN_WIDTH / 2 + shiftX, SCREEN_HEIGHT / 2 - (sprite.height / 2))
        this.elemsContainer.addChild(sprite);
      }
    }
     
    this.elemsContainer.x = -(this.elemsContainer.width / 2)

    this.container.addChild(this.elemsContainer)
  }

  public play() {
    this.interval = setInterval(() => {
      this.elemsContainer.removeChildren()
      this.render()
    }, 2000)
  }

  public clear() {
    clearInterval(this.interval)
    this.elemsContainer.removeChildren()
  }
}