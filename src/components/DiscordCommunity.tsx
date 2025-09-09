import { Button } from "@/components/ui/button";

export default function DiscordCommunity() {
  return (
    <section id="discord" className="px-4 py-16 bg-muted/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center sm:grid-cols-2">
          {/* Tech stack visual */}
          <div className="relative mx-auto w-fit">
            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
              <TechIcon />
              <TechIcon />
            </div>
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <TechIcon />
              <div className="relative flex size-20 rounded-xl bg-muted dark:bg-muted">
                <div className="relative z-20 m-auto size-fit">
                  <img
                    alt="Logo"
                    width="32"
                    height="32"
                    className="rounded-md size-8"
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center"
                  />
                </div>
              </div>
              <TechIcon />
            </div>
            <div className="mx-auto flex w-fit justify-center gap-2">
              <TechIcon />
              <TechIcon />
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Join the Discord community
            </h2>
            <p className="text-muted-foreground">
              Connect with{" "}
              <span className="font-bold text-primary text-2xl">1800+</span>{" "}
              makers and get help with your project.
            </p>
            <Button className="gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              <a href="https://discord.com" target="_blank" rel="noreferrer">
                Join Discord for free
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechIcon() {
  return (
    <div className="relative flex size-20 rounded-xl bg-muted dark:bg-muted/50">
      <div className="relative z-20 m-auto size-fit">
        <div className="size-6 bg-foreground/10 rounded" />
      </div>
    </div>
  );
}