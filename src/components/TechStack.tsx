import { Card, CardContent } from "@/components/ui/card";

const techStack = [
  {
    name: "Next.js",
    description: "The most popular full stack React framework.",
    href: "https://nextjs.org/",
    icon: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=48&h=48&fit=crop&crop=center"
  },
  {
    name: "BetterAuth",
    description: "The best open source authentication library.",
    href: "https://authjs.dev/",
    icon: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=48&h=48&fit=crop&crop=center"
  },
  {
    name: "Drizzle ORM",
    description: "Lightweight, performant, headless TypeScript ORM.",
    href: "https://orm.drizzle.team/",
    icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=48&h=48&fit=crop&crop=center"
  },
  {
    name: "Stripe",
    description: "The best and most secure online payment service.",
    href: "https://stripe.com/",
    icon: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=48&h=48&fit=crop&crop=center"
  },
  {
    name: "Shadcn UI",
    description: "Open source components for building modern websites.",
    href: "https://ui.shadcn.com/",
    icon: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=48&h=48&fit=crop&crop=center"
  },
  {
    name: "Tailwind CSS",
    description: "The CSS framework for rapid UI development.",
    href: "https://tailwindcss.com/",
    icon: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=center"
  },
  {
    name: "MagicUI",
    description: "150+ free open source animated components and effects.",
    href: "https://magicui.design/",
    icon: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=48&h=48&fit=crop&crop=center"
  },
  {
    name: "Resend",
    description: "The best modern email service for developers.",
    href: "https://resend.com/",
    icon: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=48&h=48&fit=crop&crop=center"
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">
            Tech Stack
          </h2>
          <p className="text-balance text-2xl text-foreground">
            Build with your favorite tech stack
          </p>
          <p className="text-balance text-lg text-muted-foreground">
            Use the latest industry-standard tech stack for your next project
          </p>
        </div>

        <div className="mt-16 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => (
            <a
              key={tech.name}
              target="_blank"
              className="block group"
              href={tech.href}
            >
              <Card className="group relative overflow-hidden rounded-2xl border bg-background p-4 md:p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer h-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                />
                <CardContent className="relative p-0">
                  <div className="relative flex items-center gap-3">
                    <div className="flex size-12 rounded-2xl border border-border shadow-sm">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="relative m-auto size-6 rounded"
                      />
                    </div>
                    <h4 className="font-medium">{tech.name}</h4>
                  </div>
                  <p className="mt-6 text-muted-foreground text-sm lg:text-base">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}