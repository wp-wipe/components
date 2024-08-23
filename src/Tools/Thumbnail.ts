import { useSelect, useDispatch } from "@wordpress/data";
export function getThumbnail() {
  return useSelect((select) => {
    const { getEditedPostAttribute } = select("core/editor") as { getEditedPostAttribute: any };
    const thumbnail_id = getEditedPostAttribute("featured_media") as number;
    const media = thumbnail_id ? (select("core") as { getMedia: any }).getMedia(thumbnail_id) : null;
    return {
      thumbnail_id,
      thumbnail_url: media?.source_url || null,
    };
  }, []);
}

export function setThumbnail(thumbnail_id: number) {
  const { editPost } = useDispatch("core/editor");
  editPost({ featured_media: thumbnail_id });
}
