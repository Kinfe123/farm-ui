import Link from "next/link";
import { type Templates } from ".contentlayer/generated/types";
import LinkItem from "../LinkItem";
import { ChevronRight } from "lucide-react";
import { TechStackDisplay } from "components/ui/TemplateTechStackGroup";
import { Separator } from "@/components/ui/separator";
import Image from "next/image"
import bgback from "../../../public/bg-back.png"
import { ImageSlider } from "./ImageCarousel";
export default ({ item }: { item: Templates }) => (
  
  <li className="relative pt-10 lg:pt-0 h-fit overflow-hidden rounded-3xl">
      <div className="flex-1 w-full block z-30">
        <ImageSlider images={item.images} />
        {/* <img src={item.image} className="rounded-lg" alt="Website template" /> */}
      </div>
      <div className="flex-1 mt-6 flex flex-col justify-between sm:mt-0">
        <div>
          <div className="text-gray-100 text-lg font-semibold flex justify-between items-center">
            <h3 className="font-geist mt-4 font-bold text-2xl">{item.title}</h3>
            <div className="flex items-center gap-x-2">
              <del className="text-base">${item.price ? `${(parseInt(item.price)  + 10.99).toFixed(2)}` : `10.99`}</del>
              <span className="text-xl sm:text-2xl">
                   ${item?.is_free ? `0` :  item?.price} 
              </span>
            </div>
          </div>
        <Separator className="w-full  bg-gray-300/30"/>
          <p className="mt-6 text-gray-300">{item.description}</p>
        </div>
        {/* this has to be dynamic - should come from markdown. */}
        <div className="py-2 ml-auto">
          <h3 className="text-zinc-200 font-medium">
            Built with modern technologies
          </h3>
          <TechStackDisplay icons={item.stack_used} className="justify-end" /> 
        </div>
        <LinkItem
          href={`${item.slug}`}
          variant="default"
          className="inline-flex group items-center w-full bg-transparent  border-input border-none hover:bg-transparent/10 transition-colors mr-auto"
        >
          Explore more
          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
          <Image src={bgback} className="absolute top-0 translate-y-30  z-1 opacity-70 w-[1000px] h-[800px] overflow-hidden"  alt="bgback"/>
        </LinkItem>
      </div>
  </li>
);
