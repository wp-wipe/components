declare module '@wp-wipe/components/AttrEdits/EditHorizontalAlign' {
  import type { HalignWipeAttrOptions, WipeTypeOptions } from "@wp-wipe/components/Tools/Types";
  export const EditHorizontalAlign: ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<HalignWipeAttrOptions>) => import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/AttrEdits/EditImageAttr' {
  import type { ImageWipeAttrOptions, WipeTypeOptions } from "@wp-wipe/components/Tools/Types";
  export const EditImageAttr: ({ options, attributes, setAttributes }: WipeTypeOptions<ImageWipeAttrOptions>) => import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/AttrEdits/EditLinkAttr' {
  import type { LinkWipeAttrOptions, WipeTypeOptions } from "@wp-wipe/components/Tools/Types";
  export const EditLinkAttr: ({ options, attributes, setAttributes }: WipeTypeOptions<LinkWipeAttrOptions>) => import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/AttrEdits/EditVerticalAlign' {
  import type { ValignWipeAttrOptions, WipeTypeOptions } from "@wp-wipe/components/Tools/Types";
  export const EditVerticalAlign: ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<ValignWipeAttrOptions>) => import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/AttrEdits/ui/Icons' {
  export const alignBottom: import("react/jsx-dev-runtime").JSX.Element;
  export const alignCenter: import("react/jsx-dev-runtime").JSX.Element;
  export const alignTop: import("react/jsx-dev-runtime").JSX.Element;
  export const alignStretch: import("react/jsx-dev-runtime").JSX.Element;
  export const spaceBetween: import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/Components/Childs' {
  export const Childs: ({ ...props }: Record<string, any>) => import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/Components/Image' {
  import type { Attr } from "@wp-wipe/components/Tools/Types";
  type ImageOptions = {
      src: Attr;
  } & Record<string, any>;
  export const Image: ({ src, ...props }: ImageOptions) => import("react/jsx-dev-runtime").JSX.Element;
  export {};

}
declare module '@wp-wipe/components/Components/Link' {
  import type { Attr } from "@wp-wipe/components/Tools/Types";
  type LinkOptions = {
      href: Attr;
  } & Record<string, any>;
  export const Link: ({ href, children, ...props }: LinkOptions) => import("react/jsx-dev-runtime").JSX.Element;
  export {};

}
declare module '@wp-wipe/components/Components/Text' {
  import type { Attr } from "@wp-wipe/components/Tools/Types";
  type TextOptions = {
      children: Attr;
  } & Record<string, any>;
  export const Text: ({ children, ...props }: TextOptions) => import("react/jsx-dev-runtime").JSX.Element;
  export {};

}
declare module '@wp-wipe/components/Components/_Align' {

}
declare module '@wp-wipe/components/Components/_Colors' {

}
declare module '@wp-wipe/components/Setup/RegisterBlock' {
  import { type BlockConfiguration } from "@wordpress/blocks";
  import type { WipeAttrFct, ColorWipeAttrOptions, HalignWipeAttrOptions, ImageWipeAttrOptions, LinkWipeAttrOptions, StringWipeAttrOptions, ValignWipeAttrOptions } from "@wp-wipe/components/Tools/Types";
  import { NumberWipeAttrOptions } from "@wp-wipe/components/Tools/Types";
  interface CustomBlockOptions extends Omit<BlockConfiguration, "attributes" | "edit" | "save"> {
      name: string;
      title: string;
      render: (options: {
          image: WipeAttrFct<ImageWipeAttrOptions>;
          link: WipeAttrFct<LinkWipeAttrOptions>;
          color: WipeAttrFct<ColorWipeAttrOptions>;
          number: WipeAttrFct<NumberWipeAttrOptions>;
          string: WipeAttrFct<StringWipeAttrOptions>;
          valign: WipeAttrFct<ValignWipeAttrOptions>;
          halign: WipeAttrFct<HalignWipeAttrOptions>;
          group: (label: string) => {
              label: string;
          };
      }) => JSX.Element;
  }
  export function RegisterBlock(options: CustomBlockOptions): void;
  export {};

}
declare module '@wp-wipe/components/Tools/Context' {
  export default class Context {
      private static _instance;
      private value;
      constructor();
      set(value: any): void;
      get(): any;
  }

}
declare module '@wp-wipe/components/Tools/Types' {
  export type Attr = {
      value: any;
  };
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
  export type WipeAttrFctPartial<T extends WipeAttrOptions> = (options: Omit<T, 'type'>) => Attr;
  export type WipeTypeOptions<T extends WipeAttrOptions> = {
      options: T;
      groupRender?: boolean;
  } & Record<string, any>;
  export {};

}
declare module '@wp-wipe/components/index' {
  export { Text } from "@wp-wipe/components/Components/Text";
  export { Link } from "@wp-wipe/components/Components/Link";
  export { Image } from "@wp-wipe/components/Components/Image";
  export { Childs } from "@wp-wipe/components/Components/Childs";
  export { RegisterBlock } from "@wp-wipe/components/Setup/RegisterBlock";

}
declare module '@wp-wipe/components' {
  import main = require('@wp-wipe/components/index');
  export = main;
}