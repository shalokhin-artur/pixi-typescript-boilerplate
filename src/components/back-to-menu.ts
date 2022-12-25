import { Container, Text, utils } from "pixi.js"
import { SCREEN_WIDTH } from "../constants"

export default class BackToMenu {
  readonly emiter = new utils.EventEmitter()
  readonly container = new Container()

  constructor() {}

  public render() {
    const text = new Text('Back to menu', {
      fontSize: '70px',
      fill: 'white'
    })

    text.interactive = true
    text.on('pointerdown', () => {
      this.emiter.emit('backToMenu')
    }) 
    
    text.position.set(SCREEN_WIDTH - text.width - 70, 70)
    this.container.addChild(text)
  }

  public clear() {
    this.container.removeChildren()
  }
}