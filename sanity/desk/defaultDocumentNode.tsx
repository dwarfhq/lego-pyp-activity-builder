import type { DefaultDocumentNodeResolver } from "sanity/desk";
import ActivityPreview from "../components/activityPreview";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `activity`:
      return S.document().views([
        S.view.form(),
        S.view.component(ActivityPreview).title("Preview Activity"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
