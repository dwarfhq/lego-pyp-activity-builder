import { defineConfig } from "sanity";

export default defineConfig({
  name: "color",
  type: "document",
  title: "Colors",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "hex",
      type: "string",
      title: "Hexcode",
    },
  ],
});
