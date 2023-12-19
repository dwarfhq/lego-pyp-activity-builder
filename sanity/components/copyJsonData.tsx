import { Button, useToast } from "@sanity/ui";
import { groq } from "next-sanity";
import { useClient, useFormValue } from "sanity";

const query = groq`*[_type == "activity" && _id == $_id][0]{
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

function CopyJsonData(props) {
  const toast = useToast();
  const client = useClient({ apiVersion: "2023-10-31" });
  const docId = useFormValue(["_id"]);

  async function fetchData() {
    const activity = await client.fetch(query, {
      _id: docId,
    });
    console.log("activity:", activity);
    await navigator.clipboard.writeText(JSON.stringify(activity));
    toast.push({
      status: "success",
      title: "Data copied to clipboard",
    });
  }

  return (
    <div>
      <Button
        onClick={fetchData}
        fontSize={[2, 2, 3]}
        mode="ghost"
        padding={[3, 3, 4]}
        text="Copy data for ContentStack"
      />
    </div>
  );
}

export default CopyJsonData;
