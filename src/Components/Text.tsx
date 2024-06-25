import { RichText } from "@wordpress/block-editor";
import Context from "../Tools/Context";
import type { Attr } from "../Tools/Types";

type TextOptions = {
  children: Attr;
} & Record<string, any>;

export const Text = ({ children, ...props }: TextOptions) => {
  const context = new Context().get(); 
  if (context === "save") {
    return <>{children.value}</>;
  }
  return (
    <RichText
      {...props}
      value={children.value}
      onChange={(value) => {
        children.value = value;
      }}
    />
  );
};
