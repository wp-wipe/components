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
  if (typeof src.value === "object") {
    src.value.y = (src.value?.y === undefined) ? 0.5 : src.value?.y;
    src.value.x = (src.value?.x === undefined) ? 0.5 : src.value?.x;
  }
  if (context === "edit" && src.value?.url) {

    return (
      <img
        style={{ objectPosition: `${(src.value?.x) * 100}% ${src.value?.y * 100}%` }}
        src={src.value?.url}
        {...props}
      />
    );
  }

  if (context === "save" && src.value?.url) {
    return (
      <img
        style={{ objectPosition: `${src.value?.x * 100}% ${src.value?.y * 100}%` }}
        src={src.value?.url}
        {...props}
      />
    );
  }

  return <div></div>;
};
