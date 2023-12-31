import { defineField, defineType } from "sanity";

export default defineType({
  name: "shape",
  type: "document",
  title: "Shapes",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "id",
      type: "string",
      title: "Element ID",
    }),
  ],
});
