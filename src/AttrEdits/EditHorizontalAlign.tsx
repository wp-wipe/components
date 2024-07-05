import { PanelBody, Panel } from "@wordpress/components";
import { __, _x } from "@wordpress/i18n";
import type { HalignWipeAttrOptions, WipeTypeOptions } from "../Tools/Types";
// @ts-ignore
import { InspectorControls, BlockControls, BlockAlignmentControl } from "@wordpress/block-editor";

import { __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon } from "@wordpress/components";

import { alignNone, positionCenter, positionLeft, positionRight, stretchFullWidth, stretchWide } from "@wordpress/icons";

const choices = {
  none: {
    Icon: alignNone,
    title: _x("None", "Alignment option"),
  },
  left: {
    Icon: positionLeft,
    title: __("Align left"),
  },
  center: {
    Icon: positionCenter,
    title: __("Align center"),
  },
  right: {
    Icon: positionRight,
    title: __("Align right"),
  },
  wide: {
    Icon: stretchWide,
    title: __("Wide width"),
  },
  full: {
    Icon: stretchFullWidth,
    title: __("Full width"),
  },
};

export const EditHorizontalAlign = ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<HalignWipeAttrOptions>) => {
  const onChange = (alignment: string) => {
    console.log(alignment);
    setAttributes({ [options.key]: alignment });
  };

  const controls = (options.controls || ["left", "center", "right"]) as ("left" | "center" | "right")[];
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
          const { Icon, title } = choices[control];
          return (
            <ToggleGroupControlOptionIcon
              key={control}
              icon={Icon}
              label={title}
              value={control}
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
                  const { Icon, title } = choices[control];
                  return (
                    <ToggleGroupControlOptionIcon
                      key={control}
                      icon={Icon}
                      label={title}
                      value={control}
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
          <BlockAlignmentControl
            value={alignement}
            onChange={onChange}
            controls={controls}
          />
        </BlockControls>
      </>
    </>
  );
};
