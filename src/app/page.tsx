"use client";
import BrickBuilder from "pyp-brick-builder";
import "pyp-brick-builder/dist/style.css";
import { useEffect, useState } from "react";

const testOptions = {
  name: "Emerald Duck",
  slug: "emerald-duck",
  bricks: [
    {
      color: "#00c26b",
      element_id: "3003",
      name: "2x2",
      texture: null,
      amount: 4,
    },
    {
      color: "#ff191c",
      element_id: "3021",
      name: "2x3 flat",
      texture: null,
      amount: 3,
    },
    {
      color: "#00c26b",
      element_id: "3005",
      name: "1x1",
      texture:
        "https://cdn.sanity.io/images/e73x02f5/production/8be58a2983aa6ce89aff7f65b879f5c82063fcb1-370x223.png",
      amount: 3,
    },
  ],
};

export default function Page() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  return (
    <div className="w-[100dvw] h-[100dvh]">
      {hasMounted && <BrickBuilder options={testOptions} />}
    </div>
  );
}
