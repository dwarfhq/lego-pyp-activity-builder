import { type SchemaTypeDefinition } from "sanity";
import brickColor from "./schemas/brickColor";
import shape from "./schemas/shape";
import activity from "./schemas/activity";
import texture from "./schemas/texture";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [brickColor, shape, activity, texture],
};
