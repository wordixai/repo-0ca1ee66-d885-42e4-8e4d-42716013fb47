import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <main id="hero" className="overflow-hidden">
      {/* Background decorative elements */}
      <div aria-hidden="true" className="absolute inset-0 isolate hidden opacity-65 lg:block">
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <div className="relative pt-12">
        <div className="mx-auto max-w-7xl px-6">
          {/* Animated ripples */}
          <div className="pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-ripple rounded-full border bg-foreground/25 shadow-xl"
                style={{
                  '--i': i,
                  width: `${210 + i * 70}px`,
                  height: `${210 + i * 70}px`,
                  opacity: 0.24 - i * 0.03,
                  animationDelay: `${i * 0.06}s`,
                  borderStyle: i === 7 ? 'dashed' : 'solid',
                  borderWidth: '1px',
                  borderColor: `hsl(var(--foreground), ${0.05 + i * 0.05})`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) scale(1)'
                } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            {/* Discord banner */}
            <div className="mb-8">
              <a
                target="_blank"
                href="https://discord.com"
                className="hover:bg-accent group mx-auto flex w-fit items-center gap-2 rounded-full border p-1 pl-4"
              >
                <span className="text-foreground text-sm">
                  Join Discord with <strong>1800+</strong> makers
                </span>
                <div className="size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Main heading */}
            <h1 className="mt-8 text-balance font-bricolage-grotesque lg:mt-16 text-5xl xl:text-[5rem]">
              Make Your AI SaaS Product{" "}
              <span className="highlight-text relative inline-block px-2 rounded-lg mx-1 py-0.5">
                in a weekend
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-4xl text-balance text-lg text-muted-foreground">
              The complete Next.js boilerplate for building profitable SaaS, packed with AI, auth, payments, i18n, newsletter, dashboard, blog, docs, blocks, themes, SEO and more.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-row items-center justify-center gap-4">
              <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                <Button size="lg" className="h-10 rounded-xl px-5 text-base">
                  Get MkSaaS
                </Button>
              </div>
              <Button variant="outline" size="lg" className="h-10 rounded-xl px-5" asChild>
                <a href="https://demo.mksaas.com/" target="_blank">
                  See Demo
                </a>
              </Button>
            </div>

            {/* User avatars */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4">
              <div className="z-10 flex -space-x-4 rtl:space-x-reverse">
                {Array.from({ length: 11 }).map((_, i) => (
                  <a key={i} href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                      src={`https://images.unsplash.com/photo-${1500000000 + i * 1000000}?w=40&h=40&fit=crop&crop=faces`}
                      width="40"
                      height="40"
                      alt={`Avatar ${i + 1}`}
                    />
                  </a>
                ))}
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
                  href="/"
                >
                  200+
                </a>
              </div>
              <p className="text-muted-foreground text-sm">
                200+ makers ship faster with MkSaaS
              </p>
            </div>
          </div>
        </div>

        {/* Hero Dashboard Image */}
        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-16">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg bg-muted/50 ring-1 ring-background">
            <img
              alt="app screen"
              width="2796"
              height="2008"
              className="relative rounded-2xl"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center"
            />
          </div>
        </div>
      </div>
    </main>
  );
}