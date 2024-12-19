import { WipeAttrOptions } from "./Types";

export class Context {
  private static _instance: Context;
  private value: "prepare" | "edit" | "save";
  private attributes: Record<string, any> = {};
  private attributesSetter: ((a: any) => void) | null = null;
  private registredAttributes: WipeAttrOptions[];
  private groups: { label: string }[] = [];

  constructor() {
    if (!Context._instance) {
      Context._instance = this;
    }
    return Context._instance;
  }
  set(value: "prepare" | "edit" | "save") {
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
  setAttributesSetter(setter: (a: any) => void) {
    this.attributesSetter = setter;
    return this;
  }
  getAttributesSetter() {
    return this.attributesSetter;
  }
  getGroups() {
    return this.groups;
  }
  setGroups(groups: { label: string }[]) {
    this.groups = groups;
    return this;
  }
}
