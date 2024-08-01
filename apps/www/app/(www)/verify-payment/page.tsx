// @ts-nocheck

import axios from "axios";
import { TransactionComplete } from "@/components/transaction-complete";
import { CheckIcon } from "lucide-react";
import Button from "components/ui/Button";
// import { useRouter } from "next/router";
export const metadata = {
    title: "Payment",
    description: "Payment Details"
}
type TxnProps = {
    params: string | null,
    searchParams: {
        tnx_ref: string,



    }
}
const VarifyChapa = async ({ searchParams }: TxnProps) => {
    const { tnx_ref: tnx_ref } = searchParams
    let result = {}
    // const router = useRouter();
    const header = {
        headers: { "Content-Type": "application/json" },
    };
    const data = { tnx_ref: tnx_ref };
    let response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/verify`, data, header);
    const res = response.data.data

    return (
        <>
            <div className="row align-items-center" >

                <div className="flex h-screen justify-center flex-col items-center gap-4 p-4">
                    <CheckIcon className="h-20 w-20 text-purple-400/50" />
                    <div className="text-center space-y-2 tracking-tighter font-geist">
                        <h1 className="text-3xl font-bold md:text-5xl">Transaction Successful</h1>
                        <p className="mx-auto max-w-[500px] text-gray-500 md:text-xl/relaxed  lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Thank you for the purchase , we will send you document through you email.   
                        </p>
                    </div>
                    <a href="/templates">
                        <Button className="text-black">
                            Back to Template
                        </Button>
                    </a>
                </div>


            </div>
        </>
    );
};

export default VarifyChapa;