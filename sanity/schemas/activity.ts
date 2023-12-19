import { defineArrayMember, defineField, defineType } from "sanity";
import ActivityPreview from "../components/activityPreview";
import CopyJsonData from "../components/copyJsonData";

export default defineType({
  name: "activity",
  type: "document",
  title: "Activities",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Identifier",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "bricks",
      type: "array",
      title: "Bricks",
      of: [
        defineArrayMember({
          type: "object",
          name: "brick",
          preview: {
            select: {
              color: "color.name",
              shape: "shape.name",
              amount: "amount",
              texture: "texture.name",
            },
            prepare({ color, shape, amount, texture }) {
              console.log("color:", color);
              return {
                title: `${amount} ${color} bricks`,
                subtitle: `Dimensions: ${shape} ${
                  texture ? `(${texture})` : ""
                }`,
              };
            },
          },
          fields: [
            defineField({
              type: "reference",
              name: "color",
              title: "Color",
              to: [{ type: "brickColor" }],
            }),
            defineField({
              type: "reference",
              name: "shape",
              title: "Shape",
              to: [{ type: "shape" }],
            }),
            defineField({
              type: "reference",
              name: "texture",
              title: "Texture",
              to: [{ type: "texture" }],
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
    defineField({
      name: "data",
      type: "string",
      title: "Data",
      components: {
        input: CopyJsonData,
      },
      readOnly: true,
    }),
  ],
});
