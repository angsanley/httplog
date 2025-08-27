import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()

// Use app.notFound to handle wildcard routes
export const customLogger = (message: string, ...rest: unknown[]) => {
  console.log(message, ...rest)
}

app.use(logger(customLogger))

app.notFound(async (c) => {
  const headers = c.req.header()
  const body = await c.req.text()

  customLogger("Headers:", headers || '<empty>')
  customLogger("Body:", body || '<empty>')

  return c.json({ message: 'Ok' }, 200)
})


Deno.serve(app.fetch)
