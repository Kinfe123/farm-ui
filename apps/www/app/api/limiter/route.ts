import { NextRequest, NextResponse } from "next/server";
import { ratelimit } from "utils/ratelimit";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const res = await req.json();
    const ip = req.headers.get("x-forwarded-for") ?? "";
    const data = await ratelimit.limit(ip);
    if (!data.success) {
      return new NextResponse("You can only send 1 req / 30min.", {
        status: 429,
      });
    }
    return new Response("The data logged: " + JSON.stringify(res));
  } catch (err) {
    console.log("Error has occured  ", err);
    return new Response("Error has occured", { status: 404 });
  }
}
