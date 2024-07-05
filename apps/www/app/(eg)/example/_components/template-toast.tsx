
'use client'

import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'

export function TemplateToaster() {
     const shineAnimation = 'animate-shine bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat'
    const [isVisibile, setIsVisible] = useState(true)

    return (
        isVisibile && (
            <section className='z-30 relative'>
            <div className='fixed font-geist bottom-4 right-4'>
                <Card className={cn('w-[350px] bg-white/90 dark:bg-black animate-background-shine dark:bg-[linear-gradient(110deg,#000,55%,#57476e,65%,#000)] bg-opacity-10 bg-[length:250%_100%]  dark:[border:1px_solid_rgba(255,255,255,.1)]')}>
                    <CardHeader>
                        <div className='font-normal font-mono uppercase tracking-tight '>
                            ✨ Access the full template  ✨
                        </div>
                        <CardDescription className='mt-4 text-black/90 dark:text-white/70'>
                            Go get the full access of template with almost for free 
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className='flex justify-end gap-4'>
                        <Button variant='ghost' size='sm' onClick={() => setIsVisible(false)}>
                        Cancel
                        </Button>
                        <Button size='sm' asChild>

                            <Link href='https://farmui.com/templates' target='_blank'>
                               
                                Get the template
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            </section>
        )
    )
}
