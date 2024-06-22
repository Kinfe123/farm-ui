import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
export const db: Redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!
});

export const ratelimit = new Ratelimit({
  redis: db,
  limiter: Ratelimit.slidingWindow(1, "30 m")

})

