import { Application, Loader, utils } from "pixi.js";
import Stats from './components/stats';
import Menu, { Tasks } from './components/menu';
import BackToMenu from './components/back-to-menu';
import CardStack from './components/card-stack';
import RandomContent from './components/random-content'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';
import Flame from './components/flame/flame'

export default class Game {
  readonly loader = Loader.shared;
  readonly app: Application;
  private menu = new Menu()
  private backToMenu = new BackToMenu()
  private cardStack = new CardStack()
  private randomContent = new RandomContent()
  private activeTask: null | Tasks = null;
  private flame = new Flame()
  

  constructor() {
    this.app = new Application({
      backgroundColor: utils.string2hex('#9a95da'),
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    document.body.appendChild(this.app.view);
    this.app.renderer.view.style.width = '100%';
    this.app.renderer.view.style.height = 'auto';
    new Stats()
}
  public loadResources() {
    Loader.shared.add([
      { name: 'cards', url: 'assets/cards/cards/cards.json' }
    ])
    Loader.shared.onComplete.once(this.startGame, this);
    Loader.shared.load();
  }

  private startGame() {
    this.menu.render();
    this.manageChooseTask();
    this.manageBackToMenu();

    this.app.stage.addChild(this.randomContent.container)
    this.app.stage.addChild(this.cardStack.container)
    this.app.stage.addChild(this.flame.container)
    this.app.stage.addChild(this.menu.container)
    this.app.stage.addChild(this.backToMenu.container)
    
  }

  private manageBackToMenu() {
    this.backToMenu.emiter.on('backToMenu', () => {
      switch (this.activeTask) {
        case Tasks.task1: 
          this.cardStack.clear()
          break;

        case Tasks.task2: 
          this.randomContent.clear()
          break

        case Tasks.task3: 
          this.flame.clear()
          break
          
      }
      this.backToMenu.clear()
      this.menu.render()
    })
  }

  private manageChooseTask() {
    this.menu.emiter.on('chooseTask', (event: Tasks) => {
      this.menu.clear()
      this.backToMenu.render()
      this.activeTask = event;

      switch (event) {
        case Tasks.task1: 
          this.cardStack.render();
          this.cardStack.play();
          break;

        case Tasks.task2: 
          this.randomContent.render();
          this.randomContent.play();
          break;

        case Tasks.task3: 
          this.flame.play();
          break;
      }
    })
  }
}