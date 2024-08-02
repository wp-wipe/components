import { WipeAttrOptions } from "./Types";

export class Context {
  private static _instance: Context;
  private value: any;
  private attributes: Record<string, any> = {};
  private registredAttributes: WipeAttrOptions[];

  constructor() {
    if (!Context._instance) {
      Context._instance = this;
    }
    return Context._instance;
  }
  set(value: any) {
    this.value = value;
    return this;
  }
  get() {
    return this.value;
  }
  setAttributes(attributes: Record<string, any>) {
    this.attributes = attributes;
    return this;
  }
  getAttributes() {
    return this.attributes;
  }
  setRegistredAttributes(attributes: WipeAttrOptions[]) {
    this.registredAttributes = attributes;
    return this;
  }
  getRegistredAttributes() {
    return this.registredAttributes;
  }
}
