import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
export default defineSchema({
  ...authTables,
  scenes: defineTable({
    title: v.string(),
    userId: v.string(),
    content: v.optional(v.string()),
  }).index("by_user", ["userId"])
});