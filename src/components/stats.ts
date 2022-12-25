import StatsJS from 'stats.js';

export default class Stats {
  private stats = new StatsJS()
  constructor() {
    this.stats.showPanel(0)
    document.body.appendChild(this.stats.dom);
  }

  public update() {
    this.stats.begin();
    // monitored code goes here
    this.stats.end();
  }
}