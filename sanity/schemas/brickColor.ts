import { defineField, defineType } from "sanity";

export default defineType({
  name: "brickColor",
  type: "document",
  title: "Colors",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "color",
      type: "color",
      title: "Color",
    }),
  ],
});
