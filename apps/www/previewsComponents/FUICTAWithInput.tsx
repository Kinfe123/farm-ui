import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { OssLight } from 'components/Svgs/OssLights'
import { HeroMainboardStuff } from 'components/Svgs/ShinyLighs'

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FUICTAWithInput() {
  return (
    <div >

    <section id="newsletter" aria-label="Newsletter" className=''>
      <div className='max-w-7xl mx-auto rounded-xl'>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 bg-opacity-35 bg-[linear-gradient(to_bottom,#fff,#c9c8c7_100%)] dark:bg-[linear-gradient(to_bottom,#000,#200D42_40%,#4F21A1_74%,#A46EDB_88%_50%)] px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-3xl ring-black/20 ring-2 ring-offset-2 ring-offset-white dark:border-white/10 dark:ring-0 dark:ring-offset-0 md:px-16 xl:px-24 xl:py-36">
        <div className='hidden dark:block'>
        <div className="absolute left-1/2 top-[calc(100%-90px)] h-[750px] w-screen -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)]"></div>

        </div>
        
        <HeroMainboardStuff className="absolute left-1/2 top-0 -translate-x-1/2 invert brightness-100"/>
          <OssLight className='absolute' />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-geist text-4xl font-medium tracking-tighter  text-zinc-900 dark:text-zinc-200 sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight text-zinc-900 dark:text-zinc-200">
                Get updates on all of our events and be the first to get
                notified when tickets go on sale.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-200">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl focus:border-0 focus:border-transparent bg-white py-2.5 pr-2.5 shadow-xl shadow-zinc-900/5">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="-my-2.5 border-0 flex-auto rounded-full focus:border-none  bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-0 focus:border-transparent"
                />
                <Button type="submit" variant={'default'}>
                  <span className="sr-only sm:not-sr-only">Sign up today</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>

  )
}