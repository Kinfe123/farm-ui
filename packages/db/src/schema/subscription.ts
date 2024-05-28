import { pgTable, serial, text, doublePrecision } from 'drizzle-orm/pg-core';

export var messages = pgTable("messages", {
  id: serial('id').primaryKey(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email"),
  message: text("message")
})

export var subscribers = pgTable("subscribers", {
  id: serial('id').primaryKey(),
  email: text("email").unique()

})


