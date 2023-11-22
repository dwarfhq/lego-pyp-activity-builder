import { defineArrayMember, defineConfig, defineField } from "sanity";

export default defineConfig({
  name: "activity",
  type: "document",
  title: "Activities",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    defineField({
      name: "bricks",
      type: "array",
      title: "Bricks",
      of: [
        defineArrayMember({
          type: "object",
          name: "brick",
          fields: [
            defineField({
              type: "reference",
              name: "color",
              title: "Color",
              to: [{ type: "color" }],
            }),
            defineField({
              type: "reference",
              name: "shape",
              title: "Shape",
              to: [{ type: "shape" }],
            }),
            defineField({
              name: "amount",
              type: "number",
              title: "Amount",
            }),
          ],
        }),
      ],
    }),
  ],
});
