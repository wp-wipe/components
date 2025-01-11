import { Context } from "../Tools/Context";
import { InnerBlocks, useInnerBlocksProps } from "@wordpress/block-editor";

export const Childs = ({ ...props }: Record<string, any>) => {
  const context = new Context().get();
  const className = props.className || '';




  if (context === "edit") {
    const innerBlocksProps = useInnerBlocksProps({
      ...props
    }, {
      ...props
    });
    return <div {...innerBlocksProps} className={`${className} `} />;
  }
  if (context === "save") {
    const innerBlocksProps = useInnerBlocksProps.save({
      ...props
    });
    return <div {...innerBlocksProps} />;
  }
  return null;
};
