import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Github, Twitter, Mail, Youtube, Sun, Moon, Laptop } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Newsletter Section */}
        <section id="newsletter" className="px-4 py-16 bg-muted/50 -mx-4 mb-16">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center text-center gap-4">
              <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">
                Newsletter
              </h2>
              <p className="text-balance text-2xl text-foreground">
                Join the community
              </p>
              <p className="text-balance text-lg text-muted-foreground">
                Subscribe to our newsletter to get the latest news and updates
              </p>
            </div>
            
            <form className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-4">
              <div className="flex items-center w-full">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 rounded-r-none focus:border-primary focus:border-2 focus:border-r-0"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-l-none size-12"
                >
                  <Send className="size-6" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 pt-16 md:grid-cols-6">
          {/* Brand section */}
          <div className="flex flex-col items-start col-span-full md:col-span-2">
            <div className="space-y-4">
              <div className="items-center space-x-2 flex">
                <img
                  alt="Logo"
                  width="32"
                  height="32"
                  className="size-8 rounded-md"
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center"
                />
                <span className="text-xl font-semibold">MkSaaS</span>
              </div>
              <p className="text-muted-foreground text-base py-2 md:pr-12">
                Make Your AI SaaS Product in a Weekend
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-2 py-2">
                <a href="#" className="border border-border inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Github className="size-4" />
                </a>
                <a href="#" className="border border-border inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Twitter className="size-4" />
                </a>
                <a href="#" className="border border-border inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Youtube className="size-4" />
                </a>
                <a href="#" className="border border-border inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Mail className="size-4" />
                </a>
              </div>
            </div>
            
            {/* Built with badge */}
            <a
              href="/?utm_source=built-with-mksaas"
              target="_blank"
              className="inline-flex items-center justify-center gap-1.5 px-4 h-8 border border-border rounded-md bg-background hover:bg-accent hover:text-accent-foreground text-sm"
            >
              <span>Built with</span>
              <img
                alt="Logo of MkSaaS"
                width="20"
                height="20"
                className="size-5 rounded-full"
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=20&h=20&fit=crop&crop=center"
              />
              <span className="font-semibold">MkSaaS</span>
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-1">
            <span className="text-sm font-semibold uppercase">Product</span>
            <ul className="mt-4 space-y-3">
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="#features">Features</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="#pricing">Pricing</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/blog/faq">FAQ</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <span className="text-sm font-semibold uppercase">Resources</span>
            <ul className="mt-4 space-y-3">
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/blog">Blog</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/docs">Documentation</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="#" target="_blank">Roadmap</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <span className="text-sm font-semibold uppercase">Company</span>
            <ul className="mt-4 space-y-3">
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="#" target="_blank">💰 Affiliates</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/submit">🤟 Submit</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="#discord">💬 Join Discord</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <span className="text-sm font-semibold uppercase">Legal</span>
            <ul className="mt-4 space-y-3">
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/license">License Policy</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/privacy">Privacy Policy</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Badges */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=250&h=54&fit=crop&crop=center"
                alt="Product Hunt Badge"
                style={{ width: "250px", height: "54px" }}
                className="rounded"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=250&h=54&fit=crop&crop=center"
                alt="Featured Badge"
                style={{ width: "250px", height: "54px" }}
                className="rounded"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t py-8">
          <div className="flex items-center justify-between gap-x-4">
            <span className="text-muted-foreground text-sm">
              © 2025 MkSaaS All Rights Reserved.
            </span>
            
            {/* Theme switcher */}
            <div className="flex items-center gap-2 rounded-full border p-1">
              <Button variant="ghost" size="icon" className="size-6 rounded-full">
                <Sun className="size-4" />
              </Button>
              <Button variant="default" size="icon" className="size-6 rounded-full bg-muted text-foreground">
                <Moon className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" className="size-6 rounded-full">
                <Laptop className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}