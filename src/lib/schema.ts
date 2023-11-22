import { relations, sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
export const activities = sqliteTable("activities", {
  id: integer("id").primaryKey(),
  name: text("name"),
});

export const builds = sqliteTable("builds", {
  id: integer("id").primaryKey(),
  activityId: integer("activityId")
    .notNull()
    .references(() => activities.id),
  data: text("data"),
});

export const activitiesRelations = relations(activities, ({ many }) => ({
  builds: many(builds),
}));

export const buildsRelations = relations(builds, ({ one }) => ({
  activity: one(activities, {
    fields: [builds.activityId],
    references: [activities.id],
  }),
}));
