"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "@/lib/auth/provider/lucia.client";
import { cn } from "@/lib/utils";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { logoutAction } from "actions/auth.main";
import { User } from "db/schema";
import { motion } from "framer-motion";
import { BarChart, ChevronDown, LogOut, Mail } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

type UserProps = Omit<User, "hashedPassword">;
const StaggeredDropDown = ({ user }: { user: UserProps }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center bg-transparent">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex justify-center items-center gap-2 px-3 py-q rounded-full text-indigo-50 bg-hero-gradient hover:bg-opacity-80 duration-500 transition-colors"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Avatar>
                  <AvatarImage
                    src={user?.picture ?? ""}
                    alt={user?.userName ?? "avatar pic"}
                  />
                  <AvatarFallback className="flex justify-center items-center">
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
          className="flex flex-col gap-2 p-2 rounded-lg bg-black/70 [border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={<BarChart />} text="Dashboard" />
          <hr className="bg-white/20 w-full h-px" />
          <Option
            setOpen={setOpen}
            Icon={<LogOut />}
            text="Logout"
            actions={logoutAction}
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
  actions,
}: {
  text: string;
  Icon: React.ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
  actions?: () => {};
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <motion.li
      variants={itemVariants}
      onClick={async () => {
        setOpen(false);
        setLoading(true);
        if (actions) {
          try {
            const res = await actions();
            toast({
              title: "Successfully LoggedOut",
              description: "You have successfully logout",
            });
          } catch (err) {
            toast({
              title: "Something went wrong",
              variant: "destructive",
              description: "There is something while logging out.",
            });
          }
          setLoading(false);
        }
      }}
      className={cn(
        "flex items-center gap-2 w-full px-2 py-1 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100  transition-colors cursor-pointer",
        text === "Logout"
          ? "text-red-900 font-semibold hover:text-red-600"
          : "text-slate-200 hover:text-indigo-500"
      )}
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
