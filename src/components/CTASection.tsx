import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <div className="relative overflow-hidden w-full flex flex-col items-center justify-center px-8 py-24 md:p-24 md:py-48 bg-muted/50">
      {/* Background ripples */}
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

      <div className="flex flex-col items-center text-center gap-4">
        <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">
          Ready to launch?
        </h2>
        <p className="text-balance text-2xl text-foreground">
          Start making money today!
        </p>
        <p className="text-balance text-lg text-muted-foreground">
          Launch your AI SaaS product in a weekend, and make money from day one
        </p>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Button>
          <span>Get MkSaaS</span>
        </Button>
        <Button variant="outline" asChild>
          <a href="#" target="_blank">
            <span>See Demo</span>
          </a>
        </Button>
      </div>
    </div>
  );
}