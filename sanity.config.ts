/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { SaveJsonAction } from "./sanity/actions/SaveJsonAction";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { colorInput } from "@sanity/color-input";
import { defaultDocumentNode } from "./sanity/desk/defaultDocumentNode";
console.log("schema:", schema);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  document: {
    actions: (prev, context) => {
      return context.schemaType === "activity"
        ? [...prev, SaveJsonAction]
        : prev;
    },
  },
  plugins: [
    deskTool({
      defaultDocumentNode: defaultDocumentNode,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    colorInput(),
  ],
});
