import { Context } from "../Tools/Context";

import type { Attr } from "../Tools/Types";

type ImageOptions = {
  src: Attr;
} & Record<string, any>;

export const Image = ({ src, ...props }: ImageOptions) => {
  const context = new Context().get();

  // Force convert string to object
  if (typeof src.value === "string") {
    src.value = { url: src.value };
  }
  if (context === "edit" && src.value?.url) {
    return (
      <img
        src={src.value?.url}
        {...props}
      />
    );
  }

  if (context === "save" && src.value?.url) {
    return (
      <img
        src={src.value?.url}
        {...props}
      />
    );
  }

  return <div></div>;
};
