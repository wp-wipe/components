import { PanelBody, Panel, Button, ButtonGroup, FocalPointPicker } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import type { AttrOptions } from "../Tools/Types";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
// @ts-ignore
import { URLInput, __experimentalLinkControl as LinkControl, InspectorControls, BlockControls } from "@wordpress/block-editor";

type LinkOptions = {  
  options: AttrOptions; 
} & Record<string, any>;

export const EditImageAttr = ({ options, attributes, setAttributes }: LinkOptions) => {
  if (typeof attributes[options.key] == "string") {
    attributes[options.key] = { url: attributes[options.key], x: 0.5, y: 0.5 };
    setAttributes({ [options.key]: { url: attributes[options.key], x: 0.5, y: 0.5 } });
  }

  function onFileSelect(file: { id: number; url: string }) {
    setAttributes({
      [options.key]: {
        ...attributes[options.key],
        ...file,
      },
    });
  }
  function setFocalPoint(focalPoint: { x: number; y: number }) {
    setAttributes({
      [options.key]: {
        ...attributes[options.key],
        ...focalPoint,
      },
    });
  }
  function removeImage() {
    setAttributes({
      [options.key]: {},
    });
  }
  const internalValue = attributes[options.key] || {};

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={options.label}
          initialOpen={true}>
          <Panel>
            {!!internalValue.id && options?.withFocalPoint && (
              <FocalPointPicker
                __nextHasNoMarginBottom
                __next40pxDefaultSize
                label={__("Focal point")}
                url={internalValue.url}
                value={internalValue ? { x: internalValue.x, y: internalValue.y } : { x: 0.5, y: 0.5 }}
                onChange={(value) => setFocalPoint(value)}
                onDragStart={(value) => setFocalPoint(value)}
                onDrag={(value) => setFocalPoint(value)}
              />
            )}
            <MediaUploadCheck>
              <ButtonGroup>
                <MediaUpload
                  onSelect={onFileSelect}
                  value={internalValue.id}
                  render={({ open }) => {
                    const label = internalValue.id ? __("Replace image") : __("Select");
                    return (
                      <Button
                        onClick={open}
                        variant="primary">
                        <span dangerouslySetInnerHTML={{ __html: label }}></span>
                      </Button>
                    );
                  }} 
                />
                {internalValue.id && ( 
                  <Button
                    onClick={removeImage}
                    variant="secondary">
                    <span dangerouslySetInnerHTML={{ __html: __("Remove image") }}></span>
                  </Button>
                )}
              </ButtonGroup>
            </MediaUploadCheck>
          </Panel>
        </PanelBody>
      </InspectorControls>
    </>
  );
};
