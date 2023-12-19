import { groq } from "next-sanity";
import { PreviewActivity } from "pyp-brick-builder";
// import { client } from "../lib/client";
import { useEffect, useState } from "react";
import { useClient } from "sanity";

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

function Preview(props) {
  const displayedId = props.document.displayed._id;
  const client = useClient({ apiVersion: "2023-10-31" });

  const [activity, setActivity] = useState(null);

  async function fetchPreview() {
    setActivity(null);
    console.log("fetching preview...", displayedId);
    const data = await client.fetch(query, {
      _id: displayedId,
    });
    setActivity(data);
  }
  useEffect(() => {
    fetchPreview();
  }, []);

  return <div>{activity && <PreviewActivity options={activity} />}</div>;
}

export default Preview;
