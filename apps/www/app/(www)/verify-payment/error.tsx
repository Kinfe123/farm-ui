
'use client'
import axios from "axios";
import { CheckIcon, X } from "lucide-react";
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
const ErrorChapaPayment = () => {
    
    return (
        <>
            <div className="row align-items-center" >

                <div className="flex h-screen justify-center flex-col items-center gap-4 p-4">
                    <X className="h-20 w-20 text-purple-400/50" />
                    <div className="text-center space-y-2 tracking-tighter font-geist">
                        <h1 className="text-3xl font-bold md:text-5xl">Something went wrong</h1>
                        <p className="mx-auto max-w-[500px] text-gray-500 md:text-xl/relaxed  lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            If you do think this is by mistake please contact the me @ <a  className='text-white underline-offset-2 ' href="mailto:kinfetare83@gmail.com">kinfetare83@gmail.com</a>.   
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

export default ErrorChapaPayment;