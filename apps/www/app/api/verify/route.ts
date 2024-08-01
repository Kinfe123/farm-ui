import axios from "axios";
import { db } from "../../../../www/db";
import { payments } from "db/schema";
import { and, eq } from "drizzle-orm";
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
    const tx_exists = (
      await db.select().from(payments).where(eq(payments.tnxRef, tnx_ref))
    )[0];

    console.log("THe exists", tx_exists, resp);
    if (!tx_exists) {

      try {
        const tx_add = await db.insert(payments).values({
          id: resp.data.reference,
          tnxRef: tnx_ref,
          amount: resp.data.amount.toString(),
          email: resp.data.email,
          firstName: resp.data.first_name,
          lastName: resp.data.last_name,
          createdAt: resp.data.created_at,
          countVist: 1,
        });
        return new Response(JSON.stringify(tx_exists), { status: 200 });
      } catch (err) {
        
         throw new Error('Transaction Went Wrong.')
      }
    } else {
      const countVisit = tx_exists.countVist === 1;
      if (countVisit) {
        throw new Error("Transaction Already Verified");
      }
      return new Response(JSON.stringify(resp), { status: 200 });
    }
    // console.log("THe val is here : ", resp)
    // res.status(200).json({
    //     message : "Payment successfull",
    //     status : "success"
    // });
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 400 });
  }
}
