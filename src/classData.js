export class PriceData {
  constructor(sink, hot, cold, gas, el) {
    this.sink = sink;
    this.hot = hot;
    this.cold = cold;
    this.gas = gas;
    this.el = el;
  }
}
export class MouthData {
  constructor(hot, cold, gas, el) {
    this.hot = hot;
    this.cold = cold;
    this.gas = gas;
    this.el = el;
  }
}

export class PlanData {
  constructor(plan) {
    this.plan = plan;
  }
  get value() {
    return Number(Number(this.plan).toFixed(2));
  }
}
