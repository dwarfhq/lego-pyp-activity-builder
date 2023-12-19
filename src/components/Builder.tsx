import { client } from "@/../sanity/lib/client";
import { useQuery } from "@tanstack/react-query";
const query = `*[_type == "activity"] {
  _id,
  name,
  bricks[] {
    _key,
    "color": color->hex,
    "shape": shape->id,
    amount
  }
}`;
function Builder() {
  console.log("client:", client);

  const { data } = useQuery({
    queryKey: ["activities"],
    queryFn: () => client.fetch(query),
  });

  async function submit() {
    console.log("submit");
    const data = JSON.stringify([
      {
        brickId: 1,
        color: "red",
        elementId: 3001,
        position: {
          x: 1,
          y: 3,
          z: 2,
        },
        rotation: -90,
      },
      {
        brickId: 2,
        color: "blue",
        elementId: 3009,
        position: {
          x: 4,
          y: 2,
          z: -3,
        },
        rotation: 0,
      },
    ]);
  }

  console.log("data:", data);
  if (!data) return null;

  return (
    <div className="bg-green-400 w-full aspect-[16/9]">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={submit}>Submit test build</button>
    </div>
  );
}

export default Builder;
