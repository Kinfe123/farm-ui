"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { usePathname } from "next/navigation";

export function TemplateToaster() {
  const [isVisibile, setIsVisible] = useState(true);
  const path = usePathname()
  
  const templates = path.includes('templates')
  const isIframe = isInIframe()
  if(isIframe){
    return (
        <div></div>
    )
  }

  return (
    (isVisibile && !templates) && (
      <section className="z-30 relative">
        <div className="fixed font-geist bottom-4 right-4">
          <Card
            className={cn(
              "w-[350px] bg-white/90 dark:bg-black animate-background-shine dark:bg-[linear-gradient(110deg,#000,55%,#57476e,65%,#000)] bg-opacity-10 bg-[length:250%_100%]  dark:[border:1px_solid_rgba(255,255,255,.1)]"
            )}
          >
            <CardHeader>
              <div className="font-normal font-mono uppercase tracking-tight ">
                ✨Access the full template ✨  <br />
                <span className="font-bold mt-1">
                50% discount is now available.
                  </span>
              </div>
              <CardDescription className="mt-4 text-black/90 dark:text-white/70">
                Go get the full access of template with almost for free and more than <span className="font-bold">50% discount</span>  if you buy couple and more! 
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
              >
                Cancel
              </Button>
              <Button size="sm" asChild>
                <Link href="https://farmui.com/templates" target="_blank">
                  Get the template
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    )
  );
}

function isInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }