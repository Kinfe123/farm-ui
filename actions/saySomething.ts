'use server'

import { db } from "db"
import {subscribers , messages} from 'db/schema'
type SaySomethingProps = {
    firstName: string,
    lastName: string,
    email: string,
    message:string
}

export const saySomething  = async({firstName , lastName , email , message}: SaySomethingProps) => {
    const say_something = await db.insert(messages).values({
        email,
        firstName,
        lastName,
        message,
    })
    console.log("the messages are; "  , say_something)
    return say_something

    

}                           