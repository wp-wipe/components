export type Attr = { value: any };

type valigncontrols = "top" | "center" | "bottom" | "stretch" | "space-between";
type haligncontrols = "none" | "left" | "center" | "right" | "wide" | "full";

export type WipeGroup = {
  label: string;
};

export type WipeAttrOptions = {
  key: string;
  label: string;
  group?: WipeGroup;
  default?: any;
  type: "link" | "image" | "color" | "number" | "string" | "valign" | "halign";
};

export interface LinkWipeAttrOptions extends WipeAttrOptions {
  default?: any;
  type: "link";
}
export interface ImageWipeAttrOptions extends WipeAttrOptions {
  default?: any;
  type: "image";
  withFocalPoint?: boolean;
}
export interface ColorWipeAttrOptions extends WipeAttrOptions {
  default?: any;
  type: "color";
}
export interface NumberWipeAttrOptions extends WipeAttrOptions {
  default?: any;
  type: "number";
}
export interface StringWipeAttrOptions extends WipeAttrOptions {
  default?: any;
  type: "string";
}
export interface ValignWipeAttrOptions extends WipeAttrOptions {
  default?: any;
  type: "valign";
  controls?: valigncontrols[];
}
export interface HalignWipeAttrOptions extends WipeAttrOptions {
  default?: any;
  type: "halign";
  controls?: haligncontrols[];
}

export type WipeAttrFct<T extends WipeAttrOptions> = (options: T) => Attr;
export type WipeAttrFctPartial<T extends WipeAttrOptions> = (options: Omit<T,'type'>) => Attr;

export type WipeTypeOptions<T extends WipeAttrOptions> = {
  options: T;
  groupRender?: boolean;
} & Record<string, any>;
