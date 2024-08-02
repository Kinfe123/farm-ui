import { Resend } from 'resend';
import {SuccessPurchase} from '../../../../../../packages/transactions/emails/successPurchase'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
  console.log({res})
  try {
    const { data, error } = await resend.emails.send({
      from: 'Kinfish <kinfish@farmui.com>',
      to: ['kinfetare83@gmail.com'],
      subject: 'Hello world',
      react: SuccessPurchase({
        firstName:"Hellow",
        lastName: "World",
        amount:'50',
        currency:"TB",
        templateName:"Docy",
      
      }),

    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log("The eror is : ", error)

    return Response.json({ error }, { status: 500 });
  }
}
