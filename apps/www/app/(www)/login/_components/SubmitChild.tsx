"use client";

import { ChevronRight, Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({pending_action , label}: {pending_action:boolean, label: string}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || pending_action}
      className="w-full group px-4 py-4 font-geist flex justify-center items-center gap-1 tracking-tighter text-xl text-white font-medium bg-purple-200/10 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] hover:bg-transparent/10 active:bg-purple-600 rounded-lg duration-150"
    >
      {(pending_action || pending) && <Loader className="animate-spin w-4 h-4 mr-2"/>}{label}
      <ChevronRight className="inline-flex justify-center items-center w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
    </button>
  );
}
