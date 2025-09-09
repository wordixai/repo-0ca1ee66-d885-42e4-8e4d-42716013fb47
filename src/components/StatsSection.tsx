export default function StatsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6 space-y-8 md:space-y-16">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">
            Stats
          </h2>
          <p className="text-balance text-2xl text-foreground">
            MkSaaS in numbers
          </p>
          <p className="text-balance text-lg text-muted-foreground">
            MkSaaS community is growing fast
          </p>
        </div>
        
        <div className="grid gap-12 divide-y-0 *:text-center md:grid-cols-3 md:gap-2 md:divide-x">
          <div className="space-y-4">
            <div className="text-5xl font-bold text-primary">360+</div>
            <p>Built-in Components</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold text-primary">200+</div>
            <p>Happy Customers</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold text-primary">1000+</div>
            <p>GitHub Commits</p>
          </div>
        </div>
      </div>
    </section>
  );
}