import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sun, Moon, Languages, Menu, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="sticky inset-x-0 top-0 z-40 py-4 transition-all duration-300 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <div className="flex items-center">
            <a className="flex items-center space-x-2" href="/">
              <img
                alt="Logo"
                title="Logo" 
                width="32"
                height="32"
                className="size-8 rounded-md"
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center"
              />
              <span className="text-xl font-semibold">MkSaaS</span>
            </a>
          </div>

          <div className="flex-1 flex items-center justify-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a 
                    href="#features"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Features
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="#pricing"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="/blog"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Blog
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="/docs"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Docs
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="/showcase"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Showcase
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="https://mksaas.affonso.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Affiliates
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    Log in
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Log in to MkSaaS</DialogTitle>
                  </DialogHeader>
                  <p>Login functionality would go here</p>
                </DialogContent>
              </Dialog>
              
              <Button size="sm" asChild>
                <a href="#pricing">Get MkSaaS</a>
              </Button>
            </div>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="border border-border inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground"
            >
              <span className="sr-only">Discord</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="size-8 p-0.5 rounded-full">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle mode</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
                <DropdownMenuItem>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="size-8 p-0.5 rounded-full">
                  <Languages className="h-3 w-3" />
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>中文</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between lg:hidden">
          <a className="flex items-center gap-2" href="/">
            <img
              alt="Logo"
              title="Logo"
              width="32"
              height="32"
              className="size-8 rounded-md"
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center"
            />
            <span className="text-xl font-semibold">MkSaaS</span>
          </a>
          
          <div className="flex items-center justify-end gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="size-8"
            >
              <Menu className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}