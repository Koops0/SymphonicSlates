'use client';
import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const images = defineTable({
  imageUrl: v.string(),
  song_name: v.string(),
  song_author: v.string(),
  song_link: v.string()
});

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
export default defineSchema({
  ...authTables,
  messages: defineTable({
    userId: v.id("users"),
    body: v.string(),
  }),
  scenes: defineTable({
    title: v.string(),
    userId: v.string(),
    content: v.optional(v.string()),
  }).index("by_user", ["userId"]),
  images
});