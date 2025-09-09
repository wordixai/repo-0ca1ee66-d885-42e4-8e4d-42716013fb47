import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  "Complete Next.js boilerplate for AI SaaS",
  "Seamless Stripe payments and webhooks", 
  "Secure authentication and authorization",
  "Sleek UI components and marketing blocks",
  "Feature-rich blog system and documentation",
  "Auto-generated sitemap and OG metadata",
  "Showcase your products on MkSaaS for free",
  "Unlimited personal and commercial projects",
  "Technical support via email and Discord 🛟",
  "Access to 4+ official Github repositories 🎁",
  "Lifetime updates with no extra cost 🔥"
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative px-4 py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-balance text-foreground text-4xl font-bold">
            Pricing
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            Pay once, Lifetime updates, Build unlimited SaaS websites
          </p>
        </div>

        <div className="mt-12">
          <Card className="relative rounded-2xl border shadow-sm ring-4 ring-muted dark:ring-0">
            <div className="grid items-center gap-12 divide-y px-4 py-12 md:grid-cols-2 md:divide-x md:divide-y-0">
              {/* Pricing */}
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <h3 className="text-2xl font-semibold">Lifetime</h3>
                <p className="mt-2 text-muted-foreground">
                  🎁 Special Offer Limited Time 🎁
                </p>
                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                  <span className="text-4xl">$</span>179
                </span>
                
                <div className="mt-4 flex justify-center px-4 md:px-8">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 w-full text-lg py-6">
                        Get MkSaaS
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Get MkSaaS</DialogTitle>
                      </DialogHeader>
                      <p>Purchase flow would go here</p>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <p className="text-muted-foreground mt-8 text-sm">
                  Pay once, Build unlimited SaaS websites
                </p>
                
                {/* Customer avatars */}
                <div className="mt-8 flex justify-center">
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
                </div>
              </div>

              {/* Features list */}
              <div className="relative">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-green-500 dark:text-green-400" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}