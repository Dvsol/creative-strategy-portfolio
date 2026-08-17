import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Inquiries submitted through the "Work With Me" contact form.
 * Deliberately minimal — the site is content-first, and this is the
 * only piece of persisted state for now.
 */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
