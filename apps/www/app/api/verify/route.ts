import axios from "axios";
import { db } from "../../../../www/db";
import { payments } from "db/schema";
import { eq } from "drizzle-orm";
export async function POST(req: Request) {
  const { tnx_ref, userId } = (await req.json()) as {
    tnx_ref: string;
    userId: string;
  };
  try {
    const header = {
      headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(
      "https://api.chapa.co/v1/transaction/verify/" + tnx_ref,
      header
    );
    let resp = await response.data;
    const tx_exists = await db
      .select()
      .from(payments)
      .where(eq(payments.tnxRef, tnx_ref));

    // console.log(tx_exists)
    if (!tx_exists) {
      console.log("Doees not exist");
      try {
        const tx_add = await db.insert(payments).values({
          id: tnx_ref,
          tnxRef: tnx_ref,
          amount: resp.data.amount.toString(),
          email: resp.data.email,
          firstName: resp.data.first_name,
          lastName: resp.data.last_name,
          createdAt: resp.data.created_at,

        });
      } catch (err) {
        console.log("THe error is: ", err);
      }
    }
    // console.log("THe val is here : ", resp)
    return new Response(JSON.stringify(resp), { status: 200 });
    // res.status(200).json({
    //     message : "Payment successfull",
    //     status : "success"
    // });
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 400 });
  }
}
