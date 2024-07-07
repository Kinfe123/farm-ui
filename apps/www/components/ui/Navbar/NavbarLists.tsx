"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSession } from "@/lib/auth/provider/lucia.client";
import { cn } from "@/lib/utils";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { User } from "db/schema";
import { motion } from "framer-motion";
import { BarChart, ChevronDown, LogOut, Mail } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

type UserProps =  Omit<User , "hashedPassword">
const StaggeredDropDown = ({ user }: { user: UserProps }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center bg-transparent">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-glass-gradient hover:bg-opacity-80 duration-500 transition-colors"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Avatar>
                  <AvatarImage
                    src={user?.picture ?? ""}
                    alt={user?.userName ?? "avatar pic"}
                  />
                  <AvatarFallback>
                    {user?.userName?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>{user.userName}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <motion.span variants={iconVariants}>
            <ChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={<BarChart />} text="Dashboard" />
          <Option setOpen={setOpen} Icon={<LogOut />} text="Logout" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
}: {
  text: string;
  Icon: React.ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className={cn("flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100  transition-colors cursor-pointer" , text === 'Logout' ? 'text-red-900 hover:text-red-600' : 'text-slate-700 hover:text-indigo-500' )}
    >
      <motion.span variants={actionIconVariants}>{Icon}</motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
