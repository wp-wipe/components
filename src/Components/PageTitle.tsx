import { RichText } from "@wordpress/block-editor";
import { Context } from "../Tools/Context";
import { useSelect, useDispatch } from "@wordpress/data";

export const PageTitle = () => {
  const context = new Context().get();
  if (context === "save") {
    return "[page-title]";
  }
  if (context === "edit") {
    const [title, setTitle] = useSelect((select) => {
      const { getEditedPostAttribute } = select("core/editor") as { getEditedPostAttribute: any };
      const { editPost } = useDispatch("core/editor");
      return [
        getEditedPostAttribute("title") as string,
        function (value: string) {
          editPost({ title: value });
        },
      ] as const;
    }, []);
    return (
      <RichText
        placeholder="Titre de la page"
        value={title}
        onChange={setTitle}
      />
    );
  }
};
