import { Menu, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

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
            <Button variant="ghost" asChild>
              <Link href="/products/littera">Products</Link>
            </Button>
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
                  <SheetClose asChild>
                    <Button variant="ghost" asChild>
                      <Link href="/products/littera">Products</Link>
                    </Button>
                  </SheetClose>
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
