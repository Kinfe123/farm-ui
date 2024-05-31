import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import  componenents from '../constants/components.json'
export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/components', (c) => {
  return c.json(componenents)
})

export default handle(app)
