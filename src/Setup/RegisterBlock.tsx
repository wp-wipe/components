import { registerBlockType, type BlockConfiguration } from "@wordpress/blocks";
import type { WipeAttrFct, WipeAttrOptions, ColorWipeAttrOptions, HalignWipeAttrOptions, ImageWipeAttrOptions, LinkWipeAttrOptions, StringWipeAttrOptions, ValignWipeAttrOptions, WipeAttrFctPartial } from "../Tools/Types";

import { Context } from "../Tools/Context";
import { render as ReactRender } from "@wordpress/element";
import { EditLinkAttr } from "../AttrEdits/EditLinkAttr";
import { EditImageAttr } from "../AttrEdits/EditImageAttr";
import { EditVerticalAlign } from "../AttrEdits/EditVerticalAlign";
import { EditHorizontalAlign } from "../AttrEdits/EditHorizontalAlign";
import { NumberWipeAttrOptions } from "../Tools/Types";
import { Panel, PanelBody } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { EditColorAttr } from "../AttrEdits/EditColorAttr";

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
    group: (label: string) => { label: string };
    attr: WipeAttrFct<WipeAttrOptions>;
  }) => JSX.Element;
}

type EditRenderFct = ({ options, attributes, setAttributes, groupRender }) => JSX.Element;
function getRenderer(options: WipeAttrOptions) {
  switch (options.type) {
    case "image":
      return [EditImageAttr, options] as [EditRenderFct, ImageWipeAttrOptions];
    case "link":
      return [EditLinkAttr, options] as [EditRenderFct, LinkWipeAttrOptions];
    case "valign":
      return [EditVerticalAlign, options] as [EditRenderFct, ValignWipeAttrOptions];
    case "halign":
      return [EditHorizontalAlign, options] as [EditRenderFct, HalignWipeAttrOptions];
    case "color":
      return [EditColorAttr, options] as [EditRenderFct, ColorWipeAttrOptions];
    case "string":
    case "number":
    default:
      return [() => <div></div>, options] as [EditRenderFct, WipeAttrOptions];
  }
}

function buildVariantesAttributes(attr: WipeAttrFct<WipeAttrOptions>) {
  return {
    attr: (options: WipeAttrOptions) => attr(options),
    image: ((option: Omit<ImageWipeAttrOptions, "type">) => attr({ ...option, type: "image" })) as WipeAttrFctPartial<ImageWipeAttrOptions>,
    link: ((option: Omit<LinkWipeAttrOptions, "type">) => attr({ ...option, type: "link" })) as WipeAttrFctPartial<LinkWipeAttrOptions>,
    color: ((option: Omit<ColorWipeAttrOptions, "type">) => attr({ ...option, type: "color" })) as WipeAttrFctPartial<ColorWipeAttrOptions>,
    number: ((option: Omit<NumberWipeAttrOptions, "type">) => attr({ ...option, type: "number" })) as WipeAttrFctPartial<NumberWipeAttrOptions>,
    string: ((option: Omit<StringWipeAttrOptions, "type">) => attr({ ...option, type: "string" })) as WipeAttrFctPartial<StringWipeAttrOptions>,
    valign: ((option: Omit<ValignWipeAttrOptions, "type">) => attr({ ...option, type: "valign" })) as WipeAttrFctPartial<ValignWipeAttrOptions>,
    halign: ((option: Omit<HalignWipeAttrOptions, "type">) => attr({ ...option, type: "halign" })) as WipeAttrFctPartial<HalignWipeAttrOptions>,
  } as const;
}

export function RegisterBlock(options: CustomBlockOptions) {
  const { name, render, ...otherOptions } = options;
  const Render = render;

  // BUILDING ATTRIBUTES
  const attributes: any = {};
  const groups = [] as { label: string }[];
  const registredAttrs = [] as WipeAttrOptions[];
  new Context().set("prepare").setAttributes(attributes).setRegistredAttributes(registredAttrs);

  const attr: WipeAttrFct<WipeAttrOptions> = (options) => {
    registredAttrs.push(options);
    const typeMap = {
      link: "object",
      image: "object",
      color: "string",
      number: "number",
      string: "string",
      valign: "string",
      halign: "string",
    };

    attributes[options.key] = {
      type: typeMap[options.type] || options.type,
      default: options.default,
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
  const group = (label: string) => {
    if (groups.find((group) => group.label === label)) {
      return groups.find((group) => group.label === label);
    }
    const obj = { label } as const;
    groups.push(obj);
    return obj;
  };
  ReactRender(Render({ ...buildVariantesAttributes(attr), group }), document.createElement("div"));

  registerBlockType(name, {
    ...otherOptions,
    attributes,
    edit: (props) => {
      new Context().set("edit");
      const { attributes, setAttributes } = props;
      const attr: WipeAttrFct<WipeAttrOptions> = (options) => {
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
          <InspectorControls>
            {groups.map((group) => {
              return (
                <PanelBody
                  key={group.label}
                  title={group.label}
                  initialOpen={false}>
                  <Panel>
                    {registredAttrs
                      .filter((attr) => attr.group === group)
                      .map((attr) => {
                        const [RenderAttrFunction, options] = getRenderer(attr);
                        return (
                          <RenderAttrFunction
                            key={options.key}
                            groupRender={true}
                            options={options}
                            setAttributes={setAttributes}
                            attributes={attributes}
                          />
                        );
                      })}
                  </Panel>
                </PanelBody>
              );
            })}
          </InspectorControls>
          {registredAttrs.map((attr) => {
            const [RenderAttrFunction, options] = getRenderer(attr);
            return (
              <RenderAttrFunction
                groupRender={false}
                key={options.key}
                options={options}
                setAttributes={setAttributes}
                attributes={attributes}
              />
            );
          })}
          <Render
            {...buildVariantesAttributes(attr)}
            group={(label: string) => ({ label })}></Render>
        </>
      );
    },
    save: ({ attributes }) => {
      new Context().set("save");

      const attr: WipeAttrFct<WipeAttrOptions> = (options) => {
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
            {...buildVariantesAttributes(attr)}
            group={(label: string) => ({ label })}></Render>
        </>
      );
    },
  });
}
