export type Attr = { value: any };

type valigncontrols = "top" | "center" | "bottom" | "stretch" | "space-between";
type haligncontrols = "none" | "left" | "center" | "right" | "wide" | "full" | "narrow" | "normal";

export type WipeGroup = {
  label: string;
};

export type WipeAttrOptions = {
  key: string;
  group?: WipeGroup;
  hideControls?: boolean;
  asFeaturedImage?: boolean;
  label?: string;
  default?: any;
  type: "link" | "image" | "color" | "number" | "string" | "valign" | "halign" | "array" | "object" | "boolean" | "list" | "file";
  options?: Record<string, string>;
};
export interface FileWipeAttrOptions extends Omit<WipeAttrOptions, "type"> {
  type: "file";
}
export interface LinkWipeAttrOptions extends Omit<WipeAttrOptions, "type"> {
  type: "link";
}
export interface ImageWipeAttrOptions extends Omit<WipeAttrOptions, "type"> {
  type: "image";
  withFocalPoint?: boolean;
  asFeaturedImage?: boolean;
}
export interface ColorWipeAttrOptions extends Omit<WipeAttrOptions, "type"> {
  type: "color";
  returnAsPalette?: boolean;
}
export interface NumberWipeAttrOptions extends Omit<WipeAttrOptions, "type"> {
  type: "number";
}
export interface StringWipeAttrOptions extends Omit<WipeAttrOptions, "type"> {
  type: "string";
}
export interface ValignWipeAttrOptions extends Omit<WipeAttrOptions, "type"> {
  type: "valign";
  controls?: valigncontrols[];
}
export interface HalignWipeAttrOptions extends Omit<WipeAttrOptions, "type"> {
  type: "halign";
  controls?: haligncontrols[];
}
export interface BooleanWipeAttrOptions extends Omit<WipeAttrOptions, "type"> {
  type: "boolean";
}

export type WipeAttrFct<T extends WipeAttrOptions> = (options: T) => Attr;
export type WipeAttrFctPartial<T extends WipeAttrOptions> = (options: Omit<T, "type">) => Attr;

export type WipeTypeOptions<T extends WipeAttrOptions> = {
  options: T;
  groupRender?: boolean;
} & Record<string, any>;
