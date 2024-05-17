import Link from "next/link";
import {type Templates} from '.contentlayer/generated/types'
import LinkItem from "../LinkItem";
import { ChevronRight } from "lucide-react";
export default ({ item }: { item: Templates }) => (
  <li className="pt-10 lg:pt-0">
    <Link href={`${item.slug}`} className="gap-6 sm:flex">
      <div className="flex-1">
        <img
          src={item.image}
          className="rounded-lg"
          alt="Website template"
        />
      </div>
      <div className="flex-1 mt-6 flex flex-col justify-between sm:mt-0">
        <div>
          <div className="text-gray-100 text-lg font-semibold flex justify-between items-center">
            <h3 className="font-display font-bold text-2xl">{item.title}</h3>
            <div className="flex items-center gap-x-2">
              <del className="text-base">${item.price ?? "0"}</del>
            </div>
          </div>
          <p className="mt-6 text-gray-300">{item.description}</p>
        </div>
        <LinkItem
          href={`${item.slug}`}
          variant="default"
          className="inline-flex group items-center w-full bg-transparent  border-input border-none hover:bg-transparent/10 transition-colors mr-auto"
        >
          Explore more
          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
        </LinkItem>
      </div>
    </Link>
  </li>
);
