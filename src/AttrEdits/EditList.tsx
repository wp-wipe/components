import { __ } from "@wordpress/i18n";
import { SelectControl } from '@wordpress/components';
import type { LinkWipeAttrOptions, WipeTypeOptions } from "../Tools/Types";

// @ts-ignore
import { PanelBody, Panel, Dropdown, Button, FlexItem, __experimentalDropdownContentWrapper as DropdownContentWrapper, __experimentalHStack as HStack, } from "@wordpress/components";

// @ts-ignore
import { URLInput, __experimentalLinkControl as LinkControl, InspectorControls, BlockControls } from "@wordpress/block-editor";

export const EditList = ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<LinkWipeAttrOptions>) => {


  const value = attributes[options.key] || false;

  function setValue(value: boolean) {
    setAttributes({
      [options.key]: value,
    });
  }
  const optionsChoices = [] as {
    label: string,
    value: string
  }[];


  Object.keys(options.options).forEach((key) => {
    optionsChoices.push({
      label: options.options[key],
      value: key
    });
  })
  console.log(optionsChoices)

  if (groupRender) {
    /**/

    return (
      <>
        <SelectControl
          __nextHasNoMarginBottom
          label="Label"
          value={value}
          onChange={(value: boolean) => setValue(value)}
          options={[
            {
              disabled: true,
              label: '',
              value: ''
            },
            ...optionsChoices
          ]}
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
              <SelectControl
                __nextHasNoMarginBottom
                label="Label"
                value={value}
                onChange={(value: boolean) => setValue(value)}
                options={optionsChoices}
              />
            </Panel>
          </PanelBody>
        </InspectorControls>
      )}
    </>
  );
};
