'use client'
import { Fragment, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { Bell , X , DollarSign , ArrowDownCircle , ArrowUpCircle , MenuIcon , RotateCcw , EllipsisVerticalIcon , Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Invoices', href: '#' },
  { name: 'Clients', href: '#' },
  { name: 'Expenses', href: '#' },
]
const secondaryNavigation = [
  { name: 'Last 7 days', href: '#', current: true },
  { name: 'Last 30 days', href: '#', current: false },
  { name: 'All-time', href: '#', current: false },
]
const stats = [
  { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
  { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
  { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
  { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]
type StatusType = {
  [key: string]: string
}
const statuses: StatusType = {
  'Paid': 'text-green-700 bg-green-50 ring-green-600/20',
  'Withdraw': 'text-gray-600 bg-transparent  ring-gray-500/10',
  'Overdue': 'text-red-700 bg-red-50 ring-red-600/10',
}
const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircle,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircle,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: RotateCcw,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircle,
      },
    ],
  },
]
const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
  },
]


export default function FUIDashboardSells() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-300/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6">
            <button type="button" className="-m-3 p-3 md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
            </button>
            <h1 className='uppercase font-geistMono tracking-tighter'>SHARP.</h1>
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-200">
            {navigation.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" aria-hidden="true" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://github.com/shadcn.png"
                alt=""
              />
            </a>
          </div>
        </div>
       
      </header>

      <main>
        <div className="relative isolate overflow-hidden pt-16">
          <header className="pb-4 pt-6 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-gray-300">Sharps</h1>
              <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-white/10 sm:pl-6 sm:leading-7">
                {secondaryNavigation.map((item) => (
                  <a key={item.name} href={item.href} className={item.current ? 'text-purple-600' : 'text-gray-200'}>
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="ml-auto flex items-center gap-x-1 rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                <Plus className="-ml-1.5 h-5 w-5" aria-hidden="true" />
                Add New Count
              </a>
            </div>
          </header>

          <div className="border-b  border-b-gray-300/10 lg:border-t lg:border-t-gray-300/5 bg-page-gradient bg-opacity-10">
            <dl className="mx-auto  grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className={cn(
                    statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                    'flex flex-wrap group  relative items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-300/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8',
                  )}
                  
                >
                  <DollarSign className='text-white/10 -z-10  group-hover:opacity-100  group-hover:rotate-3 opacity-10   transform transition-opacity duration-500 absolute bottom-[-35px] w-36 h-36 font-thin  right-[-30px]'  />
                  <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>
                  <dd
                    className={cn(
                      stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-200',
                      'text-xs font-medium',
                    )}
                  >
                    {stat.change}
                  </dd>
                  <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-300">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
            aria-hidden="true"
          >
            <div
              className="aspect-[1154/678] w-[72.125rem] opacity-50 bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
              style={{
                clipPath:
                  'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
              }}
            />
          </div>
        </div>

        <div className="space-y-16 py-16  max-w-7xl mx-auto    xl:space-y-20"> 
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-300 lg:mx-0 lg:max-w-none">
                Recent activity
              </h2>
            </div>
            <div className="mt-6 overflow-hidden border-t border-white/5">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                  <table className="w-full text-left">
                    <thead className="sr-only">
                      <tr>
                        <th>Amount</th>
                        <th className="hidden sm:table-cell">Client</th>
                        <th>More details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {days.map((day) => (
                        <Fragment key={day.dateTime}>
                          <tr className="text-sm leading-6 text-gray-300">
                            <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                              <time dateTime={day.dateTime}>{day.date}</time>
                              <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-white/10 bg-transparent " />
                              <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-white/10 bg-transparent " />
                            </th>
                          </tr>
                          {day.transactions.map((transaction) => (
                            <tr key={transaction.id}>
                              <td className="relative py-5 pr-6">
                                <div className="flex gap-x-6">
                                  <transaction.icon
                                    className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                    aria-hidden="true"
                                  />
                                  <div className="flex-auto">
                                    <div className="flex items-start gap-x-3">
                                      <div className="text-sm font-medium leading-6 text-gray-300">
                                        {transaction.amount}
                                      </div>
                                      <div
                                        className={cn(
                                          statuses[transaction.status] ,
                                          'rounded-md px-2 py-1 text-xs bg-transparent  font-medium ring-1 ring-inset',
                                        )}
                                      >
                                        {transaction.status}
                                      </div>
                                    </div>
                                    {transaction.tax ? (
                                      <div className="mt-1 text-xs leading-5 text-gray-500">{transaction.tax} tax</div>
                                    ) : null}
                                  </div>
                                </div>
                                <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100/10" />
                                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100/10" />
                              </td>
                              <td className="hidden py-5 pr-6 sm:table-cell">
                                <div className="text-sm leading-6 text-gray-300">{transaction.client}</div>
                                <div className="mt-1 text-xs leading-5 text-gray-500">{transaction.description}</div>
                              </td>
                              <td className="py-5 text-right">
                                <div className="flex justify-end">
                                  <a
                                    href={transaction.href}
                                    className="text-sm font-medium leading-6 text-purple-600 hover:text-purple-500"
                                  >
                                    View<span className="hidden sm:inline"> transaction</span>
                                    <span className="sr-only">
                                      , invoice #{transaction.invoiceNumber}, {transaction.client}
                                    </span>
                                  </a>
                                </div>
                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                  Invoice <span className="text-gray-300">#{transaction.invoiceNumber}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

         
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold leading-7 text-gray-300">Recent clients</h2>
                <a href="#" className="text-sm font-semibold leading-6 text-purple-600 hover:text-purple-500">
                  View all<span className="sr-only">, clients</span>
                </a>
              </div>
              <ul role="list" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                {clients.map((client) => (
                  <li key={client.id} className="overflow-hidden rounded-xl border border-white/10">
                    <div className="flex items-center gap-x-4 border-b border-white/5 bg-glass-gradient  p-6">
                      <img
                        src={client.imageUrl}
                        alt={client.name}
                        className="h-12 w-12 flex-none rounded-lg bg-transparent object-cover ring-1 ring-gray-300/10"
                      />
                      <div className="text-sm font-medium leading-6 text-gray-300">{client.name}</div>
                      <DropdownMenu >
                        <DropdownMenuTrigger className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500 ml-auto">
                          <span className="sr-only">Open options</span>
                          <EllipsisVerticalIcon className="h-5 w-5 transform rotate-90 " aria-hidden="true" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="absolute right-0 z-10 mt-0.5 w-32 bg-black origin-top-right rounded-md  py-2 shadow-lg ring-1 ring-gray-300/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <DropdownMenuItem>
                              <a
                                href="#"
                                className={cn(
                                  'block  text-sm leading-6 text-gray-300',
                                )}
                              >
                                View<span className="sr-only">, {client.name}</span>
                              </a>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                              <a
                                href="#"
                                className={cn(
                                  'block  text-sm leading-6 text-gray-300',
                                )}
                              >
                                Edit<span className="sr-only">, {client.name}</span>
                              </a>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <dl className="-my-3 divide-y divide-gray-100/10 px-6 py-4 text-sm leading-6">
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Last invoice</dt>
                        <dd className="text-gray-200">
                          <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Amount</dt>
                        <dd className="flex items-start gap-x-2">
                          <div className="font-medium text-gray-300">{client.lastInvoice.amount}</div>
                          <div
                            className={cn(
                              statuses[client.lastInvoice.status],
                              'rounded-md px-2 py-1 text-xs font-medium bg-transparent bg-hero-gradient ring-1 ring-inset',
                            )}
                          >
                            {client.lastInvoice.status}
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
