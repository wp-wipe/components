declare module '@wp-wipe/components/AttrEdits/EditImageAttr' {
  import type { AttrOptions } from "@wp-wipe/components/Tools/Types";
  type LinkOptions = {
      options: AttrOptions;
  } & Record<string, any>;
  export const EditImageAttr: ({ options, attributes, setAttributes }: LinkOptions) => import("react/jsx-dev-runtime").JSX.Element;
  export {};

}
declare module '@wp-wipe/components/AttrEdits/EditLinkAttr' {
  import type { AttrOptions } from "@wp-wipe/components/Tools/Types";
  type LinkOptions = {
      options: AttrOptions;
  } & Record<string, any>;
  export const EditLinkAttr: ({ options, attributes, setAttributes }: LinkOptions) => import("react/jsx-dev-runtime").JSX.Element;
  export {};

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
  import type { AttrFct, AttrFctType } from "@wp-wipe/components/Tools/Types";
  type CustomBlockOptions<TAttributes extends Record<string, any>> = {
      name: string;
      title: string;
      render: ({ attr }: {
          attr: AttrFct;
      } & Record<string, AttrFctType>) => JSX.Element;
  } & Omit<BlockConfiguration<TAttributes>, "edit" | "save" | "attributes">;
  export function RegisterBlock(options: CustomBlockOptions<any>): void;
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