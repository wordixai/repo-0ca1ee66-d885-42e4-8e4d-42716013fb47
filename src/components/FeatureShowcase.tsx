import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Github, Lock, CircleUser, ShieldCheck, Settings, CircleDollarSign, Webhook, Wallet, Coins } from "lucide-react";

const featureSections = [
  {
    title: "Authentication",
    description: "Let your users register and login with email/password, or social providers, and manage their profile.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop&crop=center",
    features: [
      {
        icon: Mail,
        title: "Email/Password", 
        content: "Users can register and login with email/password, and you can set the email verification is required to login or not.",
        defaultOpen: true
      },
      {
        icon: Github,
        title: "Social Login",
        content: "Support for Google, GitHub, Discord and other social providers."
      },
      {
        icon: Lock,
        title: "Reset Password", 
        content: "Built-in password reset functionality with email verification."
      },
      {
        icon: CircleUser,
        title: "User Profile",
        content: "Complete user profile management with avatar upload."
      },
      {
        icon: ShieldCheck,
        title: "Cloudflare Turnstile",
        content: "Bot protection with Cloudflare Turnstile integration."
      }
    ]
  },
  {
    title: "Payments",
    description: "Charge your users with Stripe subscription, and one-time payment, and manage the payments with webhooks.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&crop=center",
    features: [
      {
        icon: Settings,
        title: "Pricing Configuration",
        content: ""You can configure the pricing table, including the price, name, description, interval, features and limits.",
        defaultOpen: true
      },
      {
        icon: CircleDollarSign,
        title: "Subscription and One-Time Payment",
        content: "Support for both recurring subscriptions and one-time payments through Stripe."
      },
      {
        icon: Webhook,
        title: "Webhooks Integration", 
        content: "Complete webhook handling for payment events and subscription updates."
      },
      {
        icon: Wallet,
        title: "Billing Management",
        content: "Customer portal for managing subscriptions, invoices, and payment methods."
      },
      {
        icon: Coins,
        title: "Credits System",
        content: "Built-in credit system for usage-based billing and feature limits."
      }
    ]
  }
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="py-16">
      <div className="container max-w-7xl mx-auto space-y-16 px-6 lg:space-y-24">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">
            Features
          </h2>
          <p className="text-balance text-2xl text-foreground">
            What makes MkSaaS different
          </p>
          <p className="text-balance text-lg text-muted-foreground">
            MkSaaS comes with everything you need to build your SaaS
          </p>
        </div>

        {featureSections.map((section, index) => (
          <div
            key={index}
            className="grid gap-12 sm:px-12 lg:grid-cols-12 lg:gap-24 lg:px-0"
          >
            <div className="lg:col-span-5 flex flex-col justify-center gap-8 items-start text-left">
              <div className="lg:pr-0 w-full">
                <h3 className="text-3xl font-semibold lg:text-4xl text-primary leading-normal py-1">
                  {section.title}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {section.description}
                </p>
              </div>
              
              <Accordion type="single" className="w-full" defaultValue="item-0">
                {section.features.map((feature, featureIndex) => (
                  <AccordionItem 
                    key={featureIndex} 
                    value={`item-${featureIndex}`}
                    className="border-b last:border-b-0"
                  >
                    <AccordionTrigger 
                      className="flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium hover:underline [&[data-state=open]>svg]:rotate-180"
                      disabled={feature.defaultOpen}
                    >
                      <div className="flex items-center gap-2 text-base">
                        <feature.icon className="size-4" />
                        {feature.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-0 pb-4 text-muted-foreground">
                      <p>{feature.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="bg-background w-full relative flex overflow-hidden rounded-2xl border p-2 lg:h-auto lg:col-span-7">
              <div className="aspect-[76/59] bg-background relative w-full rounded-2xl">
                <div className="size-full overflow-hidden rounded-2xl border shadow-md">
                  <img
                    alt={section.title}
                    width="1207"
                    height="929"
                    className="size-full object-cover object-left-top"
                    src={section.image}
                  />
                </div>
              </div>
              
              {/* Animated border */}
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
                <div 
                  className="absolute aspect-square bg-gradient-to-l from-transparent via-green-700 to-transparent dark:via-white/50"
                  style={{
                    width: '200px',
                    offsetPath: 'rect(0px auto auto 0px round 200px)',
                    offsetDistance: '79.4333%'
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}