"use client";

import { Plus, PlusCircle, Search } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip
        side="right"
        align="center"
        label="Add a server"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              // onClick={() => onOpen("createServer")}
              className="group flex items-center"
            >
              <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
                <Plus
                  className="group-hover:text-white transition text-emerald-500"
                  size={25}
                />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" sideOffset={-10} className="w-56 mt-5 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
            <DropdownMenuItem onClick={() => onOpen("findServer")}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Find server
              <Search className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onOpen("createServer")}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Create server
              <PlusCircle className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ActionTooltip>
    </div>
  )
}