import { ChevronRight, User } from "lucide-react";
import LinkItem from "../LinkItem";
import { auth } from "../../../auth";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
const JoinUs = async () => {
  const user = await auth();
  console.log({user})
//   if (!!user?.user) {
//     const extractedUser = user.user
//     return (
//       <TooltipProvider>
//         <Tooltip>
//           <TooltipTrigger>
//             {extractedUser.image ? (
//                 <img
//                   src={extractedUser.image}
//                   className="w-10 h-10 rounded-full"
//                   alt=""
//                 />


//             ): (
//                 <User className="w-10 h-10 bg-white/80 rounded-full"/>
//             )}
//             </TooltipTrigger>
//           <TooltipContent>
//             <p>{user.user.name}</p>
//           </TooltipContent>
//         </Tooltip>
//       </TooltipProvider>
//     );
//   }
  return (
   <></>
  );
};

export default JoinUs;
