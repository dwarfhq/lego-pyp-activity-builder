import { defineArrayMember, defineConfig, defineField } from "sanity";

export default defineConfig({
  name: "shape",
  type: "document",
  title: "Shapes",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "id",
      type: "string",
      title: "Element ID",
    },
  ],
});
