import Home from "@/components/Home";
import { db } from "@/lib/db";
import { activities, builds } from "@/lib/schema";

const createActivity = async () => {
  "use server";

  const result = await db.insert(activities).values({
    name: "test activity",
  });
  console.log("result:", result);
};

export default async function Page() {
  const data = await db.select().from(activities);
  const a = await db.query.activities.findMany({
    with: {
      builds: true,
    },
  });
  console.log("a:", a);

  return (
    <div>
      USERS:
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <form action={createActivity}>
        <button type="submit">Submit to add test activity</button>
      </form>
      {a.map((activity) => (
        <div key={activity.id}>
          <h1>{activity.name}</h1>
          <pre>{JSON.stringify(activity.builds, null, 2)}</pre>
        </div>
      ))}
      <Home />
    </div>
  );
}
