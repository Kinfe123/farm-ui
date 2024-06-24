// import { ratelimit } from "utils/ratelimit";
export async function POST(req: Request) {
  return new Response("To be implemented again, " , {status:429})
  // try {
  //   const ip = req.headers.get("x-forwarded-for") ?? "";
  //   const data = await ratelimit.limit(ip);
  //   if (!data.success) {
  //     return new Response("You can only send 1 req / 30min.", {
  //       status: 429,
  //     });
  //   }
  //   return new Response("Made an attempt");
  // } catch (err) {
  //   console.log("Error has occured  ", err);
  //   return new Response("Error has occured", { status: 404 });
  // }
}

