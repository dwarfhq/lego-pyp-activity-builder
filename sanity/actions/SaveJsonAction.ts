import { groq } from "next-sanity";
import { client } from "../lib/client";

function downloadJson(activity) {
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(activity));
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", `${activity.name}.json`);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

const query = groq`*[_type == "activity" && slug.current == $slug][0]{
  name,
  "slug": slug.current,
  bricks[]{
    "color": color->color.hex,
    "element_id": shape->id,
    "name": shape->name,
    "texture": texture->image.asset->url,
    amount,
  }
}`;

export function SaveJsonAction({ draft, published, onComplete }) {
  return {
    disabled: draft,
    label: "Download activity data",
    onHandle: async () => {
      console.log("query", query);
      const activity = await client.fetch(query, {
        slug: published.slug.current,
      });

      console.log("activity:", activity);
      downloadJson(activity);
      onComplete();
    },
  };
}
