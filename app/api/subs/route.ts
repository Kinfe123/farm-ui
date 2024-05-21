import { Hono } from 'hono'
import { handle } from 'hono/vercel'

// export const runtime = 'edge';

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

export const GET = handle(app)
export const POST = handle(app)