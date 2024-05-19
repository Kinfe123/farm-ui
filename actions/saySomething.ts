'use server'

type SaySomethingProps = {
    firstName: string,
    lastName: string,
    email: string,
    message:string
}

export const saySomething  = async({firstName , lastName , email , message}: SaySomethingProps) => {
    // const say_something = await db
}