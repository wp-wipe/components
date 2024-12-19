import { __ } from "@wordpress/i18n";
import type { ColorWipeAttrOptions, WipeTypeOptions } from "../Tools/Types";
// @ts-ignore
import { PanelBody, Panel, Dropdown, Button, FlexItem, ColorIndicator, __experimentalDropdownContentWrapper as DropdownContentWrapper, __experimentalHStack as HStack, } from "@wordpress/components";
// @ts-ignore
import { URLInput, __experimentalLinkControl as LinkControl, InspectorControls, BlockControls, __experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown, __experimentalColorGradientControl as ColorGradientControl, } from "@wordpress/block-editor";

import { useSelect } from '@wordpress/data';
import { __dangerousOptInToUnstableAPIsOnlyForCoreModules } from '@wordpress/private-apis';

const renderToggle =
  (settings: any) =>
    ({ onToggle, isOpen }) => {
      const { colorValue, label } = settings;

      const toggleProps = {
        onClick: onToggle,
        className: `block-editor-panel-color-gradient-settings__dropdown ${isOpen ? 'is-open' : ''}`,
        'aria-expanded': isOpen,
      };

      return (
        <Button __next40pxDefaultSize {...toggleProps}>
          <LabeledColorIndicator
            colorValue={colorValue}
            label={label}
          />
        </Button>
      );
    };
const LabeledColorIndicator = ({ colorValue, label }) => (
  <HStack justify="flex-start">
    <ColorIndicator
      className="block-editor-panel-color-gradient-settings__color-indicator"
      colorValue={colorValue}
    />
    <FlexItem
      className="block-editor-panel-color-gradient-settings__color-name"
      title={label}
    >
      {label}
    </FlexItem>
  </HStack>
);
export const EditColorAttr = ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<ColorWipeAttrOptions>) => {

  const themeColors = useSelect((select) => {
    const { getSettings } = select('core/block-editor') as { getSettings: any };;
    const baseColors = getSettings('color.palette')?.colors;
    return Array.isArray(baseColors) ? baseColors : [];
  }, []);

  let color = attributes[options.key] || "";
  if (options.returnAsPalette) {
    const foundColor = themeColors.find((c) => c.slug === color);
    color = foundColor ? foundColor.color : "";
  }



  function setColor(color: string) {
    if (options.returnAsPalette) {
      const foundColor = themeColors.find((c) => c.color === color);
      setAttributes({
        [options.key]: foundColor ? foundColor.slug : null,
      })
      return
    }
    setAttributes({
      [options.key]: color,
    });
  }

  function EditorField() {
    const controlProps = {
      clearable: true,
      colorValue: color,
      label: __(options.label),
      onColorChange: setColor,
      showTitle: false,
    };
    const toggleSettings = {
      label: __(options.label),
      colorValue: color,
    };



    return <Dropdown
      popoverProps={{
        placement: 'left-start',
        offset: 36,
        shift: true,
      }}
      className="block-editor-tools-panel-color-gradient-settings__dropdown block-editor-tools-panel-color-gradient-settings__item"
      style={{ marginTop: '0px' }}
      renderToggle={renderToggle(toggleSettings)}
      renderContent={() => (
        <DropdownContentWrapper paddingSize="none">
          <div className="block-editor-panel-color-gradient-settings__dropdown-content components-dropdown block-editor-tools-panel-color-gradient-settings__dropdown">
            <ColorGradientControl
              colorValue={color}
              onColorChange={setColor}
              settings={{}}
              {...controlProps}
            />
          </div>
        </DropdownContentWrapper>
      )}
    >
    </Dropdown>
  }

  if (groupRender) {
    return (
      <>

        <EditorField />
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
              <EditorField />
            </Panel>
          </PanelBody>
        </InspectorControls>
      )}
    </>
  );
};
