import { config } from 'dotenv'
config({ path: '.env.local' }) //default: '.env'

console.log('TURSO_DATABASE_URL:', process.env.TURSO_DATABASE_URL)
console.log('TURSO_AUTH_TOKEN:', process.env.TURSO_AUTH_TOKEN)

import type { Config } from 'drizzle-kit'

export default {
  schema: './db/schema.ts',
  out: './db/migrations',
  dialect: 'turso',
  //driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN
  }
} satisfies Config
