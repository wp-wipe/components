import { __ } from "@wordpress/i18n";
import { ToggleControl } from '@wordpress/components';
import type { LinkWipeAttrOptions, WipeTypeOptions } from "../Tools/Types";

// @ts-ignore
import { PanelBody, Panel, Dropdown, Button, FlexItem, __experimentalDropdownContentWrapper as DropdownContentWrapper, __experimentalHStack as HStack, } from "@wordpress/components";

// @ts-ignore
import { URLInput, __experimentalLinkControl as LinkControl, InspectorControls, BlockControls } from "@wordpress/block-editor";

export const EditBoolean = ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<LinkWipeAttrOptions>) => {


  const value = attributes[options.key] || false;

  function setValue(value: boolean) {
    setAttributes({
      [options.key]: value,
    });
  }
  if (groupRender) {
    return (
      <>
        <ToggleControl
          __nextHasNoMarginBottom
          checked={value}
          label={options.label}
          onChange={(value: boolean) => setValue(value)}
        />
      </>
    );
  }
  return (
    <>
      {!options.group && (
        <InspectorControls>
          <PanelBody
            title={options.label}
            initialOpen={false}>
            <Panel>
              <ToggleControl
                __nextHasNoMarginBottom
                checked={value}
                label={options.label}
                onChange={(value: boolean) => setValue(value)}
              />
            </Panel>
          </PanelBody>
        </InspectorControls>
      )}
    </>
  );
};
