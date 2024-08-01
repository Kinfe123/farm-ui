'use client'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { v4 as uuidv4 } from 'uuid'
import { Input } from "@/components/ui/input"
import { ElementRef, useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { z } from 'zod'
import { useForm } from "react-hook-form"

const paymentFromSchema = z.object({
    currency: z.string(),

    firstName: z.string().min(1, { message: "The first name should be more than 2 characters" }).max(20),
    lastName: z.string().min(1, { message: "The first name should be more than 2 characters" }).max(20),
    phoneNumber: z.string().min(10, 'Minimum 10 digits').max(10, 'Maximum 10 digits'),
    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),

})
type PaymentSchema = z.infer<typeof paymentFromSchema>
const defaultValues: Partial<PaymentSchema> = {
    currency: "ETB"
}
const PaymentLink = ({ template_title }: { template_title: string }) => {
    const closeRef = useRef<ElementRef<"button">>(null)
    const [loading, setLoading] = useState(false)
    const form = useForm<PaymentSchema>({
        resolver: zodResolver(paymentFromSchema),
        defaultValues,
        mode: "onChange",
    })
    async function onSubmitHandle(d: PaymentSchema) {
        console.log("Tge value is : " , d)
    }

    return (
        <div className="flex h-full items-center justify-center">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost">
                        Purchase Template

                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.3),rgba(255,255,255,0))]">
                    <DialogHeader>
                        <DialogTitle className="tracking-norrmal font-heading text-xl">
                            Purchasing
                            <span className="ml-1 capitalize">{template_title}</span>
                            - FARMUI
                        </DialogTitle>
                    </DialogHeader>

                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmitHandle)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="kinfish@chacha.xyz" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Kinfish" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Farms" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="0919191919" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <Button disabled={loading} onClick={onSubmitHandle} type="submit">{loading && <Loader className="w-3 h-3 animate-spin mr-2" />}Pay Now</Button>
                        </form>
                        </Form>

                    </div>
                    <div className="flex justify-between">
                        <DialogClose ref={closeRef} asChild>
                            <Button variant="ghost">Cancel</Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PaymentLink