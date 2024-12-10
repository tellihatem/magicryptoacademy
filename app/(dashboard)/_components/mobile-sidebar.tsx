import { Menu } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
  } from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="pr-4 transition md:hidden hover:opacity-75" aria-label="Open Menu">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white ">
                <SheetTitle />
                <Sidebar />
            </SheetContent>
        </Sheet>
        
    )
}