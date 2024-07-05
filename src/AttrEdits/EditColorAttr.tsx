import { PanelBody, Panel, ToolbarButton, Popover } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { link } from "@wordpress/icons";
import { useState } from "@wordpress/element";
import type { ColorWipeAttrOptions, WipeTypeOptions } from "../Tools/Types";
// @ts-ignore
import { URLInput, __experimentalLinkControl as LinkControl, InspectorControls, BlockControls, PanelColorSettings } from "@wordpress/block-editor";

export const EditColorAttr = ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<ColorWipeAttrOptions>) => {
  const color = attributes[options.key] || "";

  function setColor(color: string) {
    setAttributes({
      [options.key]: color,
    });
  }
  
  return (
    <>
      {!options.group && (
        <InspectorControls>
          <PanelBody
            title={options.label}
            initialOpen={false}>
            <Panel>
              <PanelColorSettings
                title=""
                colorSettings={[
                  {
                    value: color,
                    onChange: setColor,
                    label: __(options.label),
                  },
                ]}
              />
            </Panel>
          </PanelBody>
        </InspectorControls>
      )}
    </>
  );
};
