import * as t from 'drizzle-orm/sqlite-core'

export const foldersTable = t.sqliteTable('folders', {
  id: t.int().primaryKey({ autoIncrement: true }),
  name: t.text('name', { length: 100 }).notNull(),
  userId: t.int('user_id').notNull(),
  isActive: t.int('is_active').default(1).notNull(),
  dateAdd: t.text('date_add').notNull().default('CURRENT_TIMESTAMP')
})

export const notesTable = t.sqliteTable('notes', {
  id: t.int().primaryKey({ autoIncrement: true }),
  title: t.text('title', { length: 100 }).notNull(),
  content: t.text('content').notNull(),
  folderId: t.int('folder_id').notNull(),
  userId: t.int('user_id').notNull(),
  isActive: t.int('is_active').default(1).notNull(),
  dateAdd: t.text('date_add').notNull().default('CURRENT_TIMESTAMP'),
  deleteAt: t.text('delete_at').default('NULL')
})

export type FolderType = typeof foldersTable.$inferInsert
export type NoteType = typeof notesTable.$inferInsert
//const folderSelect = typeof foldersTable.$inferSelect
