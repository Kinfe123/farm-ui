import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
export const db: Redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN
});

export const ratelimit = new Ratelimit({
  redis: db,
  limiter: Ratelimit.slidingWindow(10, "30 m")

})

