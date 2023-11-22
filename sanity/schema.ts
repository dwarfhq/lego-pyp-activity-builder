import { type SchemaTypeDefinition } from "sanity";
import color from "./schemas/color";
import shape from "./schemas/shape";
import activity from "./schemas/activity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [color, shape, activity],
};
