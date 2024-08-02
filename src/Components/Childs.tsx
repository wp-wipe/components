import {Context} from "../Tools/Context";
import { InnerBlocks } from "@wordpress/block-editor";

export const Childs = ({ ...props }: Record<string, any>) => {
  const context = new Context().get();

  if (context === "edit") {
    return <InnerBlocks {...props} />;
  }
  if (context === "save") {
    return <InnerBlocks.Content {...props} />;
  }
  return <div></div>;
};
