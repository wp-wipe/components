import { PanelBody, Panel, ToolbarButton, Popover } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { link } from "@wordpress/icons";
import { useState } from "@wordpress/element";
import type { LinkWipeAttrOptions, WipeTypeOptions } from "../Tools/Types";
// @ts-ignore
import { URLInput, __experimentalLinkControl as LinkControl, InspectorControls, BlockControls } from "@wordpress/block-editor";

export const EditLinkAttr = ({ options, attributes, setAttributes, groupRender }: WipeTypeOptions<LinkWipeAttrOptions>) => {
  const [isEditingURL, setIsEditingURL] = useState(false);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const startEditing = () => setIsEditingURL(true);

  if (typeof attributes[options.key] == "string") {
    setAttributes({ [options.key]: { url: attributes[options.key] } });
  }

  const url = attributes[options.key]?.url || "";

  function setUrl(url: { url: string; opensInNewTab?: boolean; nofollow?: boolean }) {
    setAttributes({
      [options.key]: {
        ...attributes[options.key],
        ...url,
      },
    });
  }
  if (groupRender)
    return (
      <URLInput
        isFullWidth={true}
        value={url}
        onChange={(url: string) => setUrl({ url })}
      />
    );
  return (
    <>
      <InspectorControls>
        <PanelBody
          title={options.label}
          initialOpen={false}>
          <Panel>
            <URLInput
              isFullWidth={true}
              value={url}
              onChange={(url: string) => setUrl({ url })}
            />
          </Panel>
        </PanelBody>
      </InspectorControls>

      <BlockControls>
        <ToolbarButton
          icon={link}
          label={options.label}
          onClick={startEditing}
          ref={setPopoverAnchor}
        />
        {isEditingURL && (
          <Popover
            placement="top-start"
            onClose={() => {
              setIsEditingURL(false);
            }}
            anchor={popoverAnchor}
            focusOnMount={isEditingURL ? "firstElement" : false}
            __unstableSlotName={"__unstable-block-tools-after"}
            shift>
            <LinkControl
              value={attributes[options.key]}
              onChange={(url: { url: string; opensInNewTab: boolean; nofollow: boolean }) => {
                setUrl(url);
                setIsEditingURL(false);
              }}
              onRemove={() => { }}
              forceIsEditingLink={isEditingURL}
            />
          </Popover>
        )}
      </BlockControls>
    </>
  );
};
