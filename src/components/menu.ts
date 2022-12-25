import { Container, Text, utils } from "pixi.js";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";

export enum Tasks {
  task1 = 'Task 1',
  task2 = 'Task 2',
  task3 = 'Task 3'
}
const list = [Tasks.task1, Tasks.task2, Tasks.task3]

export default class Menu {
  readonly emiter = new utils.EventEmitter()
  readonly container = new Container()

  constructor() {}

  public render() {
    list.forEach((item, index) => {
      const text = new Text(item, {
        fontSize: '70px',
        fill: 'white'
      })

      text.interactive = true
      text.on('pointerdown', () => {
        this.emiter.emit('chooseTask', item)
      }) 

      const offset = 100
      const paddingBottom = (index + 1) * offset
      
      text.position.set(SCREEN_WIDTH / 2 - (text.width / 2), SCREEN_HEIGHT / 2 + paddingBottom - (text.height * list.length))

      this.container.addChild(text)
    })
  }

  public clear() {
    this.container.removeChildren()
  }
}