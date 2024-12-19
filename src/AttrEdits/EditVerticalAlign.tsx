import { PanelBody, Panel } from "@wordpress/components";
import { __, _x } from "@wordpress/i18n";
import type { ValignWipeAttrOptions, WipeTypeOptions } from "../Tools/Types";
// @ts-ignore
import { InspectorControls, BlockControls, BlockVerticalAlignmentControl } from "@wordpress/block-editor";

import { __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon } from "@wordpress/components";

import { alignTop, alignCenter, alignBottom, alignStretch, spaceBetween } from "./ui/Icons";

const choices = {
  top: {
    icon: alignTop,
    label: _x("Align top", "Block vertical alignment setting"),
    value: "top",
  },
  center: {
    icon: alignCenter,
    label: _x("Align center", "Block vertical alignment setting"),
    value: "center",
  },
  bottom: {
    icon: alignBottom,
    label: _x("Align bottom", "Block vertical alignment setting"),
    value: "bottom",
  },
  stretch: {
    icon: alignStretch,
    label: _x("Stretch", "Block vertical alignment setting"),
    value: "stretch",
  },
  "space-between": {
    icon: spaceBetween,
    label: _x("Space between", "Block vertical alignment setting"),
    value: "space-between",
  },
};

export const EditVerticalAlign = ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<ValignWipeAttrOptions>) => {
  const onChange = (alignment: string) => {
    setAttributes({ [options.key]: alignment });
  };

  const controls: ("top" | "center" | "bottom")[] = (options.controls || ["top", "center", "bottom"]) as ("top" | "center" | "bottom")[];
  const alignement = attributes[options.key] || controls[0];
  if (groupRender)
    return (
      <ToggleGroupControl
        __nextHasNoMarginBottom
        isBlock
        label={options.label}
        value={alignement}
        onChange={onChange}>
        {controls.map((control) => {
          const { icon, label, value } = choices[control];
          return (
            <ToggleGroupControlOptionIcon
              key={value}
              icon={icon}
              label={label}
              value={value}
            />
          );
        })}
      </ToggleGroupControl>
    );
  return (
    <>
      {!options.group && (
        <InspectorControls>
          <PanelBody
            title={options.label}
            initialOpen={false}>
            <Panel>
              <ToggleGroupControl
                __nextHasNoMarginBottom
                isBlock
                label=""
                value={alignement}
                onChange={onChange}>
                {controls.map((control) => {
                  const { icon, label, value } = choices[control];
                  return (
                    <ToggleGroupControlOptionIcon
                      key={value}
                      icon={icon}
                      label={label}
                      value={value}
                    />
                  );
                })}
              </ToggleGroupControl>
            </Panel>
          </PanelBody>
        </InspectorControls>
      )}

      <>
        <BlockControls group="block">
          <BlockVerticalAlignmentControl
            value={alignement}
            onChange={onChange}
            controls={controls}
          />
        </BlockControls>
      </>
    </>
  );
};
