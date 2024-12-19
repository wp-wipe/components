import { __ } from "@wordpress/i18n";

import { Context } from "../Tools/Context";
import { useSelect } from "@wordpress/data";
import { Image } from "./Image";

type ImageOptions = {} & Record<string, any>;

export const PageThumbnail = ({ ...props }: ImageOptions) => {
  const ctx = new Context();
  const context = ctx.get();

  const registredAttributes = ctx.getRegistredAttributes();

  if (context === "prepare") {
    registredAttributes.push({
      key: "__thumbnail",
      label: __("Thumbnail"),
      type: "image",
      default: "",
    });
  }

  if (context === "edit") {
    const { imgUrl } = useSelect((select) => {
      const { getEditedPostAttribute } = select("core/editor") as { getEditedPostAttribute: any };
      const thumbnail = getEditedPostAttribute("featured_media") as number;
      const media = thumbnail ? (select("core") as { getMedia: any }).getMedia(thumbnail) : null;
      return {
        thumbnail,
        imgUrl: media?.source_url || null,
      };
    }, []);

    const Picture = {
      get value() {
        return {
          url: imgUrl,
        };
      },
      set value(val) {
      },
    };
    return (
      <Image
        src={Picture}
        {...props}></Image>
    );
  }

  if (context === "save" && false) {
    return <img {...props} />;
  }

  return <div></div>;

  return <></>;
};
