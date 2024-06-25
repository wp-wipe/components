export type Attr = { value: any };

export type AttrOptions = {
  key: string;
  default?: any;
  type: allTypes;
  label: string;

  withFocalPoint?: boolean;
};

export type allTypes = "link" | "image" | "color" | "number" | "string";

export type AttrFct = (options: AttrOptions) => Attr;
export type AttrFctType = (options: Omit<AttrOptions, "type">) => Attr;
