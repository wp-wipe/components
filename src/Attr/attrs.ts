import { Context } from "../Tools/Context";
import { getThumbnail, getThumbnailSave, setThumbnail } from "../Tools/Thumbnail";
import type { ColorWipeAttrOptions, HalignWipeAttrOptions, ImageWipeAttrOptions, LinkWipeAttrOptions, NumberWipeAttrOptions, StringWipeAttrOptions, ValignWipeAttrOptions, WipeAttrOptions } from "../Tools/Types";

export function file(option: Omit<ImageWipeAttrOptions, "type">) {
  return attr({ ...option, type: "file" });
}
export function image(option: Omit<ImageWipeAttrOptions, "type">) {
  return attr({ ...option, type: "image" });
}
export function link(option: Omit<LinkWipeAttrOptions, "type">) {
  return attr({ ...option, type: "link" });
}
export function color(option: Omit<ColorWipeAttrOptions, "type">) {
  return attr({ ...option, type: "color" });
}
export function number(option: Omit<NumberWipeAttrOptions, "type">) {
  return attr({ ...option, type: "number" });
}
export function string(option: Omit<StringWipeAttrOptions, "type">) {
  return attr({ ...option, type: "string" });
}
export function list(option: Omit<StringWipeAttrOptions, "type"> & { options: Record<string, string> }) {
  return attr({ ...option, type: "list" });
}
export function valign(option: Omit<ValignWipeAttrOptions, "type">) {
  return attr({ ...option, type: "valign" });
}
export function halign(option: Omit<HalignWipeAttrOptions, "type">) {
  return attr({ ...option, type: "halign" });
}
export function boolean(option: Omit<WipeAttrOptions, "type">) {
  return attr({ ...option, type: "boolean" });
}

export function group(label: string) {
  const ctx = new Context();
  if (ctx.get() == "prepare") {
    const groups = ctx.getGroups();
    if (groups.find((group) => group.label === label)) {
      return groups.find((group) => group.label === label);
    }
    const obj = { label } as const;
    groups.push(obj);
    return obj;
  }
  return null;
}

export function attr(options: WipeAttrOptions): { value: any; toString: () => string } {
  const ctx = new Context();

  if (ctx.get() == "prepare") {
    const registredAttributes = ctx.getRegistredAttributes();
    if (options.type === "array") {
      if (!options.default) {
        options.default = [];
      }
    }
    registredAttributes.push(options);
  }
  if (options.asFeaturedImage && ctx.get() === "edit") {
    const { thumbnail_id, thumbnail_url } = getThumbnail();
    return {
      get value() {
        const attributes = new Context().getAttributes();
        const value = attributes[options.key] || options.default;
        const setAttributes = new Context().getAttributesSetter();
        if (!attributes[options.key] || attributes[options.key].url !== thumbnail_url) {
          if (setAttributes) setAttributes({ [options.key]: { ...value, url: thumbnail_url, id: thumbnail_id } });
        }
        return { ...value, url: thumbnail_url, id: thumbnail_id };
      },
      set value(newValue: any) {
        const setAttributes = new Context().getAttributesSetter();
        if (setAttributes) {
          setAttributes({ [options.key]: newValue });
        }
        setThumbnail(newValue.id);
      },
      toString() {
        const attributes = new Context().getAttributes();
        const setAttributes = new Context().getAttributesSetter();
        if (!attributes[options.key] || attributes[options.key].url !== thumbnail_url) {
          const value = attributes[options.key] || options.default;
          if (setAttributes) setAttributes({ [options.key]: { ...value, url: thumbnail_url, id: thumbnail_id } });
        }
        return thumbnail_url || "";
      },
    };
  }
  if (options.asFeaturedImage && ctx.get() === "save") {
    getThumbnailSave();
  }

  return {
    get value() {
      const attributes = new Context().getAttributes();
      const value = attributes[options.key] || options.default;
      return value;
    },

    set value(newValue: any) {
      const setAttributes = new Context().getAttributesSetter();
      if (setAttributes) setAttributes({ [options.key]: newValue });
    },
    toString() {
      const attributes = new Context().getAttributes();
      const value = attributes[options.key] || options.default;
      if (options.type === "link" && value) {
        return value?.url || "";
      }

      return value || "";
    },
  };
}
