declare module '@wp-wipe/components/AttrEdits/EditColorAttr' {
  import type { ColorWipeAttrOptions, WipeTypeOptions } from "@wp-wipe/components/Tools/Types";
  export const EditColorAttr: ({ options, attributes, setAttributes }: WipeTypeOptions<ColorWipeAttrOptions>) => import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/AttrEdits/EditHorizontalAlign' {
  import type { HalignWipeAttrOptions, WipeTypeOptions } from "@wp-wipe/components/Tools/Types";
  export const EditHorizontalAlign: ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<HalignWipeAttrOptions>) => import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/AttrEdits/EditImageAttr' {
  import type { ImageWipeAttrOptions, WipeTypeOptions } from "@wp-wipe/components/Tools/Types";
  export const EditImageAttr: ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<ImageWipeAttrOptions>) => import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/AttrEdits/EditLinkAttr' {
  import type { LinkWipeAttrOptions, WipeTypeOptions } from "@wp-wipe/components/Tools/Types";
  export const EditLinkAttr: ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<LinkWipeAttrOptions>) => import("react/jsx-dev-runtime").JSX.Element;

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
declare module '@wp-wipe/components/Components/EditOnly' {
  export const EditOnly: ({ children }: {
      children: any;
  }) => import("react/jsx-dev-runtime").JSX.Element;

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
declare module '@wp-wipe/components/Components/PageMeta' {
  export const PageMeta: ({ meta, placeholder }: {
      meta: string;
      placeholder?: string;
  }) => string | import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/Components/PageThumbnail' {
  type ImageOptions = {} & Record<string, any>;
  export const PageThumbnail: ({ ...props }: ImageOptions) => import("react/jsx-dev-runtime").JSX.Element;
  export {};

}
declare module '@wp-wipe/components/Components/PageTitle' {
  export const PageTitle: () => import("react/jsx-dev-runtime").JSX.Element | "[page-title]";

}
declare module '@wp-wipe/components/Components/SaveOnly' {
  export const SaveOnly: ({ children }: {
      children: any;
  }) => import("react/jsx-dev-runtime").JSX.Element;

}
declare module '@wp-wipe/components/Components/Text' {
  import type { Attr } from "@wp-wipe/components/Tools/Types";
  type TextOptions = {
      children: Attr;
  } & Record<string, any>;
  export const Text: ({ children, ...props }: TextOptions) => any;
  export {};

}
declare module '@wp-wipe/components/Components/_Align' {

}
declare module '@wp-wipe/components/Components/_Colors' {

}
declare module '@wp-wipe/components/Setup/RegisterBlock' {
  /// <reference types="react" />
  import { type BlockConfiguration } from "@wordpress/blocks";
  import type { WipeAttrFct, WipeAttrOptions, ColorWipeAttrOptions, HalignWipeAttrOptions, ImageWipeAttrOptions, LinkWipeAttrOptions, StringWipeAttrOptions, ValignWipeAttrOptions, WipeAttrFctPartial } from "@wp-wipe/components/Tools/Types";
  import { NumberWipeAttrOptions } from "@wp-wipe/components/Tools/Types";
  interface CustomBlockOptions extends Omit<BlockConfiguration, "attributes" | "edit" | "save"> {
      name: string;
      title: string;
      render: (options: {
          image: WipeAttrFctPartial<ImageWipeAttrOptions>;
          link: WipeAttrFctPartial<LinkWipeAttrOptions>;
          color: WipeAttrFctPartial<ColorWipeAttrOptions>;
          number: WipeAttrFctPartial<NumberWipeAttrOptions>;
          string: WipeAttrFctPartial<StringWipeAttrOptions>;
          valign: WipeAttrFctPartial<ValignWipeAttrOptions>;
          halign: WipeAttrFctPartial<HalignWipeAttrOptions>;
          group: (label: string) => {
              label: string;
          };
          attr: WipeAttrFct<WipeAttrOptions>;
      }) => JSX.Element;
  }
  export function RegisterBlock(options: CustomBlockOptions): void;
  export {};

}
declare module '@wp-wipe/components/Tools/Context' {
  import { WipeAttrOptions } from "@wp-wipe/components/Tools/Types";
  export class Context {
      private static _instance;
      private value;
      private attributes;
      private registredAttributes;
      constructor();
      set(value: any): this;
      get(): any;
      setAttributes(attributes: Record<string, any>): this;
      getAttributes(): Record<string, any>;
      setRegistredAttributes(attributes: WipeAttrOptions[]): this;
      getRegistredAttributes(): WipeAttrOptions[];
  }

}
declare module '@wp-wipe/components/Tools/Thumbnail' {
  export function getThumbnail(): {
      thumbnail_id: number;
      thumbnail_url: any;
  };
  export function setThumbnail(thumbnail_id: number): void;

}
declare module '@wp-wipe/components/Tools/Types' {
  export type Attr = {
      value: any;
  };
  type valigncontrols = "top" | "center" | "bottom" | "stretch" | "space-between";
  type haligncontrols = "none" | "left" | "center" | "right" | "wide" | "full" | "narrow" | "normal";
  export type WipeGroup = {
      label: string;
  };
  export type WipeAttrOptions = {
      key: string;
      label: string;
      group?: WipeGroup;
      default?: any;
      type: "link" | "image" | "color" | "number" | "string" | "valign" | "halign" | "array";
  };
  export interface LinkWipeAttrOptions extends WipeAttrOptions {
      default?: any;
      type: "link";
  }
  export interface ImageWipeAttrOptions extends WipeAttrOptions {
      default?: any;
      type: "image";
      withFocalPoint?: boolean;
      asFeaturedImage?: boolean;
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
  export type WipeAttrFctPartial<T extends WipeAttrOptions> = (options: Omit<T, "type">) => Attr;
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
  export { EditOnly } from "@wp-wipe/components/Components/EditOnly";
  export { SaveOnly } from "@wp-wipe/components/Components/SaveOnly";
  export { PageTitle } from "@wp-wipe/components/Components/PageTitle";
  export { PageMeta } from "@wp-wipe/components/Components/PageMeta";
  export { Context } from "@wp-wipe/components/Tools/Context";

}
declare module '@wp-wipe/components' {
  import main = require('@wp-wipe/components/index');
  export = main;
}