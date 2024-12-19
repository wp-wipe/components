import { registerBlockType, type BlockConfiguration } from "@wordpress/blocks";
import type { WipeAttrOptions, ColorWipeAttrOptions, HalignWipeAttrOptions, ImageWipeAttrOptions, LinkWipeAttrOptions, ValignWipeAttrOptions } from "../Tools/Types";

import { Context } from "../Tools/Context";
import { EditLinkAttr } from "../AttrEdits/EditLinkAttr";
import { EditImageAttr } from "../AttrEdits/EditImageAttr";
import { EditVerticalAlign } from "../AttrEdits/EditVerticalAlign";
import { EditHorizontalAlign } from "../AttrEdits/EditHorizontalAlign";
import { Panel, PanelBody } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { EditColorAttr } from "../AttrEdits/EditColorAttr";
import { EditBoolean } from "../AttrEdits/EditBoolean";
import { EditList } from "../AttrEdits/EditList";
import { EditFileAttr } from "../AttrEdits/EditFileAttr";


interface CustomBlockOptions extends Omit<BlockConfiguration, "attributes" | "edit" | "save"> {
  name: string;
  title: string;
  render: (options?: Record<string, any>) => JSX.Element;
}

type EditRenderFct = ({ options, attributes, setAttributes, groupRender }) => JSX.Element;
function getRenderer(options: WipeAttrOptions) {
  switch (options.type) {
    case "image":
      return [EditImageAttr, options] as [EditRenderFct, ImageWipeAttrOptions];
    case "file":
      return [EditFileAttr, options] as [EditRenderFct, ImageWipeAttrOptions];
    case "link":
      return [EditLinkAttr, options] as [EditRenderFct, LinkWipeAttrOptions];
    case "valign":
      return [EditVerticalAlign, options] as [EditRenderFct, ValignWipeAttrOptions];
    case "halign":
      return [EditHorizontalAlign, options] as [EditRenderFct, HalignWipeAttrOptions];
    case "color":
      return [EditColorAttr, options] as [EditRenderFct, ColorWipeAttrOptions];
    case "boolean":
      return [EditBoolean, options] as [EditRenderFct, ColorWipeAttrOptions];
    case "list":
      return [EditList, options] as [EditRenderFct, ColorWipeAttrOptions];
    case "string":
    case "number":
    default:
      return [() => <div></div>, options] as [EditRenderFct, WipeAttrOptions];
  }
}

function checkForEditor() {
  // @ts-ignore
  return (window?.wp?.element && window?.wp?.blockEditor);
}



export function RegisterBlock(options: CustomBlockOptions) {
  if (!checkForEditor()) return;
  // BUILDING ATTRIBUTES
  const attributes: any = {};
  const groups = [] as { label: string }[];
  const registredAttrs = [] as WipeAttrOptions[];
  new Context()
    .set("prepare")
    .setAttributes(attributes)
    .setRegistredAttributes(registredAttrs)
    .setAttributesSetter(null)
    .setGroups(groups);

  const { name, render, ...otherOptions } = options;
  const Render = render;





  Render({})

  const formattedArguments = {} as Record<string, Record<string, any>>;
  registredAttrs.forEach((attr) => {
    formattedArguments[attr.key] = {
      type: attr.type,
      default: attr.default,
      hideControls: attr.hideControls,
    };
  });

  registerBlockType(name, {
    ...otherOptions,
    attributes: formattedArguments,
    edit: (props) => {
      new Context().set("edit").setAttributes(props.attributes).setAttributesSetter(props.setAttributes).setGroups(groups);
      const { attributes, setAttributes } = props;


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
                      .filter(a => a.hideControls !== true)
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

          {registredAttrs.filter(a => a.hideControls !== true).map((attr) => {
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
          <Render {...props}></Render>
        </>
      );
    },
    save: (props) => {
      new Context().set("save").setAttributes(props.attributes).setAttributesSetter(null);
      return (
        <>
          <Render  {...props}></Render>
        </>
      );
    },
  });
}
