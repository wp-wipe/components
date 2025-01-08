import { Context } from "../Tools/Context";

import type { Attr } from "../Tools/Types";

type Options = {
  src: Attr;
  autoplay?: boolean;
  loop?: boolean;
} & Record<string, any>;

export const Video = ({ src, loop, autoplay, ...props }: Options) => {
  const context = new Context().get();

  // Force convert string to object
  if (typeof src.value === "string") {
    src.value = { url: src.value };
  }
  if (context === "edit" && src.value?.url) {

    return (
      <video
        {...props}
      >
        <source src={src.value?.url} />
      </video>
    );
  }

  if (context === "save" && src.value?.url) {
    return (
      <video
        autoPlay={autoplay}
        muted={autoplay}
        loop={loop}
        playsInline={true}
        {...props}
      >
        <source src={src.value?.url} />
      </video>
    );
  }

  return <div></div>;
};
