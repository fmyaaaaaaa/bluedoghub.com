import { Menu, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-bluedog-fill.svg"
              alt="Bluedog"
              width={36}
              height={36}
              className="md:hidden text-brand-500"
            />
            <span className="ml-2 text-2xl font-bold text-brand">Bluedog</span>
            <PawPrint className="hidden sm:block ml-2 text-brand-500" />
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <span className="text-sm font-medium">Products</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2 min-w-[120px]">
                    <div className="flex flex-col gap-2">
                      <Button variant="ghost" asChild className="text-sm font-medium w-full justify-start">
                        <NavigationMenuLink href="/products/littera">Littera</NavigationMenuLink>
                      </Button>
                      <Button variant="ghost" asChild className="text-sm font-medium w-full justify-start">
                        <NavigationMenuLink href="/products/ebira">Ebira</NavigationMenuLink>
                      </Button>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="ghost" asChild>
              <Link href="/#about-developer">About Me</Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="max-w-xs">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-0">
                      <AccordionTrigger className="py-1.5 px-3 hover:bg-accent hover:no-underline rounded-md text-sm font-medium flex justify-between w-full">
                        <span className="text-center w-full">Products</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col items-center">
                          <SheetClose asChild>
                            <Button variant="ghost" asChild className="justify-center">
                              <Link href="/products/littera">Littera</Link>
                            </Button>
                          </SheetClose>
                          <SheetClose asChild>
                            <Button variant="ghost" asChild className="justify-center">
                              <Link href="/products/ebira">Ebira</Link>
                            </Button>
                          </SheetClose>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <SheetClose asChild>
                    <Button variant="ghost" asChild>
                      <Link href="/#about-developer">About Me</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
