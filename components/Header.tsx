"use client";

import { LANG_LABEL, otherLang } from "@/lib/i18n";
import { CHROME, PRODUCTS, counterpart, langFromPathname, sitePaths } from "@/lib/site";
import { Languages, Menu, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

// The header is a client component for one reason: it reads the current path to know which language
// the visitor is reading, and where the language switch should take them.
export default function Header() {
  const pathname = usePathname();
  const lang = langFromPathname(pathname);
  const next = otherLang(lang);
  const switchHref = counterpart(pathname, next);

  return (
    <header className="border-b border-black/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <Link href={sitePaths.home[lang]} className="flex items-center">
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
                    <span className="text-sm font-medium">{CHROME.products[lang]}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2 min-w-[140px]">
                    <div className="flex flex-col gap-2">
                      {PRODUCTS.map((product) => (
                        <Button
                          key={product.key}
                          variant="ghost"
                          asChild
                          className="text-sm font-medium w-full justify-start"
                        >
                          <NavigationMenuLink href={product.href[lang]}>{product.name[lang]}</NavigationMenuLink>
                        </Button>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="ghost" asChild>
              <Link href={`${sitePaths.home[lang]}#about-developer`}>{CHROME.aboutMe[lang]}</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href={switchHref} hrefLang={next} lang={next}>
                <Languages className="h-4 w-4 mr-1.5" aria-hidden />
                {LANG_LABEL[next]}
              </Link>
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
                  <SheetTitle>{CHROME.menu[lang]}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-0">
                      <AccordionTrigger className="py-1.5 px-3 hover:bg-accent hover:no-underline rounded-md text-sm font-medium flex justify-between w-full">
                        <span className="text-center w-full">{CHROME.products[lang]}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col items-center">
                          {PRODUCTS.map((product) => (
                            <SheetClose key={product.key} asChild>
                              <Button variant="ghost" asChild className="justify-center">
                                <Link href={product.href[lang]}>{product.name[lang]}</Link>
                              </Button>
                            </SheetClose>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <SheetClose asChild>
                    <Button variant="ghost" asChild>
                      <Link href={`${sitePaths.home[lang]}#about-developer`}>{CHROME.aboutMe[lang]}</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="ghost" asChild>
                      <Link href={switchHref} hrefLang={next} lang={next}>
                        <Languages className="h-4 w-4 mr-1.5" aria-hidden />
                        {LANG_LABEL[next]}
                      </Link>
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
