import { createClient as createNextClient } from "next-sanity";
import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
export const nextClient = createNextClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
