export default class Context {
  private static _instance: Context;
  private value: any;
  constructor() {
    if (!Context._instance) {
      Context._instance = this;
    }
    return Context._instance;
  }
  set(value: any) {
    this.value = value;
  }
  get() {
    return this.value;
  }
}
