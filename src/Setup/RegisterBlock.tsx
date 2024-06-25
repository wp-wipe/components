import { registerBlockType, type BlockConfiguration } from "@wordpress/blocks";

import Context from "../Tools/Context";
import { render as ReactRender } from "@wordpress/element";
import type { AttrFct, AttrFctType, AttrOptions, allTypes } from "../Tools/Types";
import { EditLinkAttr } from "../AttrEdits/EditLinkAttr";
import { EditImageAttr } from "../AttrEdits/EditImageAttr";


type CustomBlockOptions<TAttributes extends Record<string, any>> = {
  name: string;
  title: string;
  render: ({ attr }: { attr: AttrFct } & Record<string, AttrFctType>) => JSX.Element;
} & Omit<BlockConfiguration<TAttributes>, "edit" | "save" | "attributes">;

function buildVariantesAttributes(attr: AttrFct): Record<string, AttrFct> {
  const types = ["link", "image", "color", "number", "string"];
  const allTypes = {} as Record<string, AttrFct>;
  types.forEach((type: allTypes) => {
    allTypes[type] = function (options: Omit<AttrOptions, "type">) {
      return attr({
        ...options,
        type,
      });
    };
  });

  return allTypes;
}

export function RegisterBlock(options: CustomBlockOptions<any>) {
  const { name, render, ...otherOptions } = options;
  const Render = render;

  // BUILDING ATTRIBUTES
  const attributes: any = {};

  const registredAttrs = [] as AttrOptions[];

  const attr: AttrFct = (options) => {
    registredAttrs.push(options);
    const typeMap = {
      link: "object",
      image: "object",
      color: "string",
      number: "number",
      string: "string",
    };

    attributes[options.key] = {
      type: typeMap[options.type],
    };
    let internalValue = options.default || "";
    return {
      get value() {
        return internalValue;
      },
      set value(newValue) {
        internalValue = newValue;
        attributes[options.key] = {
          type: typeof newValue || "string",
        };
      },
    };
  };
  ReactRender(Render({ attr, ...buildVariantesAttributes(attr) }), document.createElement("div"));

  registerBlockType(name, {
    ...otherOptions,
    attributes,
    edit: (props) => {
      new Context().set("edit");
      const { attributes, setAttributes } = props;
      const attr: AttrFct = (options) => {
        return {
          get value() {
            return attributes[options.key];
          },
          set value(newValue) {
            setAttributes({ [options.key]: newValue });
          },
        };
      };
      return (
        <>
          {registredAttrs.map((attr) => {
            if (attr.type === "link")
              return (
                <EditLinkAttr
                  options={attr}
                  setAttributes={setAttributes}
                  attributes={attributes}
                />
              );
          })}
          {registredAttrs.map((attr) => {
            if (attr.type === "image")
              return (
                <EditImageAttr
                  options={attr}
                  setAttributes={setAttributes}
                  attributes={attributes}
                />
              );
          })}
          <Render
            attr={attr}
            {...buildVariantesAttributes(attr)}></Render>
        </>
      );
    },
    save: ({ attributes }) => {
      new Context().set("save");

      const attr: AttrFct = (options) => {
        return {
          get value() {
            return attributes[options.key];
          },
          // @ts-ignore
          set value(newValue) {},
        };
      };
      return (
        <>
          <Render
            attr={attr}
            {...buildVariantesAttributes(attr)}></Render>
        </>
      );
    },
  });
}
