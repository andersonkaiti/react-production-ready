import { z } from 'zod'

const envSchema = z.object({
  VITE_SENTRY_DSN: z.url(),
  SENTRY_ORG: z.string().min(1),
  SENTRY_PROJECT: z.string().min(1),
  SENTRY_AUTH_TOKEN: z.string().min(1),
  VITE_CLARITY_ID: z.string().min(1),
})

envSchema.parse(process.env)
