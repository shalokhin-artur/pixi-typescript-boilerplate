import { Ticker } from 'pixi.js';
import StatsJS from 'stats.js';

export default class Stats {
  stats = new StatsJS()
  constructor() {
    this.stats.showPanel(0)
    document.body.appendChild(this.stats.dom);
    Ticker.shared.add(() => {
      this.stats.begin();
      // monitored code goes here
      this.stats.end();
    })
  }
}