import { defineField, defineType } from "sanity";

export default defineType({
  name: "texture",
  type: "document",
  title: "Textures",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
  ],
});
