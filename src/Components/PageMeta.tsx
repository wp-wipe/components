import { RichText } from "@wordpress/block-editor";
import { Context } from "../Tools/Context";
import { useSelect, useDispatch } from "@wordpress/data";

export const PageMeta = ({ meta, placeholder }: {
  meta: string
  placeholder?: string
}) => {
  const context = new Context().get();
  if (context === "save") {
    return `[page-meta key="${meta}"]`;
  }
  if (context === "edit") {



    const [title, setTitle, hasMetas] = useSelect((select) => {
      const { getEditedPostAttribute } = select("core/editor") as { getEditedPostAttribute: any };
      const { editPost } = useDispatch("core/editor");
      const metas = getEditedPostAttribute("meta");
      const value = metas ?  metas[meta] as string : null
      return [
        value,
        function (value: string) {
          editPost({ meta: { ...metas, [meta]: value } });
        },
        !!metas,
      ] as const;
    }, []);
    if (!hasMetas) return null
    return (
      <RichText
        placeholder={placeholder || "Page Meta"}
        value={title}
        onChange={setTitle}
      />
    );
  }
};
